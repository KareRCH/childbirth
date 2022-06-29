import { Link } from 'react-router-dom';

const Gu = () => {
    return (
        <div className="Gu">
            <h1>대전 지역구 지원 제도</h1>
            <div className='menu-wrap'>
                <div className="menu-inner-wrap">
                    <ul className="menu-list">
                        <li><Link to="/goverment">
                            <p>중앙정책</p>
                        </Link></li>
                        <li><Link to="/maplinker">
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
        </div>
    );
}

export default Gu;