import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo-banner.png';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <Link to='/'>
                    <img src={logo} alt="위드케어"/>
                </Link>
            </div>
            <div className="menu_wrap">
                <div className="menu_inner_wrap">
                    <ul className="navbar_menu">
                        <li><Link to="/goverment">
                            <p>중앙정책</p>
                        </Link></li>
                        <li><Link to="/maplinker/1">
                            <p>지역구정책</p>
                        </Link></li>
                        <li><Link to="/plussites">
                            <p>관련사이트</p>
                        </Link></li>
                        <li><a href="https://linc.hannam.ac.kr/main.do" target="_blank" rel="noreferrer">
                            <p>문의</p>
                        </a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;