import React from 'react';
import TypeElement from '../typeElemet';
import Header from '../header';
import Progress from '../progress';
import AddType from '../addType';
import Locale from '../../locale';
import controlRequest from '../../api/api';
import Message from '../message';

class ProfitList extends React.Component {
  state = { profit: [], message: null };

  componentDidMount() {
    controlRequest.get('/types/profit').then((response) => {
      const profit = response.data.data;
      this.setState({ profit });
    });
  }
  deleteType = (id) => {
    controlRequest.delete('/types/profit/' + id).then((response) => {
      this.setState((prevState) => ({
        profit: prevState.profit.filter((el) => el.id !== id),
      }));
    });

    console.log('deleteType');
    console.log('id', id);
  };

  addType = (total) => {
    controlRequest
      .post('./types/profit/', {
        total,
      })
      .then((response) => {
        if (response.data.status === 'OK') {
          this.setState((prevState) => ({
            profit: [...prevState.profit, response.data.data],
          }));
        } else {
          this.setState({ message: response.data.message });
        }
      })
      .catch(() => this.setState({ message: 'NETWORK_ERROR' }));
  };

  render() {
    const locale = Locale.typesList;
    const { message } = this.state;
    let sumArray = [];

    this.state.profit.map((item) => sumArray.push(item.total));
    let sum;
    sumArray.length !== 0
      ? (sum = sumArray.reduce((a, b) => a + b))
      : console.log('нет расходов, массив пуст');

    console.log('sum', sum);
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <div className="wrapper">
              <Progress sum={sum} />
              <div className="type-items">
                {this.state.profit.length === 0 ? (
                  <div>{locale.emptyMessage}</div>
                ) : (
                  this.state.profit.map((item) => (
                    <TypeElement
                      category={item.category}
                      total={Number(item.total)}
                      percent={Math.round((item.total / sum) * 100)}
                      completed={item.combined}
                      id={item.id}
                      key={item.id}
                      deleteType={this.deleteType}
                    />
                  ))
                )}
              </div>
              <AddType addType={this.addType} />
              {message && <Message message={message} />}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProfitList;
