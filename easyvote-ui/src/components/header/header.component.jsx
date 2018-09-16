import React from 'react';

import './header.style.scss';

export default (props) => (
    <div className='header'>
    <a href='#' class='logo'>CompanyLogo</a>
    <div className='header--right'>
        <a className='header__menu'>Contact</a>
        <a className='header__menu'>About</a>
    </div>
</div>)