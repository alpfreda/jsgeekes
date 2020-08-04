import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => (
    <Link to='/' className='logo'>
        <span className='logo-symbol'>JS</span>
        <span className='logo-name'>Geek</span>
    </Link>
)

export default Logo