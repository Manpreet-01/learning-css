function Card() {
    return (
        <div className="bg-red-400 bg-img px-8 py-24 md:px-24 grid md:grid-cols-2 md:gap-x-12 md:place-content-center max-w-[1200px] text-white leading-relaxed">
            <div className="grid text-center md:text-start md:place-content-center gap-y-8">
                <h1 className="text-3xl md:text-4xl font-bold">Learn to code by watching others</h1>
                <p className="text-gray-200 text-center md:text-start font-xs">See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
            </div>

            <div className="grid place-content-start gap-y-4 mt-16 md:mt-0">
                <button className="bg-violet-800 hover:bg-violet-700 hover:scale-[1.02] py-4 px-28 md:px-16 leading-relaxed rounded-md text-xs text-white">
                    <span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter
                </button>

                <div className="bg-white p-8 grid gap-y-2 rounded-md">
                    <form className="grid gap-y-4">
                        <input className="py-3 border-gray-400 rounded-md border placeholder:pl-8 placeholder:text-xs placeholder:font-bold" placeholder="First Name" type="text" />
                        <input className="py-3 rounded-md border placeholder:pl-8 placeholder:text-xs placeholder:font-bold" placeholder="Last Name" type="text" />
                        <input className="py-3 rounded-md border placeholder:pl-8 placeholder:text-xs placeholder:font-bold" placeholder="Email Address" type="email" />
                        <input className="py-3 rounded-md border placeholder:pl-8 placeholder:text-xs placeholder:font-bold" placeholder="Password" type="password" />
                        <button className="bg-green-500 hover:bg-green-400 hover:scale-[1.02] rounded-md py-4 text-xs font-bold uppercase">Claim your free trial</button>
                    </form>
                    
                    <p className="text-gray-500 px-4 text-xs text-center leading-relaxed">By clicking the button, you are agreeing to our <span className="text-red-400 hover:text-red-500 text-sm hover:underline hover:cursor-pointer font-bold">Terms and Services</span></p>
                </div>

            </div>
        </div>
    );
}

export default Card;