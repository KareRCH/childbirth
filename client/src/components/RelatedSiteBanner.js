const RelatedSiteBanner = () => {
    return (
        <div className="RelatedSiteBanner">
            <h1 className="banner-head">관련사이트</h1>
            <div className="bannerWrap">
                <div className="serviceBox">
                    <a href="https://www.youtube.com/user/mothersafe/videos" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>임산부TV</h2>
                        <p>임산부에게 필요한 약물 정보 및 안전 정보 제공</p>
                    </a>
                </div>
                <div className="serviceBox">
                    <a href="http://daejeon.childcare.go.kr/ccef/main.jsp" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>대전시육아종합지원센터</h2>
                        <p>지역사회 내 어린이집 지원과 보육서비스 제공 등의 육아서비스 제공</p>
                    </a>
                </div>
                <div className="serviceBox">
                    <a href="nip.cdc.go.kr" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>질병관리본부<br/>예방접종 행정지원</h2>
                        <p>예방접종 관련 안내 서비스 제공</p>
                    </a>
                </div>
                <div className="serviceBox">
                    <a href="http://www.mothersafe.or.kr/" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>한국마더세이프<br/>전문상담센터</h2>
                        <p>임신 중 안전한 약물 사용법 및 무료 전문 상담</p>
                    </a>
                </div>
                <div className="serviceBox">
                    <a href="http://www.shjw.or.kr/" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>한국산후조리원협회</h2>
                        <p>전국산후조리원이용 안내</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default RelatedSiteBanner;