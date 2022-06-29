import map from '../img/daejeon_map2.png';

const Map = () => {
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
        <div className="map">
            <h1>대전 지역구 지원 제도</h1>
            <div className='map-ui'>
                <img src={map} alt="지도" />
                <button type="button" onClick={() => handleClick("Yuseong")}>유성구</button>
				<button type="button" onClick={() => handleClick("Seo")}>서구</button>
				<button type="button" onClick={() => handleClick("Jung")}>중구</button>
				<button type="button" onClick={() => handleClick("Dong")}>동구</button>
				<button type="button" onClick={() => handleClick("Daedeok")}>대덕구</button>
            </div>
        </div>
    );
}

export default Map;