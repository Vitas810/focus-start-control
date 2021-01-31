import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Locale from '../../locale';
import controlRequest from '../../api/api';
import './addType.scss';

class AddType extends React.Component {
  state = { total: '', categorys: [] };

  static propTypes = {
    addType: PropTypes.func.isRequired,
  };

  componentDidMount() {
    controlRequest.get('/types/category').then((response) => {
      const categorys = response.data.data;
      this.setState({ categorys });
    });
  }

  addType = () => {
    const { addType } = this.props;
    let {
      total,
      categoryValue,
      inputHeaderValue,
      srcImgCat,
      colorCategor,
    } = this.state;
    total = Number(total);

    addType(total, categoryValue, inputHeaderValue, srcImgCat, colorCategor);
  };

  handleInput = (event) => {
    this.setState({ total: event.target.value });
  };
  handleRadioCategory = (event) => {
    let categorFind = this.state.categorys.find(
      (id) => id.id === event.target.id
    );
    this.setState({
      categoryValue: event.target.value,
      colorCategor: categorFind.color,
      srcImgCat: categorFind.src,
    });
  };
  handleRadioHeader = (event) => {
    this.setState({ inputHeaderValue: event.target.value });
  };
  toggleBtnClouse = () => {
    const clouseForm = document.querySelector('.type-add');
    const openElements = document.querySelector('.type-items');
    clouseForm.classList.toggle('visible');
    openElements.classList.remove('clouse');
  };

  render() {
    const locale = Locale.btn;
    const localeHeader = Locale.header;
    const { total } = this.state;

    return (
      <form>
        <div className="type-add">
          <ul className="add-block-menu">
            <li>
              <input
                id="22"
                type="radio"
                name="typeCat"
                checked={this.state.inputHeaderValue === 'profit'}
                value="profit"
                onChange={this.handleRadioHeader}
                required
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
          <Button
            className="add-btn__clouse"
            onClick={this.toggleBtnClouse}
            label={locale.clouse}
          />

          <input
            className="add-block__input"
            type="number"
            value={total}
            onChange={this.handleInput}
            placeholder="Введите сумму"
            required
          />

          <div className="type-add__items">
            {this.state.categorys.map((category) => (
              <div className="type-add__item" key={category.id}>
                <img src={category.src} alt={category.category} />
                <input
                  id={category.id}
                  type="radio"
                  name="types"
                  checked={this.state.categoryValue === category.category}
                  value={category.category}
                  onChange={this.handleRadioCategory}
                  required
                />
                <label htmlFor={category.id}>{category.category}</label>
              </div>
            ))}
          </div>

          <Button
            className="summ-block__btn type-btn"
            onClick={this.addType}
            label={locale.add}
          />
        </div>
      </form>
    );
  }
}

export default AddType;
