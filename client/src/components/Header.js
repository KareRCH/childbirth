import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo-banner.png';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <Link to='/'>
                    <img src={logo} />
                </Link>
            </div>
            <div className="menu_wrap">
                <div className="menu_inner_wrap">
                    <ul className="navbar_menu">
                        <li><Link to="/goverment">중앙정책</Link></li>
                        <li><Link to="/maplinker">지역구정책</Link></li>
                        <li><Link to="/plussites">관련사이트</Link></li>
                        <li><a href="https://linc.hannam.ac.kr/main.do" target="_blank" rel="noreferrer">문의</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;