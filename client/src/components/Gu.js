import { useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

const Gu = () => {
    const ref = useRef(null);
    let refItem = useRef(null);
    let params  = useParams();

    useEffect(() => {
        if (!ref.current) 
            return;

        if (ref.current.children.length === 0)
            return;

        for(let i = 0; i < ref.current.children.length; i++) {
            refItem = ref.current.children[i].firstChild;
            if (parseInt(params.gu) === i+1)
                refItem.className = "active";
            else
                refItem.className = "";
        }
        
    }, [params])

    function handleClick(gu) {
        switch(gu) {
            case "Yuseong":
                window.open("https://www.yuseong.go.kr/kor/sub07_02_02_02.do");
            break;
            case "Seo":
                window.open("https://www.seogu.go.kr/sorg/content.do?mnucd=SGMENU0900032");
            break;
            case "Jung":
                window.open("https://www.naver.com");
            break;
            case "Dong":
                window.open("https://www.donggu.go.kr/dg/kor/contents/111");
            break;
            case "Daedeok":
                window.open("https://www.daedeok.go.kr/dpt/goContents.do?link=/dpt/dpt06/DPT06020201&menuId=DPT06020201");
            break;
            default:
        }
    }

    return (
        <div className="Gu">
            <h1>대전 지역구 지원 제도</h1>
            <div className='menu-wrap'>
                <div className="menu-inner-wrap">
                    <ul className="menu-list" ref={ref}>
                        <li><Link to="/maplinker/1">
                            <p>유성구</p>
                        </Link></li>
                        <li><Link to="/maplinker/2">
                            <p>대덕구</p>
                        </Link></li>
                        <li><Link to="/maplinker/3">
                            <p>서구</p>
                        </Link></li>
                        <li><Link to="/maplinker/4">
                            <p>중구</p>
                        </Link></li>
                        <li><Link to="/maplinker/5">
                            <p>동구</p>
                        </Link></li>
                    </ul>
                </div>
            </div>
            <div className="content-wrap">
                <div className="content-list">
                    <div className="content1">
                        <img src="" alt="보건소"/>
                    </div>
                    <div className="content2">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Gu;