import React from 'react'
import Me from '../assets/img/me.jpg'

export const Home: React.FC<{}> = () => (
  <main className='main-page'>
    <div className="container">
      <div className="main-page-inner">
        <div className='main-page-avatar'>
          <img src={Me} alt='Mehdi Akbarzadeh' />
        </div>
        <div className='main-page-content'>
          <h1 className='main-page-content-name'>Mehdi Akbarzadeh</h1>
          <h3 className='main-page-content-title'>Web Developer</h3>
          <p className='main-page-content-info'>
            Front end developer with over 5 years of industry experience in application design,
            development. Skilled in React, Redux, React Hook,Jquery, css3, Sass,
            Html5 and Test Driven Development.
            </p>
        </div>
      </div>
      <div className='main-page-social'>
        <a href='#' className='twitter'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path opacity="0" d="M0 0h24v24H0z"></path>
            <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
          </svg>
        </a>
        <a href='#' className='linkedin'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <rect height="11" width="4" x="3" y="9"></rect>
            <circle cx="5" cy="5" r="2"></circle>
            <path d="M16.5,8.25A4.47251,4.47251,0,0,0,13,9.95343V9H9V20h4V13a2,2,0,0,1,4,0v7h4V12.75A4.5,4.5,0,0,0,16.5,8.25Z"></path>
          </svg>
        </a>
      </div>
    </div>
  </main>
)