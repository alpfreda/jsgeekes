import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
    <nav className='menu-nav'>
        <ul>
            <li><Link to="/" className="menu-item active">Home</Link></li>
            <li><a href="#" className="menu-item">Resume</a></li>
            <li><Link to="/blog" className="menu-item">Blog</Link></li>
            <li><a href="#" className="menu-item">Contact</a></li>
        </ul>
    </nav>
)

export default Menu