import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <section className="header" id="header">
        <div className="header__container">
            <Link to="/" style={{textDecoration: 'none', color: 'black'}}><h1 className="header__logo">zt</h1></Link>
        </div>
        <nav className="header__nav">
            <ul className="header__nav-list">
                <Link to="/work" style={{textDecoration: 'none', color: 'black'}}><li className="header__nav-list-item">work</li></Link>
                <Link to="/about" style={{textDecoration: 'none', color: 'black'}}><li className="header__nav-list-item">about</li></Link>
                <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}><li className="header__nav-list-item">contact</li></Link>
            </ul>
        </nav>
    </section>
  )
}

export default Header;