import React from 'react';
import './header.scss';
import Local from '../../locale';

const Header = () => {
  const locale = Local.header;
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="header-block">
            <div className="logo">
              <img src="" alt="" />
            </div>
            <ul className="header-block-menu">
              <li>
                <a href="#">{locale.profit}</a>
              </li>
              <li>
                <a href="#">{locale.expense}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
