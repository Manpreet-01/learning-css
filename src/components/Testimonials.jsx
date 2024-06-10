

import React from 'react';

export default function Testimonials() {
    return (
        <div id="testimonials" className="container">
            <h2 className="text-5xl sm:font-semibold mb-14">Customer stories</h2>
            <div className="rounded-xl border flex flex-col lg:flex-row">
                <div id="left" className='flex flex-col gap-12 p-8 max-w-[650px]'>
                    <div className='h-4 w-fit'>
                        <img src="asset 44.svg" alt="click-up-icon" />
                    </div>
                    <h3 className='text-2xl font-bold leading-relaxed'>Clickup used ToDesktop to get their desktop app in front of customers in days instead of months.</h3>
                    <div id="tag-container" className='flex gap-3 flex-wrap'>
                        <div className="flex gap-2 items-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
                            <i className='fa-solid fa-check'></i>
                            <span className="text-yellow-800 font-medium">Chromeless Ui</span>
                        </div>
                        <div className="flex gap-2 items-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
                            <i className='fa-solid fa-check'></i>
                            <span className="text-yellow-800 font-medium">Native spellchecks</span>
                        </div>
                        <div className="flex gap-2 items-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
                            <i className='fa-solid fa-check'></i>
                            <span className="text-yellow-800 font-medium">Task time in menubar</span>
                        </div>
                        <div className="flex gap-2 items-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
                            <i className='fa-solid fa-check'></i>
                            <span className="text-yellow-800 font-medium">Notification count in the dock</span>
                        </div>
                        <div className="flex gap-2 items-center bg-yellow-50 w-fit border border-yellow-300 px-3 py-1 rounded-md">
                            <i className='fa-solid fa-check'></i>
                            <span className="text-yellow-800 font-medium">Global hotkey to create task</span>
                        </div>
                    </div>

                    <div className='text-xl font-light text-gray-500'>
                        “ToDesktop provided us with a <span className='text-black'>polished desktop app</span> in no time. Their expert team guided us through a smooth migration from our outdated legacy desktop app, enabling us to deliver <span className='text-black'>new and improved features</span> to our customers within days.”
                    </div>

                    <div className="user-card flex gap-4">
                        <img src="asset 45.jpeg" className='rounded-full w-18' alt="" />
                        <div>
                            <h3 className='text-xl font-bold'>Zeb Evans</h3>
                            <p className='text-gray-500'>Founder & CEO, <a href="#" className='anchor-hover'>ClickUP</a></p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <img src="asset 46.png" className='pl-12 lg:pl-18 lg:pt-12' alt="" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-4 mt-4">
                <div className="flex-1 rounded-2xl bg-white gradient-hover-outer">
                    <div className="flex flex-col w-full h-full gap-6 gradient-hover-inner rounded-2xl p-6">
                        <div className="flex lg:flex-col lg:items-start pl-4 lg:pt-4 items-center gap-4">
                            <div className="w-12 h-12  bg-blue-200 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-code"></i>
                            </div>
                            <h3 className='text-2xl font-semibold'>Native APIs</h3>
                        </div>
                        <p className='flex-1 text-lg font-light lg:mt-4 px-4'>What sets ToDesktop apart is its seamless integration with native APIs using our existing web codebase. By tapping into APIs like Tray and Notifications, we've crafted an exceptionally polished desktop user experience.</p>
                        <div className="flex pl-4 lg:mt-6">
                            <div className="w-12 h-12 -mr-3 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="asset 47.png" className='min-w-16 min-h-16' alt="" />
                            </div>
                            <div className="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="asset 48.jpeg" className='rounded-full' alt="" />
                            </div>
                            <div className="ml-4 flex flex-col">
                                <h3 className='font-bold'>Rick Pastoor</h3>
                                <a href="#" className='anchor-hover w-fit text-gray-500'>Rise</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1  rounded-2xl bg-white gradient-hover-outer">
                    <div className="flex flex-col w-full h-full justify-stretch gap-6 gradient-hover-inner rounded-2xl p-6">
                        <div className="flex lg:flex-col lg:items-start pl-4 lg:pt-4 items-center gap-4">
                            <div className="w-12 h-12  bg-red-200 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-magic"></i>
                            </div>
                            <h3 className='text-2xl font-semibold'>Clean, less cluttered UI</h3>
                        </div>
                        <p className='flex-1 text-lg font-light lg:mt-4 px-4'>Having a desktop app gives us the freedom to design the experience we want, including better keyboard shortcuts and a cleaner UI. It was a no-brainer for us to use ToDesktop.</p>
                        <div className="flex pl-4 lg:mt-12">
                            <div className="w-12 h-12 -mr-3 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="asset 47.png" className='min-w-16 min-h-16' alt="" />
                            </div>
                            <div className="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="asset 48.jpeg" className='rounded-full' alt="" />
                            </div>
                            <div className="ml-4 flex flex-col">
                                <h3 className='font-bold'>Max Musing</h3>
                                <a href="#" className='anchor-hover w-fit text-gray-500'>Basedash</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 rounded-2xl bg-white gradient-hover-outer">
                    <div className="flex flex-col w-full h-full gap-6 gradient-hover-inner rounded-2xl p-6">
                        <div className="flex lg:flex-col lg:items-start pl-4 lg:pt-4 items-center gap-4">
                            <div className="w-12 h-12  bg-yellow-100 flex items-center justify-center rounded-full">
                                <i className="fa-solid fa-infinity"></i>
                            </div>
                            <h3 className='text-2xl font-semibold'>Code optional</h3>
                        </div>
                        <p className='flex-1 text-lg font-light px-4  lg:mt-4'>It was unbelievably simple for us to get a desktop app up and running, and we didn’t have to write a single line of code. Once we had this MVP, we were able to extend the app’s functionality with custom behavior using ToDesktop’s libraries.</p>
                        <div className="flex pl-4 lg:mt-6">
                            <div className="w-12 h-12 -mr-3 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="asset 47.png" className='min-w-16 min-h-16' alt="" />
                            </div>
                            <div className="w-12 h-12 flex justify-center items-center rounded-full overflow-hidden border border-white">
                                <img src="asset 48.jpeg" className='rounded-full' alt="" />
                            </div>
                            <div className="ml-4 flex flex-col">
                                <h3 className='font-bold'>Pouya Rad</h3>
                                <a href="#" className='anchor-hover w-fit text-gray-500'>LifeAt</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl bg-black flex flex-col lg:flex-row mt-8">
                <div id="left" className='flex flex-col gap-4 p-8 max-w-[650px]'>
                    <span className='text-gray-400 font-display font-semibold mt-4'>Ready to start building</span>
                    <h3 className='text-white text-4xl font-bold leading-tight'>Create your desktop app for free.</h3>

                    <p className='text-xl font-light text-gray-500'>
                    ToDesktop Builder will take you step-by-step through the process of creating your first desktop app in just a few minutes.
                    </p>

                    <button className='mt-4 bg-blue-800 py-3 px-4 w-fit rounded-lg hover:opacity-90 text-white flex items-center justify-center gap-4'>
                        <i className="fa-solid fa-download"></i>
                        <span>Download ToDesktop builder</span>
                    </button>

                    <p className='mt-4 text-gray-400 text-xs italic leading-tight'>*You can create a desktop app and run it on your computer for free. You will only be charged if you want to create a distributable app for your customers.</p>
                </div>
                <div className="right">
                    <img src="asset 46.png" className='pl-12 lg:pl-18 lg:pt-12' alt="" />
                </div>
            </div>
        </div>
    );
}
