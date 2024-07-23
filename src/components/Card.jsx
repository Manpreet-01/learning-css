import reactionLogo from '../images/icon-reaction.svg';
import memoryLogo from '../images/icon-memory.svg';
import verbalLogo from '../images/icon-verbal.svg';
import visualLogo from '../images/icon-visual.svg';


function Card() {
    return (
        <div
            className="font-hanken-grotesk flex flex-col sm:flex-row text-black bg-white w-[350px] sm:w-[500px] sm:rounded-3xl sm:shadow-2xl"
        >
            <div className="flex flex-col sm:w-[50%] text-white text-center items-center w-full bg-blue-600 rounded-b-3xl sm:rounded-t-3xl">
                <div className="my-4">Your Result</div>

                <div className="w-28 aspect-square rounded-full bg-blue-700 flex flex-col justify-center items-center">
                    <span className="font-bold text-4xl">76</span>
                    <span className="text-gray-400 text-xs">of 100</span>
                </div>

                <div className="mt-4 font-2xl font-bold">Great</div>

                <p className="mx-16 sm:mx-10 sm:text-xs mt-1 mb-4 text-sm text-gray-300">You scored higher than 65% of the people who have taken these tests.</p>
            </div>

            <div className="flex flex-col sm:w-[50%]">
                <h1 className="m-4 sm:ml-6 text-sm font-semibold">Summary</h1>

                <div className="px-6 flex flex-col gap-y-4 text-xs font-semibold">
                    <div className="py-3 px-4 bg-red-50 rounded-md flex justify-between">
                        <span className='flex gap-x-2'>
                            <img className='w-4 h-4' src={reactionLogo} alt="reaction" />
                            <span className='text-red-400'>Reaction</span>
                        </span>
                        <span>80 <span className="ml-1 text-gray-400">/100</span></span>
                    </div>
                    <div className="py-3 px-4 bg-yellow-50 rounded-md flex justify-between">
                        <span className="flex gap-x-2">
                            <img className='w-4 h-4' src={memoryLogo} alt="logo" />
                            <span className='text-yellow-300'>Memory</span>
                        </span>
                        <span>92 <span className="ml-1 text-gray-400">/100</span></span>
                    </div>
                    <div className="py-3 px-4 bg-[#f2fbfa] rounded-md flex justify-between">
                        <span className="flex gap-x-2">
                            <img className='w-4 h-4' src={verbalLogo} alt="logo" />
                            <span className='text-[#26a688]'>Verbal</span>
                        </span>
                        <span> 61 <span className="ml-1 text-gray-400">/100</span></span>
                    </div>
                    <div className="py-3 px-4 bg-blue-50 rounded-md flex justify-between">
                        <span className="flex gap-x-2">
                            <img className='w-4 h-4' src={visualLogo} alt="logo" />
                            <span className='text-blue-300'>Visual</span>
                        </span>
                        <span>72 <span className="ml-1 text-gray-400">/100</span></span>
                    </div>
                </div>

                <div className='flex justify-center my-6'>
                    <button className='py-2 px-16 text-sm font-semibold text-white bg-[#303b59] hover:bg-blue-500 rounded-3xl'>Continue</button>
                </div>
            </div>
        </div>
    );
}

export default Card;