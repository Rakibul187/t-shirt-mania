import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/'> Home</Link>
            <Link to='orders'>Orders</Link>
        </div >
    );
};

export default Header;