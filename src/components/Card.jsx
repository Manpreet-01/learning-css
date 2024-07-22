import victorImg from '../images/image-victor.jpg';
import img5 from '../images/favicon-32x32.png';

function Card() {
    return (
        <div className="kumbh-sans relative p-10 rounded-xl overflow-hidden flex flex-col items-center justify-center w-[310px] bg-transparent z-[2] bg-white h-[340px]">
            <div className="absolute top-0 inset-x-0 h-[38%] z-[-1] pattern-card"></div>

            <img className='mt-[60px] rounded-full border-4 border-white' src={victorImg} alt="victor profile pic" />

            <h1 className='flex items-baseline gap-x-2'>
                <span className='mt-4 font-bold'>Victor Crest</span>
                <span className='text-gray-500'>26</span>
            </h1>
            
            <p className='mt-1 text-xs text-gray-500'>London</p>

            <div className='absolute top-[72%] border border-t-gray-50 w-full'></div>

            <div className='flex justify-between mt-12 w-full px-1'>
                <div className='flex flex-col items-center justify-center'>
                    <span className='font-semibold text-gray-800'>80K</span>
                    <span className='text-xs text-gray-500'>Followers</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span className='font-semibold text-gray-800'>803K</span>
                    <span className='text-xs text-gray-500'>Likes</span>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <span className='font-semibold text-gray-800'>1.4K</span>
                    <span className='text-xs text-gray-500'>Photos</span>
                </div>
            </div>

        </div>
    );
}

export default Card;