

export default function Pricing() {
    return (
        <div className="container">
            <h2 className="text-5xl max-w-2xl leading-normal sm:font-semibold">Choose a plan that fits your needs</h2>

            <div className="flex flex-col lg:flex-row lg:items mt-6 gap-8">
                <div className="border flex-1 lg:border-none lg:bg-slate-50 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6">
                    <h3 className="text-4xl">Free</h3>
                    <p className="flex-1 text-lg font-light">For personal use or testing your app before deplying to customers.</p>
                    <p className="uppercase">key features</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Free or personal use</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Run app locally</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark"></i>
                            <span className="text-lg text-gray-800">No Code Signing</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-xmark"></i>
                            <span className="text-lg text-gray-800">No Native Installers</span>
                        </li>
                    </ul>
                    <button className="font-display text-blue-800 hover:font-bold font-medium border p-2 rounded-lg hover:border-gray-800">Get Started</button>
                </div>

                <div className="border flex-1 lg:border-none lg:bg-slate-50 rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6">
                    <h3 className="text-4xl">Essential</h3>
                    <p className="flex-1 text-lg font-light">For simple desktop apps.</p>
                    <p className="text-lg font-light"><span className="text-2xl font-semibold">$99</span>/month</p>
                    <p className="uppercase">key features</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Windows, Mac & Linux</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Code Signing</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Native Installers</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Email/chat support</span>
                        </li>
                    </ul>
                    <button className="font-display text-blue-800 hover:font-bold font-medium border p-2 rounded-lg hover:border-gray-800">Get Started</button>
                </div>

                <div className="relative flex-1 lg:border-none lg:bg-slate-50 border rounded-xl px-8 pt-12 pb-8 flex flex-col gap-6">
                    <p className="absolute -top-4 right-8 font-display font-semibold text-blue-800 text-sm bg-indigo-100 border rounded-full w-fit px-4 py-2">More Popular</p>
                    <h3 className="text-4xl">Professional</h3>
                    <p className="flex-1 text-lg font-light">For sophisticated sesktop apps.</p>
                    <p className="text-lg font-light"><span className="text-2xl font-semibold">$240</span>/month</p>
                    <p className="uppercase">EVERYTHING IN ESSENTIAL PLUS</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Plugins</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Branded Download links</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Analytics</span>
                        </li>
                        <li className="flex items-center gap-4">
                            <i className="fa-solid fa-check"></i>
                            <span className="text-lg text-gray-800">Access to restricted API</span>
                        </li>
                    </ul>
                    <button className="font-display text-white font-medium p-2 rounded-lg bg-blue-800 hover:bg-opacity-90">Get Started</button>
                </div>
            </div>
        </div>
    );
}

