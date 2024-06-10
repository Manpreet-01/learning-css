

export default function Bento() {
    return (
        <div id="bento-grid" className="container">
            <h2 className="text-5xl sm:font-semibold mb-14 max-w-xl leading-normal">ToDesktop handle the details</h2>

            <div className="grid-container flex flex-col gap-6 lg:grid lg:grid-cols-3" style={{ gridAutoRows: '96px' }}>

                <div className="group rouded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 rounded-2xl row-start-1 row-end-3">
                    <div className="w-full h-full p-6 flex flex-col items-center gap-6 bg-white group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl">
                        <h3 className="text-2xl font-medium">Native Notifications</h3>
                        <img src="asset 37.png" alt="vite" />
                    </div>
                </div>

                <div className="group rouded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 rounded-2xl  row-start-1 row-end-4">
                    <div className="w-full h-full p-6 flex flex-col items-center gap-6 bg-white group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl">
                        <h3 className="text-2xl font-medium">Auto Updates</h3>
                        <p className="text-center">We'll ensure the underlying browser is up to date and deliver performance improvements, security patches & additional features.</p>
                        <img src="asset 38.png" alt="vite" />
                    </div>
                </div>

                <div className="group rouded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 rounded-2xl  row-start-1 row-end-3">
                    <div className="w-full h-full p-6 flex flex-col items-center gap-6 bg-white group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl">
                        <h3 className="text-2xl font-medium">Plugins</h3>
                        <img src="asset 39.png" alt="vite" />
                    </div>
                </div>

                <div className="group rouded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 rounded-2xl  row-start-3 row-end-6">
                    <div className="w-full h-full p-6 flex flex-col items-center gap-6 bg-white group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl">
                        <h3 className="text-2xl font-medium">Access to Native APIs</h3>
                        <p className="text-center">ToDesktop ensures the underlying browser, performance improvements, security patches and additional features are always up to date.</p>
                        <img src="asset 40.png" alt="vite" />
                    </div>
                </div>

                <div className="group rouded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 rounded-2xl row-start-4 row-end-6">
                    <div className="w-full h-full p-6 flex flex-col items-center gap-6 bg-white group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl">
                        <h3 className="text-2xl font-medium">Customizable look and feel</h3>
                        <img src="asset 42.png" alt="vite" />
                    </div>
                </div>

                <div className="group rouded-2xl p-[1px] bg-slate-100 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200 rounded-2xl  row-start-3 row-end-6">
                    <div className="w-full h-full p-6 flex flex-col items-center gap-6 bg-white group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50 rounded-2xl">
                        <h3 className="text-2xl font-medium">Native Installers</h3>
                        <p className="text-center">We even provide a magic link which will detect your users operating system & download the most up to date version of your app.</p>
                        <img src="asset 43.png" alt="vite" />
                    </div>
                </div>
            </div>
        </div>
    );
}
