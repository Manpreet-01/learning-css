import { useRef } from "react";
import { useEffect } from "react";

function throttle(fn, wait) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, wait);
        }
    };
}

export default function Companies() {
    const line1Ref = useRef();
    const line2Ref = useRef();
    const line3Ref = useRef();
    const observerRef = useRef();

    useEffect(() => {
        function setupIntersectionObserver(ele, isLTR, speed) {
            observerRef.current = new IntersectionObserver(entries => {
                const { isIntersecting, target } = entries[0];
                const initialTranslateLTR = -48 * 4;
                const initialTranslateRTL = 36 * 4;

                function scrollHandler() {
                    const translateX = (window.innerHeight - target.getBoundingClientRect().top) * speed;
                    let totalTranslate = 0;
                    
                    if (isLTR) totalTranslate = translateX + initialTranslateLTR;
                    else totalTranslate = -(translateX + initialTranslateRTL);

                    target.style.transform = `translateX(${totalTranslate}px)`;
                }

                if (isIntersecting) window.addEventListener("scroll", scrollHandler);
                else window.removeEventListener("scroll", scrollHandler);
            });

            observerRef.current.observe(ele);
        }

        setupIntersectionObserver(line1Ref.current, true, 0.15);
        setupIntersectionObserver(line2Ref.current, false, 0.15);
        setupIntersectionObserver(line3Ref.current, true, 0.15);

        console.log('eefff');

        return () => observerRef.current.disconnect();

    }, [line1Ref.current, line2Ref.current, line3Ref.current]);

    return (
        <div id="companies-container" className="flex flex-col gap-8">
            <div className="companies-title flex justify-center gap-2" >
                <i className="fa-solid fa-arrow-down translate-y-1"></i>
                <span className="font-medium">APPS POWERED BY TODESKTOP</span>
                <i className="fa-solid fa-arrow-down translate-y-1"></i>
            </div>

            <div id="lines-group" className="flex flex-col gap-4 w-full overflow-hidden">
                <div id="line1" ref={line1Ref} className="flex gap-4 w-screen -translate-x-48 transition-transform ease-linear">
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                </div>

                <div id="line2" ref={line2Ref} className="flex gap-4 w-screen -translate-x-36 transition-transform ease-linear">
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                </div>

                <div id="line3" ref={line3Ref} className="flex md:hidden gap-4 w-screen -translate-x-48  transition-transform ease-linear">
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="vite.svg" alt="vite" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                    <div className="flex flex-col justify-center items-center min-w-24 min-h-24  md:min-w-32 md:min-h-32 bg-white border border-gray-300 rounded-xl">
                        <img src="react.svg" alt="react" className="h-12 w-12 md:h-16 wd:w-16" />
                        <span className="text-[12px] md:text-[16px] font-semibold">Vite</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
