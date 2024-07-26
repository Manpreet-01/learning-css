import img from '../images/illustration-mockups.svg';

function Card() {
    return (
        <div>
            <div className='flex flex-col md:gap-x-12 md:px-16 md:flex-row items-center md:items-start md:justify-between'>
                <div className='h-[280px] md:h-[400px] md:flex-1'>
                    <img className='mt-16 md:mt-10 w-full h-full' src={img} alt="mockup image" />
                </div>

                <div className='md:flex-1 mt-40 md:mt-24 flex flex-col items-center md:items-start text-center md:text-start gap-y-4'>
                    <h1 className='w-[400px] leading-10 text-white text-3xl font-bold'>Build The Community Your Fans Will Love</h1>
                    <p className='px-16 md:px-0 text-gray-200 text-lg'>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. </p>

                    <button
                        className='mt-4 py-3 w-[250px] md:w-[200px] text-[#674baf] shadow-black shadow-2xl rounded-3xl bg-white hover:bg-transparent hover:text-white hover:outline hover:outline-white'
                    >
                        Register
                    </button>
                </div>
            </div>

            <div className='mt-24 md:mt-16 mb-10 md:mr-24 flex gap-x-5 justify-center md:justify-end items-center text-[20px] text-white'>
                <button className='border-2 w-12 h-12 border-white hover:bg-white hover:text-[#674baf] rounded-full'><i className="fa-brands fa-facebook-f"></i></button>
                <button className='border-2 w-12 h-12 border-white hover:bg-white hover:text-[#674baf] rounded-full'><i className="fa-brands fa-twitter"></i></button>
                <button className='border-2 w-12 h-12 border-white hover:bg-white hover:text-[#674baf] rounded-full'><i className="fa-brands fa-instagram"></i></button>
            </div>
        </div>
    );
}

export default Card;