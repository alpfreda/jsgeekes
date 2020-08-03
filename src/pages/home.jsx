import React from 'react';
import logo from './Me.jpg';

 const Home = () => (
  <section className="main-page">
    <div className="container">
      <div className="main-page-inner">
        <div className="main-page-avatar">
          <img src={logo} alt="Mehdi Akbarzadeh" />
        </div>
        <div className="main-page-content">
          <h1 className="main-page-content-name">Mehdi Akbarzadeh</h1>
          <h3 className="main-page-content-title">Web Developer</h3>
          <p className="main-page-content-info">
            Front end developer live in Istanbul, experience in application development with React, Redux, Jquery, css3, Sass end etc.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Home