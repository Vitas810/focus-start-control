import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Locale from '../../locale';
import controlRequest from '../../api/api';
import './addType.scss';

class AddType extends React.Component {
  state = { total: '', category: [] };

  static propTypes = {
    addType: PropTypes.func.isRequired,
  };

  componentDidMount() {
    controlRequest.get('/types/category').then((response) => {
      const category = response.data.data;
      this.setState({ category });
    });
  }

  addType = () => {
    const { addType } = this.props;
    let { total, categoryValue, inputHeaderValue } = this.state;
    total = Number(total);

    addType(total, categoryValue, inputHeaderValue);
  };

  handleInput = (event) => {
    this.setState({ total: event.target.value });
  };
  handleRadioCategory = (event) => {
    this.setState({ categoryValue: event.target.value });
  };
  handleRadioHeader = (event) => {
    this.setState({ inputHeaderValue: event.target.value });
  };
  toggleBtnClouse = () => {
    const clouseForm = document.querySelector('.type-add');
    clouseForm.classList.toggle('visible');
  };

  render() {
    const locale = Locale.btn;
    const localeHeader = Locale.header;
    const { total, categoryValue, inputHeaderValue } = this.state;
    console.log('categoryValue', categoryValue);
    console.log('inputHeaderValue', inputHeaderValue);
    return (
      <form>
        <div className="type-add">
          <ul className="header-block-menu">
            <li>
              <input
                id="22"
                type="radio"
                name="typeCat"
                checked={this.state.inputHeaderValue === 'profit'}
                value="profit"
                onChange={this.handleRadioHeader}
              />
              <label htmlFor="22">{localeHeader.profit}</label>
            </li>
            <li>
              <input
                id="11"
                type="radio"
                name="typeCat"
                checked={this.state.inputHeaderValue === 'expense'}
                value="expense"
                onChange={this.handleRadioHeader}
              />
              <label htmlFor="11">{localeHeader.expense}</label>
            </li>
          </ul>
          <button onClick={this.toggleBtnClouse}> Закрыть</button>

          <input type="text" value={total} onChange={this.handleInput} />

          <div className="type-add__items">
            {this.state.category.map((item) => (
              <div className="type-add__item" key={item.id}>
                <img src={item.src} alt={item.category} />
                <input
                  id={item.id}
                  type="radio"
                  name="types"
                  checked={this.state.categoryValue === item.category}
                  value={item.category}
                  onChange={this.handleRadioCategory}
                />
                <label htmlFor={item.id}>{item.category}</label>
              </div>
            ))}
          </div>

          <Button onClick={this.addType} label={locale.add} />
        </div>
      </form>
    );
  }
}

export default AddType;
