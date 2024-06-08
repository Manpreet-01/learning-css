import { useState } from "react";


export default function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleMenu() {
    setIsExpanded(!isExpanded);
  }

  return (
    <nav className="p-3 flex bg-white justify-between items-center">
      <a href="#" id="brand" className="flex gap-2 items-center">
        <img src="vite.svg" alt="logo" className="object-cover max-w-12 max-h-12" />
        <span className="text-lg font-medium font-display">ToDesktop</span>
      </a>

      <div className="nav-menu hidden lg:flex gap-12">
        <a href="#" className="font-medium hover:text-yellow-500">Pricing</a>
        <a href="#" className="font-medium hover:text-yellow-500">Terms</a>
        <a href="#" className="font-medium hover:text-yellow-500">Contact Us</a>
        <a href="#" className="font-medium hover:text-yellow-500">About</a>
      </div>

      <button className="hidden lg:flex gap-2 items-center border border-gray-400 px-6 py-2 rounded-lg hover:border-gray-600">
        <img src="vite.svg" alt="logo" className="object-cover max-w-12 max-h-12" />
        <span>Electron developers</span>
        <i className="fa-solid fa-arrow-right"></i>
      </button>

      <button className="p-2 lg:hidden" onClick={handleMenu}>
        <i className="fa-solid fa-bars text-gray-600"></i>
      </button>

      <div className={`fixed lg:hidden bg-white  inset-0 ${isExpanded ? "block" : "hidden"}`}>
        <div className="nav-bar flex justify-between p-3">
          <a href="#" id="brand" className="flex gap-2 items-center">
            <img src="vite.svg" alt="logo" className="object-cover max-w-12 max-h-12" />
            <span className="text-lg font-medium font-display">ToDesktop</span>
          </a>
          <button className="p-2 lg:hidden" onClick={handleMenu}>
            <i className="fa-solid fa-close text-gray-600"></i>
          </button>
        </div>

        <div className="nav-menu mt-6 flex flex-col">
          <a href="#" className="block rounded-lg font-medium hover:text-yellow-500 p-4 m-3 hover:bg-gray-50">Pricing</a>
          <a href="#" className="block rounded-lg font-medium hover:text-yellow-500 p-4 m-3 hover:bg-gray-50">Terms</a>
          <a href="#" className="block rounded-lg font-medium hover:text-yellow-500 p-4 m-3 hover:bg-gray-50">Contact Us</a>
          <a href="#" className="block  rounded-lg font-medium hover:text-yellow-500 p-4 m-3 hover:bg-gray-50">About</a>
        </div>

        <div className="h-1 bg-gray-300"></div>

        <button className="w-full mt-6 flex gap-2 items-center hover:bg-gray-50 px-6 py-4 rounded-lg hover:border-gray-600">
          <img src="vite.svg" alt="logo" className="object-cover max-w-12 max-h-12" />
          <span>Electron developers</span>
        </button>
      </div>
    </nav>
  );
}