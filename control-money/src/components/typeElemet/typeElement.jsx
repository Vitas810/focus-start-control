import React from 'react';
import PropTypes from 'prop-types';
import './typeElement.scss';
import IconsSvg from '../iconsSvg/iconsSvg';
import Button from '../button/button';
import Locale from '../../locale';

const TypeElement = (props) => {
  const locale = Locale.btn;
  return (
    <div className="type-item">
      <div className="type-items__elem">
        <div className="cat-circle">
          <IconsSvg name="food" color="#fff" size="40" classNameName="icon" />
        </div>
        <span className="type-item__title">{props.category}</span>
      </div>
      <span className="type-item__text">{props.percent}%</span>
      <span className="type-item__text">{props.total}P</span>
      <Button label={locale.del} />
    </div>
  );
};

TypeElement.propTypes = {
  category: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default TypeElement;
