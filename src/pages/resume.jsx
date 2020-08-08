import React, { useEffect } from 'react';
import logo from './Me.jpg';
import { useDispatch, } from "react-redux";
import { setActiveMenu } from "../redux/actions/navbar-action";

const Home = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setActiveMenu('resume'))
  }, [])

  return <section className="resume-page">
    <div className="container">
      <div className='resume-inner-page'>
        <div className='resume-main'>
          <h1 className="page-title">
            Resume
          </h1>

          <div className="timeline">
            <div className="entry">
              <div className="title">
                01/2020 to Present
              </div>
              <div className="body">
                <h4 className='resume-header'> Front End Developer</h4>
                <h5 className='resume-short'>Konzek Teknoloji A.Ş, Istanbul, Turkey </h5>
                <ul className='resume-description'>
                  <li>Remodel and create good looking UI websites using multiple technologies such as React, JavaScript, Sass and more. </li>
                  <li>Make suggestions for better solutions to problems.</li>
                  <li>Identify and troubleshoot various issues and coding problems.</li>
                </ul>
              </div>
            </div>
            <div className="entry">
              <div className="title">
                04/2018 to 12/2019
              </div>
              <div className="body">
                <h4 className='resume-header'> Web Developer</h4>
                <h5 className='resume-short'>   Freelance, Tabriz, Iran </h5>
                <ul className='resume-description'>
                  <li>Application was built using SQL Server 2016, ASP.NET Core 2.2, along with front end technologies that include HTML5, CSS3, jQuery, JavaScript, and Bootstrap.</li>
                  <li>Worked on front-end and page design with HTML5/HTML, CSS3/CSS, JavaScript, JQuery, Ajax, JSON, React JS, Gulp, Twitter Bootstrap, and Webpack.</li>
                  <li>Use package manager of NPM and Yarn in React projects.</li>
                </ul>
              </div>
            </div>
            <div className="entry">
              <div className="title">
                04/2013 to 04/2018
              </div>
              <div className="body">
                <h4 className='resume-header'>Web Developer</h4>
                <h5 className='resume-short'>Pouyagaran Pars, Tabriz, Iran</h5>
                <ul className='resume-description'>
                  <li>Technologies used (C#, ASP.Net MVC, ASP.Net Core, HTML, CSS, SQL Server, Git, JQuery, JavaScript, CSS, Angular4, Bootstrap, Entity framework, WEBAPI2).</li>
                  <li>Programmed LINQ TO SQL for communication between application and database.</li>
                  <li>Developed Database Objects such as Tables, Views, Stored Procedures and Functions using SQL Server Management Studio (SSMS).</li>
                  <li>Created Web service API (REST) to leverage the application to mobile and desktop users.</li>
                  <li>Work in agile environment developing features planned as part of a roadmap.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Home