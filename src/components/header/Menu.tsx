import React from 'react'

export const Menu: React.FC<{}> = () => (
    <nav className='menu-nav'>
        <ul>
            <li><a href="#" className="menu-item active">Home</a></li>
            <li><a href="#" className="menu-item">Resume</a></li>
            <li><a href="#" className="menu-item">Blog</a></li>
            <li><a href="#" className="menu-item">Contact</a></li>
        </ul>
    </nav>
)