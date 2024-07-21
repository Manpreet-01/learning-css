

import img from '../images/image-qr-code.png';

function Card() {
    return (
        <div
            className='bg-White max-w-[250px] p-4 rounded-2xl flex flex-col text-center items-center gap-y-3'
        >

            <img src={img} alt="qr-code-image" className='rounded-lg' />


            <h1 className='font-thick_700 text-[18px] text-Slate_900 px-2'>
                Improve your front-end skills by building projects
            </h1>

            <p className='font-thin_400 text-[13px] text-Slate_500 px-2 mb-3'>
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>

        </div>
    );
}

export default Card;