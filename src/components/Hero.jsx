

export default function Hero() {
    return (
        <div id="hero" className='sm:pt-5 max-w-4xl mx-auto px-4 pt-6 pb-32 flex flex-col sm:items-center sm:text-center'>
            <div id="version-text" className='flex items-center my-6 gap-2 border border-yellow-300 bg-yellow-50 rounded-lg px-3 py-1 w-fit shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 group'>
                <div className="w-2 h-2 bg-yellow-400 rounded-full border border-yellow-600"></div>
                <p className='font-display font-medium text-yellow-600'>v0.21.1 <span className='text-yellow-800'>Find-in-page bug fixes</span></p>
                <i className="fa-solid fa-arrow-right text-yellow-600 group-hover:translate-x-1 transition duration-300"></i>
            </div>

            <div id="hero-feature" className="hidden sm:flex gap-8 my-6">
                <div id="hero-feature" className='flex justify-center gap-2 items-center text-gray-500'>
                    <i className='fa-solid fa-file-code text-sm'></i>
                    <p>Code Optional</p>
                </div>
                <div id="hero-feature" className='flex justify-center gap-2 items-center text-gray-500'>
                    <i className='fa-solid fa-hand-back-fist text-sm'></i>
                    <p>Drag & drop builder</p>
                </div>
                <div id="hero-feature" className='flex justify-center gap-2 items-center text-gray-500'>
                    <i className='fa-solid fa-laptop text-sm'></i>
                    <p>Windows, Mac, Linux</p>
                </div>
            </div>

            <h1 className='text-4xl font-semibold leading-snug sm:leading-tight mt-4 sm:text-6xl'>Web app to desktop app in minutes</h1>
            <p className='text-gray-800 text-xl mt-4 sm:text-2xl sm:mt-8'>Take your web app codebase and transform it into a cross platform desktop app with native functionality.</p>
            <div id="button-container" className='mt-12 flex flex-col gap-4 sm:flex-row'>
                <button className='px-8 py-3 font-semibold rounded-lg text-white bg-violet-700 shadow-sm hover:bg-opacity-90'>Download now</button>
                <button className='px-8 py-3 font-semibold rounded-lg bg-white border border-gray-400 shadow-sm hover:border-gray-800'>Read Docs</button>
            </div>
        </div>
    );
}
