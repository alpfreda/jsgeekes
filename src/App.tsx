import React from 'react';
import { Header } from './components/header';
import { Home } from './pages/Home';

export const App: React.FC<{}> = () => (
  <div>
    <Header />
    <Home />
  </div>
);
