import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ({ activeMenu }) => (
    <nav className='menu-nav'>
        <ul>
            <li><Link to="/" className={`menu-item ${checkActive(activeMenu, 'home')}`}>Home</Link></li>
            <li><a href="#" className={`menu-item ${checkActive(activeMenu, 'resume')}`}>Resume</a></li>
            <li><Link to="/blog" className={`menu-item ${checkActive(activeMenu, 'blog')}`}>Blog</Link></li>
            <li><Link to="/contact" className={`menu-item ${checkActive(activeMenu, 'contact')}`}>Contact</Link></li>
        </ul>
    </nav>
)

const checkActive = (activeMenu, menuName) => {
    return activeMenu === menuName ? 'active' : null
}

export default Menu