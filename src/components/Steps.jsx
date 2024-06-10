


export default function Steps() {
    return (
        <div id="steps" className="flex flex-col gap-6 px-6 py-12 mt-16 lg:px-8 lg:mt-32 max-w-7xl mx-auto">
            <h2 className="text-5xl mb-14">How it works</h2>
            <div id="step1" className="bg-gray-50 bg-opacity-25 flex lg:flex-row flex-col justify-between gap-6 rounded-xl sm:font-semibold px-8 py-12 border">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-display font-medium">Step 1</span>
                    <h3 className="text-4xl">Bootstrap straight from web app</h3>
                    <p className="text-lg font-light">Copy and paste your web app into ToDesktop. Customize your app design, app icon and window frame UI with no code.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Multiple windows</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Customisable menus</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Menubar/tray menus</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Launch on startup</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Offline support</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Tabs (Mac only)</a>
                        </li>
                    </ul>
                </div>

                <div className="pt-12">
                    <img src="asset 66.svg" alt="upload-your-app-icon" />
                </div>
            </div>

            <div id="step2" className="bg-gray-50 bg-opacity-25 flex lg:flex-row flex-col justify-between gap-6 rounded-xl sm:font-semibold px-8 py-12 border">
                <div className="flex flex-col gap-6 lg:w-1/2">
                    <span className="border border-yellow-300 bg-yellow-50 text-yellow-800 w-fit px-3 py-1 rounded-lg font-display font-medium">Step 2</span>
                    <h3 className="text-4xl">Add desktop code to customise your web app</h3>
                    <p className="text-lg font-light">No need to create a new repository, just add code from our desktop APIs to your codebase and get access to system level functionality.</p>
                    <ul className="grid grid-cols-2 gap-2">
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Native notifications</a>
                        </li>

                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Global keyboard shortcuts</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Application menu</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Context menu</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Dock/Icon</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">Isolated browser views</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">File system access</a>
                        </li>
                        <li className="flex gap-4">
                            <i className="fa-solid fa-check text-gray-500"></i>
                            <a className="text-lg font-light border-b border-black border-opacity-30 hover:border-opacity-80" href="#">…plus more APIs in our docs</a>
                        </li>
                    </ul>
                </div>

                <div className="pt-12">
                    <img src="asset 66.svg" alt="upload-your-app-icon" />
                </div>
            </div>
        </div>
    );
}
