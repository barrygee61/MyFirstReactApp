import React from 'react';
import './style.scss';
import NavLinks from './NavLinks.js';

class FooterNavigation extends React.Component { 
    render() {
        return (
        <div class="footerContainer">
            <footer>
            &copy; BarryGee 2021
            <NavLinks/>
            </footer>
        </div>
        );
    }
}

export default FooterNavigation;
