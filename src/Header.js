import React from 'react';
import './style.scss';
import NavLinks from './NavLinks';

class Header extends React.Component {
    render() {
        return (
        <div class="headerContainer">
            <div class="head">
            <h1>MyApp</h1>
            <header class="menu">
                <nav class="navigation">
                <NavLinks />
                </nav>
            </header>
            </div>
        </div>
        );
    }
}

export default Header;
