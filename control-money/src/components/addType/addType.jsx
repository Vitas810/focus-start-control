import React from 'react';
import PropTypes from 'prop-types';
import Button from '../button';
import Locale from '../../locale';
import './addType.scss';

class AddType extends React.Component {
  state = { total: '' };

  static propTypes = {
    addType: PropTypes.func.isRequired,
  };

  addType = () => {
    const { addType } = this.props;
    let { total } = this.state;
    total = Number(total);

    addType(total);
  };

  handleInput = (event) => {
    this.setState({ total: event.target.value });
  };
  render() {
    const locale = Locale.btn;
    const { total } = this.state;
    return (
      <div className="type-add">
        <input type="text" value={total} onChange={this.handleInput} />
        <div className="type-add__items">
          <div className="type-add__item">
            <img
              src="./img/people_family_parents_child_boy_icon_124729.svg"
              alt="family"
            />
            <span className="type-add__title">Подарки</span>
          </div>
          <div className="type-add__item">
            <img
              src="./img/people_family_parents_child_boy_icon_124729.svg"
              alt="family"
            />
            <span className="type-add__title">Кафе</span>
          </div>
          <div className="type-add__item">
            <img
              src="./img/people_family_parents_child_boy_icon_124729.svg"
              alt="family"
            />
            <span className="type-add__title">Образование</span>
          </div>
          <div className="type-add__item">
            <img
              src="./img/people_family_parents_child_boy_icon_124729.svg"
              alt="family"
            />
            <span className="type-add__title">Семья</span>
          </div>
          <div className="type-add__item">
            <img
              src="./img/people_family_parents_child_boy_icon_124729.svg"
              alt="family"
            />
            <span className="type-add__title">Транспорт</span>
          </div>
          <div className="type-add__item">
            <img
              src="./img/people_family_parents_child_boy_icon_124729.svg"
              alt="family"
            />
            <span className="type-add__title">Спорт</span>
          </div>
        </div>

        <Button onClick={this.addType} label={locale.add} />
      </div>
    );
  }
}

export default AddType;
