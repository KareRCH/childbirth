import { useEffect, useRef, useState } from "react";

const IntroduceSlider = () => {
    const ref = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [time, setTime] = useState(1);

    useEffect(() => {
        
        const interval = setInterval(() => {
            if (!ref.current) {
                return;
            }
            
            ref.current.style.transition = `all 2s ease-in-out`;
            ref.current.style.transform = `translateY(-${currentIndex * (100 / ref.current.childElementCount)}%)`;
            if (currentIndex === ref.current.childElementCount -1) {
                setTimeout(() => {
                    if (!ref.current) {
                        return;
                    }
                    ref.current.style.transition = `0s`;
                    ref.current.style.transform = `translateY(0%)`;
                }, 2001);
                setCurrentIndex(1);
            } else {
                setCurrentIndex(currentIndex + 1);
            }
        }, time);

        setTime(6000);

        return () => {
            clearInterval(interval);
        };
    }, [currentIndex]);

    return (
        <div className="IntroduceSlider">
            <div className="slider-wrap">
                <div className="slider" ref={ref}>
                    <div className="item slide1">
                        <ul>
                            <li>안녕하세요</li>
                            <li><br/></li>
                            <li>대전시임신출산지원포털 홈페이지에 방문 하신 것을 환영합니다.</li>
                        </ul>
                    </div>
                    <div className="item slide2">
                        <ul>
                            <li>대전임신출산지원포털은</li>
                            <li><br/></li>
                            <li>대전광역시의 지역구의 영유아와 예비 부모에게 정부, 지역사회에서 시행하는 서비스를</li>
                            <li>모두 제공받을 수 있도록 정보를 제공합니다.</li>
                            <li>일일이 찾아보기 어려웠던 서비스를 편리하게 접할 수 있도록 환경을 조성하고자 합니다.</li>
                        </ul>
                    </div>
                    <div className="item slide3">
                        <ul>
                            <li>대전시민이</li>
                            <li><br/></li>
                            <li>보다 많은 혜택을 받을 수 있도록 제작된 사이트로</li>
                            <li>대전임신출산지원포털이 도움이 되길 바랍니다.</li>
                            <li>감사합니다.</li>
                        </ul>
                    </div>
                    <div className="item slide1">
                        <ul>
                            <li>안녕하세요</li>
                            <li><br/></li>
                            <li>대전시임신출산지원포털 홈페이지에 방문 하신 것을 환영합니다.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroduceSlider;