import equilibriumImg from '../images/image-equilibrium.jpg';
import clockImg from '../images/icon-clock.svg';
import ethereumImg from '../images/icon-ethereum.svg';
import avatarImg from '../images/image-avatar.png';
import viewImg from '../images/icon-view.svg';

function Card() {
    return (
        <div
            className="bg-[#15273f] text-[#687c9b] font-outfit relative p-6 rounded-xl shadow-2xl w-[310px]"
        >
            <div className='cube-img-container'>
                <img
                    className='rounded-xl hover:cursor-pointer'
                    src={equilibriumImg}
                    alt="dice"
                />
            </div>

            <h1 className='text-white hover:text-[#04faf6] hover:cursor-pointer font-semibold text-xl my-4'>Equilibrium #3429</h1>
            <p className='text-md'>Our Equilibrium collection promotes balance and calm.</p>

            <div className='flex justify-between font-semibold mt-4'>
                <div className='flex gap-x-2 items-center'>
                    <img src={ethereumImg} alt="ethereum" />
                    <span className='text-[#04faf6]'>0.041 ETH</span>
                </div>

                <div className='flex gap-x-2 items-center text-sm'>
                    <img src={clockImg} alt="clock" />
                    <span>3 days left</span>
                </div>
            </div>

            <hr className='border-gray-700 my-4' />

            <div className='flex items-center space-x-4'>
                <img
                    className='w-8 h-8 border border-white rounded-full'
                    src={avatarImg}
                    alt="profile pic"
                />

                <span>
                    <span>Creation of</span>
                    <span className='text-white ml-1.5 hover:text-[#04faf6] hover:cursor-pointer'>Jules Wyvern</span>
                </span>
            </div>

        </div>
    );
}

export default Card;