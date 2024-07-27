import img from '../images/logo.svg';
import illustrationDashboard from '../images/illustration-dashboard.png';

function Card() {
    return (
        <div className='flex flex-col items-center px-8 md:w-[75%]'>
            <div className='mt-28 md:mt-16 mb-8'>
                <img src={img} alt="logo" />
            </div>

            <h1 className='text-gray-500 text-3xl'>We are launching <span className='text-black'>soon!</span></h1>

            <p className='my-4 tesxt-md'>Subscribe to get notified</p>

            <div className="flex flex-col md:flex-row md:items-start w-full md:w-[800px] px-8 mt-4 gap-6">
                <div>
                    <input className='email w-full md:w-[500px] pl-8 border py-2 rounded-3xl' placeholder='Your email address' type="email" name="email" id="email" />
                    <p className='email-error hidden pt-2 text-sm text-center text-red-500'>Please provide a valid email address</p>
                </div>
                <button className='w-full md:w-[200px]  text-white text-sm font-semibold border py-3 rounded-3xl bg-blue-600 hover:bg-blue-500'>Notify Me</button>
            </div>


            <div className='mt-28 md:mt-16'>
                <img src={illustrationDashboard} alt="illustratioin-dashboard" />
            </div>


            <div className='my-24 md:my-16 flex justify-center gap-4 items-center text-blue-500 text-xl md:text-5xl'>
                <a className='hover:text-white hover:bg-blue-500 flex justify-center items-center rounded-full border border-gray-300 w-8 h-8 md:w-16 md:h-16 p-1 pt-[5px] pl-[9px] md:pt-[5px] md:pl-[15px]' href="#">
                    <i class="w-full h-full fa-brands fa-facebook-f"></i>
                </a>
                <a className='hover:text-white hover:bg-blue-500 flex justify-center items-center rounded-full border border-gray-300 w-8 h-8 md:w-16 md:h-16 p-1 pt-[4px] pl-[4px] md:pt-[5px] md:pl-[5px]' href="#">
                    <i class="fa-brands fa-twitter"></i>
                </a>
                <a className='hover:text-white hover:bg-blue-500 flex justify-center items-center rounded-full border border-gray-300 w-8 h-8 md:w-16 md:h-16 p-1 pt-[5px] pl-[4px]' href="#">
                    <i class="fa-brands fa-instagram"></i>
                </a>
            </div>


            <footer className='text-gray-500 my-8 md:pb-16'>
                &copy; Copyright Ping. All rights reserved.
            </footer>

        </div>
    );
}

export default Card;