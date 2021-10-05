import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'

const Header = () => {
    return (
        <div>
            <header>
                <div className="header-img">
                    <img src={logo} alt="" />
                </div>

                <nav className="navigation-conatiner">
                    <a href="/shop">Shop</a>
                    <a href="/orders">Order Review</a>
                    <a href="/inventory">Manage Inventory here</a>
                </nav>
            </header>

        </div>
    );
};

export default Header;