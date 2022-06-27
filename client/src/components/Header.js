import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <i className="fa-solid fa-handshake-simple"></i>
                <Link to='/'>임산부 지원 안내 서비스</Link>
            </div>
            <ul className="navbar_menu">
                <li><Link to="plussites">포털소개</Link></li>
                <li><a href="https://www.gov.kr/portal/main" target="_blank" rel="noreferrer">중앙정책</a></li>
                <li><a href="https://www.daejeon.go.kr/index.do" target="_blank" rel="noreferrer">지역구정책</a></li>
                <li><a href="https://lib.yuseong.go.kr/contents/contents.php?pageCode=071101" target="_blank" rel="noreferrer">문화공간</a></li>
                <li><a href="https://kbucall.org/sub.do?menu_no=5&c_no=21" target="_blank" rel="noreferrer">문의</a></li>
            </ul>
        </nav>
    );
}

export default Header;