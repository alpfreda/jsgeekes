import React from 'react';
import { Logo } from "./logo";
import { Menu } from './menu';

export const Header: React.FC<{}> = () => (
  <header className="primary-header">
    <div className="container">
      <div className="primary-header-inner">
        <Logo />
        <Menu />
      </div>
    </div>
  </header>
);
