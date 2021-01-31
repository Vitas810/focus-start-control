import React from 'react';
import TypeElement from '../typeElemet';
import Progress from '../progress';
import AddType from '../addType';
import Locale from '../../locale';
import controlRequest from '../../api/api';
import Message from '../message';

class ProfitList extends React.Component {
  state = { profit: [], message: null };

  componentDidMount() {
    controlRequest
      .get('/types/profit')
      .then((response) => {
        const profit = response.data.data;
        this.setState({ profit });
      })
      .catch(() => this.setState({ message: 'NETWORK_ERROR' }));
  }
  deleteType = (id) => {
    controlRequest.delete('/types/profit/' + id).then((response) => {
      this.setState((prevState) => ({
        profit: prevState.profit.filter((el) => el.id !== id),
      }));
    });
  };

  addType = (
    total,
    categoryValue,
    inputHeaderValue,
    srcImgCat,
    colorCategor
  ) => {
    controlRequest
      .post('/types/profit/', {
        total,
        categoryValue,
        inputHeaderValue,
        srcImgCat,
        colorCategor,
      })
      .then((response) => {
        if (response.data.status === 'OK') {
          this.setState((prevState) => ({
            profit: [...prevState.profit, response.data.data],
          }));
        } else {
          this.setState({ message: response.data.message });
        }
      });
  };

  render() {
    const locale = Locale.typesList;
    const { message } = this.state;
    let sumArray = [];

    this.state.profit.map((item) => sumArray.push(item.total));
    let sum;
    sumArray.length !== 0
      ? (sum = sumArray.reduce((a, b) => a + b))
      : (sum = 'Добавьте доходы.');

    return (
      <div>
        <main>
          <div className="container">
            <div className="wrapper">
              <Progress sum={sum} profit={this.state.profit} />
              {message && <Message message={message} />}
              <div className="type-items">
                {this.state.profit.length === 0 ? (
                  <div>{locale.emptyMessage}</div>
                ) : (
                  this.state.profit.map((item) => (
                    <TypeElement
                      category={item.categoryValue}
                      total={Number(item.total)}
                      percent={Math.round((item.total / sum) * 100)}
                      completed={item.combined}
                      src={item.srcImgCat}
                      id={item.id}
                      key={item.id}
                      color={item.colorCategor}
                      deleteType={this.deleteType}
                    />
                  ))
                )}
              </div>
              <AddType addType={this.addType} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProfitList;
