import React from 'react';
import TypeElement from '../typeElemet';
import Progress from '../progress';
import AddType from '../addType';
import Locale from '../../locale';
import controlRequest from '../../api/api';
import Message from '../message';

class ExpenseList extends React.Component {
  state = { expenses: [], message: null };

  componentDidMount() {
    controlRequest
      .get('/types/expense')
      .then((response) => {
        const expenses = response.data.data;
        this.setState({ expenses });
      })
      .catch(() => this.setState({ message: 'NETWORK_ERROR' }));
  }
  deleteType = (id) => {
    controlRequest.delete('/types/expense/' + id).then((response) => {
      this.setState((prevState) => ({
        expenses: prevState.expenses.filter((el) => el.id !== id),
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
      .post('/types/expense/', {
        total,
        categoryValue,
        inputHeaderValue,
        srcImgCat,
        colorCategor,
      })
      .then((response) => {
        if (response.data.status === 'OK') {
          this.setState((prevState) => ({
            expenses: [...prevState.expenses, response.data.data],
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

    this.state.expenses.map((item) => sumArray.push(item.total));
    let sum;
    sumArray.length !== 0
      ? (sum = sumArray.reduce((a, b) => a + b))
      : (sum = 'Добавьте расходы.');

    return (
      <div>
        <main>
          <div className="container">
            <div className="wrapper">
              <Progress sum={sum} profit={this.state.expenses} />
              {message && <Message message={message} />}
              <div className="type-items">
                {this.state.expenses.length === 0 ? (
                  <div>{locale.emptyMessage}</div>
                ) : (
                  this.state.expenses.map((item) => (
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

export default ExpenseList;
