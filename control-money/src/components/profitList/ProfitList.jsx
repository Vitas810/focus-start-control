import React from 'react';
import TypeElement from '../typeElemet';
import Header from '../header';
import Progress from '../progress';
import AddType from '../addType';

// const profit = [
//   {
//     id: 'dSdSpvm0a',
//     type: 'profit',
//     total: 90,
//     category: 'Кино',
//     date: '17.01.2021',
//     combined: false,
//   },
//   {
//     id: 'dSdSpvm0as',
//     type: 'profit',
//     total: 190,
//     category: 'Магазин',
//     date: '17.01.2021',
//     combined: false,
//   },
// ];

class ProfitList extends React.Component {
  state = {
    profit: [
      {
        id: 'dSdSpvm0a',
        type: 'profit',
        total: 90,
        category: 'Кино',
        date: '17.01.2021',
        combined: false,
      },
      {
        id: 'dSdSpvm0as',
        type: 'profit',
        total: 190,
        category: 'Магазин',
        date: '17.01.2021',
        combined: false,
      },
    ],
  };

  addType = (total) => {
    this.setState((prevState) => ({
      profit: [
        ...prevState.profit,
        { id: Math.random(), total, combined: false },
      ],
    }));
  };

  deleteType = (id) => {
    this.setState((prevState) => ({
      profit: prevState.profit.filter((el) => el.id !== id),
    }));
    console.log('deleteType');
    console.log('id', id);
  };

  render() {
    let sumArray = [];
    this.state.profit.map((item) => sumArray.push(item.total));
    let sum = sumArray.reduce((a, b) => a + b);
    console.log('sum', sum);
    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <div className="wrapper">
              <Progress sum={sum} />
              <div className="type-items">
                {this.state.profit.map((item) => (
                  <TypeElement
                    category={item.category}
                    total={Number(item.total)}
                    percent={Math.round((item.total / sum) * 100)}
                    completed={item.combined}
                    id={item.id}
                    key={item.id}
                    deleteType={this.deleteType}
                  />
                ))}
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
