
import mobileImg from '../images/image-header-mobile.jpg';
import desktopImg from '../images/image-header-desktop.jpg';


function Card() {
    return (
        <div
            className="font-inter overflow-hidden bg-[#1c1938] font-outfit relative rounded-xl shadow-2xl w-[310px] md:w-[900px] md:h-[360px] block md:flex"
        >
            <div className='img-container md:order-1 w-full h-[200px] md:w-[940px] md:h-[360px]'>
                <img className='md:hidden h-full w-full' src={mobileImg} alt="img mobile" />
                <img className='hidden md:block h-full w-full' src={desktopImg} alt="img desktop" />
            </div>

            <div className='p-4 pt-8 md:p-14 text-white text-center md:text-left font-lexend-deca'>
                <h1 className='md:max-w-[315px] text-2xl md:text-[28px] font-semibold'>
                    <span className='pl-6 md:pl-0'></span>Get <span className='text-[#a460d5] font-bold'>insights</span> that help your business grow.
                </h1>

                <p className='px-4 md:px-0 mt-4 md:mt-8 md:pr-16 leading-5 text-center md:text-left text-sm md:text-md text-gray-500 font-semibold'>
                    <span className='pl-4 md:pl-0'></span>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
                </p>

                <div className='mt-2 md:mt-8 p-4 md:px-0 max-w-[290px] flex flex-col md:flex-row items-center md:items-start md:justify-between gap-y-4'>
                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold'>10k+</span>
                        <span className='text-gray-500 font-semibold text-xs uppercase'>companies</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold'>314</span>
                        <span className='text-gray-500 font-semibold text-xs uppercase'>templates</span>
                    </div>
                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold uppercase'>12m+</span>
                        <span className='text-gray-500 uppercase font-semibold text-xs'>queries</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;