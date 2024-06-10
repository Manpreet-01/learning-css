

export default function Footer() {
    return (
        <div className="container">
            <div className="rounded-lg border border-gray-50 lg:border-none lg:bg-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
                <a href="#" className="lg:hidden font-light font-display">Documentation</a>
                
                <div className="flex gap-8">
                    <a href="#">
                        <i className="fa-brands fa-twitter text-gray-600 hover:text-gray-900"></i>
                    </a>
                    <a href="#">
                        <i className="fa-brands fa-github text-gray-600 hover:text-gray-900"></i>
                    </a>
                </div>
                <a href="#" className="hidden lg:block font-light font-display">Documentation</a>

                <a href="#" id="brand" className="flex gap-2 items-center flex-1">
                    <img src="asset 0.png" alt="logo" className="object-cover max-w-12 max-h-12" />
                    <span className="text-lg font-medium font-display">ToDesktop</span>
                </a>
            </div>

            <div className="sub-footer flex flex-col items-center gap-6 my-12">
                <div className="flex gap-2 item-center">
                    <img src="asset 54.svg" className="w-4 h-4" alt="" />
                    <p className="text-sm text-gray-600">A Y Comibnator company.</p>
                </div>

                <p className="text-gray-400">@2024 ToDesktop, Inc. All rights reserved.</p>
            </div>
        </div>
    );
}
