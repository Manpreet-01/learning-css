

import img from '../assets/images/avatar-jessica.jpeg';

function Card() {
    return (
        <div
            role="card"
            className='bg-Grey_900 w-[375px] p-6 text-center'
        >

            <div className="bg-Grey_800 flex flex-col items-center text-center gap-y-4 rounded-2xl">

                <img src={img} alt="qr-code-image" className='mt-8 rounded-full w-24 aspect-square' />


                <h1 role='name' className="text-White text-2xl font-thick_700">Jessica Randall</h1>

                <p role='location' className="text-Green text-lg font-med_600 -mt-3">London, United Kingdom</p>

                <h2 role='profession' className="text-White font-thin_400">"Front-end developer and avid reader."</h2>

                <div className="grid gap-y-4 w-full px-6 mb-8">
                    <button
                        className="bg-Grey_700 text-White font-med_600 py-2 w-full rounded-lg"
                    >
                        GitHub
                    </button>
                    <button
                        className="bg-Grey_700 text-White font-med_600 py-2 w-full rounded-lg"
                    >
                        Frontend Mentor
                    </button>
                    <button
                        className="bg-Grey_700 text-White font-med_600 py-2 w-full rounded-lg"
                    >
                        LinkedIn
                    </button>
                    <button
                        className="bg-Grey_700 text-White font-med_600 py-2 w-full rounded-lg"
                    >
                        Twitter
                    </button>
                    <button
                        className="bg-Grey_700 text-White font-med_600 py-2 w-full rounded-lg"
                    >
                        Instagram
                    </button>
                </div>

            </div>

        </div>
    );
}

export default Card;