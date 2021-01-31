import React from 'react';
import { Link } from 'react-router-dom';
import Local from '../../locale';
import './header.scss';
import { ReactComponent as ReactIcon } from './logo.svg';

const Header = () => {
  const locale = Local.header;
  return (
    <header>
      <div className="container">
        <div className="wrapper">
          <div className="header-block">
            <div className="logo">
              <ReactIcon />
            </div>
            <ul className="header-block-menu">
              <li>
                <Link to="/"> {locale.profit} </Link>
              </li>

              <li>
                <Link to="/expenseList"> {locale.expense} </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
