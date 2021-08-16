import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => (
    <Link to='/' className='logo'>
        <span className='logo-symbol'>Alp</span>
        <span className='logo-name'>Freda</span>
    </Link>
)

export default Logo
