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

    console.log('deleteType');
    console.log('id', id);
  };

  filterDays = () => {
    controlRequest.get('/types/profit/').then((response) => {
      this.setState((prevState) => ({
        profit: prevState.profit.filter(
          (element) => element.date === new Date().toLocaleDateString()
        ),
      }));
    });
  };

  filterWeek = () => {
    const beginWeek = new Date().toLocaleDateString();
    console.log('beginWeek', beginWeek);
    var m_names = new Array(
      '01',
      '02',
      '03',
      '04',
      '05',
      '06',
      '07',
      '08',
      '09',
      '10',
      '11',
      '12'
    );
    var d = new Date();
    d.setDate(d.getDate() - 6);
    let curr_date = d.getDate();
    let curr_month = d.getMonth();
    let curr_year = d.getFullYear();
    let endWeek = curr_date + '.' + m_names[curr_month] + '.' + curr_year;

    console.log('endWeek', endWeek);

    controlRequest.get('/types/profit/').then((response) => {
      this.setState((prevState) => ({
        profit: prevState.profit.filter(
          (date) => date.date >= endWeek && date.date <= beginWeek
        ),
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
      : console.log('нет расходов, массив пуст');

    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <div className="wrapper">
              <Progress
                sum={sum}
                profit={this.state.profit}
                filterDays={this.filterDays}
                filterWeek={this.filterWeek}
              />
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
