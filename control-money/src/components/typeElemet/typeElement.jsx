import React from 'react';
import PropTypes from 'prop-types';
import './typeElement.scss';
import IconsSvg from '../iconsSvg/iconsSvg';
import { ReactComponent as DeleteIcon } from './delete.svg';

class TypeElement extends React.Component {
  render() {
    return (
      <div className="type-item">
        <div className="type-items__elem">
          <div className="cat-circle">
            <IconsSvg name="food" color="#fff" size="40" classNameName="icon" />
          </div>
          <span className="type-item__title">{this.props.category}</span>
        </div>
        <span className="type-item__text">{this.props.percent}%</span>
        <span className="type-item__text">{this.props.total}P</span>

        <DeleteIcon
          className="delete-icon"
          onClick={() => {
            this.props.deleteType(this.props.id);
          }}
        />
      </div>
    );
  }
}

TypeElement.propTypes = {
  category: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  percent: PropTypes.number.isRequired,
};

export default TypeElement;
