const MainSiteBanner = () => {
    return (
        <div className="MainSiteBanner">
            <h1 className="banner-head">유용한 사이트</h1>
            <div className="bannerWrap">
                <div className="serviceBox">
                    <a href="https://www.socialservice.or.kr:444/user/svcsrch/supply/supplyList.do" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>산후도우미 제공기관</h2>
                        <p>산후도우미 제공기관 검색 사이트(사회서비스 전자바우처)로 이동합니다.</p>
                    </a>
                </div>
                <div className="serviceBox">
                    <a href="https://sooyusil.com/?menuno=402" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>수유시설 지도</h2>
                        <p>인구보건복지협회 수유시설 검색 사이트(인구보건복지협회)로 이동합니다.</p>
                    </a>
                </div>
                <div className="serviceBox">
                    <a href="https://www.djcall.or.kr/" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>바우처택시 신청</h2>
                        <p>출산가정에 건강관리사 파견해 산후 관리 지원</p>
                    </a>
                </div>
                <div className="serviceBox">
                    <a href="https://www.ecoemall.com/main/pregnant02.do" target="_blank" rel="noreferrer" title="새창열림">
                        <h2>친환경꾸러미</h2>
                        <p>출산가정에 건강관리사 파견해 산후 관리 지원</p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default MainSiteBanner;