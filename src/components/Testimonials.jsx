

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
        </div>
    );
}
