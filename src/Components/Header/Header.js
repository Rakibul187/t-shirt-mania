import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <Link to='/'> Home</Link>
            <Link to='orders'>Orders</Link>
            <Link to='grandpa'>Grandpa</Link>
            <Link>Contact</Link>
            <Link>About</Link>
        </div >
    );
};

export default Header;