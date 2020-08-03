import React from 'react';
import Logo from "./logo";
import Menu from './menu';

const Header = ({ activeMenu }) => (
  <header className="primary-header">
    <div className="container">
      <div className="primary-header-inner">
        <Logo />
        <Menu activeMenu={activeMenu}/>
      </div>
    </div>
  </header>
);

export default Header