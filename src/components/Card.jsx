import img from '../images/icon-music.svg';
import img2 from '../images/illustration-hero.svg';
import img3 from '../images/pattern-background-desktop.svg';
import img4 from '../images/pattern-background-mobile.svg';


function Card() {
    return (
        <div className='bg-white max-w-80 rounded-3xl overflow-hidden flex flex-col items-center'>
            <img src={img2} alt="" />

            <div className='flex flex-col gap-y-6 items-center justify-center px-8'>
                <h1 className='text-xl font-bold mt-8'>Order Summary</h1>

                <p className='text-center text-sm text-gray-500'>You can now listen to millions of songs, audiobooks, and podcasts on any
                    device anywhere you like!</p>

                <div className='flex gap-x-4 p-4 rounded-xl items-center text-xs w-full bg-Very-pale-blue'>
                    <img src={img} />

                    <div className='flex flex-col gap-y-1'>
                        <span className='font-bold'>Annual Plan</span>
                        <span className='font-bold text-gray-500'>$59.99/year</span>
                    </div>

                    <span className='text-blue-700 text-xs font-bold underline ml-auto'>Change</span>
                </div>

                <button className='bg-Bright-blue py-3 w-full text-white font-bold text-sm rounded-xl'>Proceed to Payment</button>
                <button className='p-3 -mt-3 mb-4 font-bold text-sm text-[15px] text-gray-400'>Cancel Order</button>
            </div>
        </div>
    );
}

export default Card;