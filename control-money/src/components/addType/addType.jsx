import React from 'react';
import './addType.scss';

const addTypea = () => {
  return (
    <div class="type-add">
      <div class="header-block">
        <ul class="header-block-menu">
          <li>
            <a href="#">Доходы</a>
          </li>
          <li>
            <a href="#">Расходы</a>
          </li>
        </ul>
      </div>
      <input type="text" placeholder="Сумма" required />
      <div class="type-add__items">
        <div class="type-add__item">
          <img
            src="./img/people_family_parents_child_boy_icon_124729.svg"
            alt="family"
          />
          <span class="type-add__title">Подарки</span>
        </div>
        <div class="type-add__item">
          <img
            src="./img/people_family_parents_child_boy_icon_124729.svg"
            alt="family"
          />
          <span class="type-add__title">Кафе</span>
        </div>
        <div class="type-add__item">
          <img
            src="./img/people_family_parents_child_boy_icon_124729.svg"
            alt="family"
          />
          <span class="type-add__title">Образование</span>
        </div>
        <div class="type-add__item">
          <img
            src="./img/people_family_parents_child_boy_icon_124729.svg"
            alt="family"
          />
          <span class="type-add__title">Семья</span>
        </div>
        <div class="type-add__item">
          <img
            src="./img/people_family_parents_child_boy_icon_124729.svg"
            alt="family"
          />
          <span class="type-add__title">Транспорт</span>
        </div>
        <div class="type-add__item">
          <img
            src="./img/people_family_parents_child_boy_icon_124729.svg"
            alt="family"
          />
          <span class="type-add__title">Спорт</span>
        </div>
      </div>
      <input type="text" placeholder="Комментарий" />
    </div>
  );
};
