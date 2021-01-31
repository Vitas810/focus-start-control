import React from 'react';
import Button from '../button';
import './progress.scss';
import Local from '../../locale';

class Progress extends React.Component {
  toggleBtnOpen = () => {
    const openForm = document.querySelector('.type-add');
    const clouseElements = document.querySelector('.type-items');
    openForm.classList.add('visible');
    clouseElements.classList.add('clouse');
  };

  render() {
    const locale = Local.progress;
    const localeBtn = Local.btn;
    console.log('propsProgress', this.props);
    let profits = Array.from(this.props.profit);

    return (
      <div className="progres-types">
        <div className="type-date">
          <button className="type-date__item" onClick={this.props.filterDays}>
            {locale.day}
          </button>
          <button className="type-date__item" onClick={this.props.filterWeek}>
            {locale.week}
          </button>
          <span className="type-date__item">{locale.month}</span>
        </div>

        <div className="progress">
          {profits.map((item) => (
            <div
              key={item.id}
              style={{
                background: ` ${item.colorCategor}`,
                width: `${(item.total / this.props.sum) * 100}%`,
              }}
            ></div>
          ))}
        </div>

        <div className="summ-block">
          <div className="type-summ">
            <span className="type-summ__total">{this.props.sum}P</span>
            <Button label={localeBtn.add} onClick={this.toggleBtnOpen} />
          </div>
        </div>
      </div>
    );
  }
}

export default Progress;
