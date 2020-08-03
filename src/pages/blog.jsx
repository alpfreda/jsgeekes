import React from 'react';
import logo from './Me.jpg';

const Blog = () => (
  <section className="blog-page">
    <div className="container">
      <div className="blog-page-inner">
        <h1 className="page-title">
          Blog
        </h1>
        <div className='blog'>
          <a href='#' itemProp="url" className='blog-link'>
            <h2 itemProp="name" className='blog-title'>
              How to create shape by svg in react</h2>
          </a>
          <time className='blog-time'>February 04, 2018</time>
          <p className='blog-info'>Reading books has always been a difficult task for me. Not that I don’t like reading, I do, but I rarely can find the time to sit down and…</p>
        </div>
        <div className='blog'>
          <a href='#' itemProp="url" className='blog-link'>
            <h2 itemProp="name" className='blog-title'>
              How to create shape by svg in react</h2>
          </a>
          <time className='blog-time'>February 04, 2018</time>
          <p className='blog-info'>Reading books has always been a difficult task for me. Not that I don’t like reading, I do, but I rarely can find the time to sit down and…</p>
        </div>
      </div>
    </div>
  </section>
);

export default Blog