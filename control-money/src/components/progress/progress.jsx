import React from 'react';
import Button from '../button';
import './progress.scss';
import Local from '../../locale';

const toggleBtnOpen = () => {
  const openForm = document.querySelector('.type-add');
  openForm.classList.toggle('visible');
};

const Progress = (props) => {
  const locale = Local.progress;
  const localeBtn = Local.btn;
  console.log('sssss', props);
  return (
    <div className="progres-types">
      <div className="type-date">
        <span className="type-date__item">{locale.day}</span>
        <span className="type-date__item">{locale.week}</span>
        <span className="type-date__item">{locale.month}</span>
      </div>

      <div className="progress-wrap">
        <div className="progress-bar half"></div>
      </div>

      <div className="summ-block">
        <div className="type-summ">
          <span className="type-summ__total">{props.sum}P</span>
          <Button label={localeBtn.add} onClick={toggleBtnOpen} />
        </div>
      </div>
    </div>
  );
};

export default Progress;
