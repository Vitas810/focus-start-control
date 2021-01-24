import React from 'react';
import TypeElement from '../typeElemet/typeElement';
import Header from '../header/header';
import Progress from '../progress/progress';

const profit = [
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
];

class ProfitList extends React.Component {
  state = { profit };

  render() {
    let sumArray = [];
    profit.map((item) => sumArray.push(item.total));
    let sum = sumArray.reduce((a, b) => a + b);

    return (
      <div>
        <Header />
        <main>
          <div className="container">
            <div className="wrapper">
              <Progress />
              <div className="type-items">
                {this.state.profit.map((item) => (
                  <TypeElement
                    category={item.category}
                    total={item.total}
                    percent={Math.round((item.total / sum) * 100)}
                    completed={item.combined}
                    key={item.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default ProfitList;
