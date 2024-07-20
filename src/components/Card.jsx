import illustration from '../assets/images/illustration-article.svg';
import user from '../assets/images/image-avatar.webp';

function Card() {
    return (
        <div className='shadow-2xl  shadow-black flex flex-col justify-start bg-White-custom text-Gray-950-custom p-5 border border-black max-w-80 min-h-[380px] rounded-2xl'>

            <div className='h-36 w-full'>
                <img src={illustration} className='rounded-2xl w-full h-full object-cover' />
            </div>

            <span className='bg-yellow-custom font-bold rounded-md  mt-4 w-fit p-2 text-xs'>Learning</span>
            <p className='text-xs font-[500] mt-4'>Published 21 Dec 2023</p>

            <h1 className='mt-3 font-bold'>Html and Css foundations</h1>
            <p className='text-xs mt-4 text-Gray-500-custom'> These languages are the backbone of every website, defining structure, content, and presentation.</p>

            <div className='flex items-center gap-x-2 mt-6 mb-2'>
                <img src={user} alt="user" className='w-8' />
                <span className='font-bold'>Greg Hooper</span>
            </div>
        </div>
    );
}

export default Card;