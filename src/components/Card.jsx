function Card() {
    return (
        <div className="max-w-[340px] md:max-w-[700px] rounded-xl overflow-hidden shadow-2xl">
            <div className="p-8 bg-white flex flex-col gap-y-4">
                <h1 className="text-xl font-bold text-sky-500">Join our community</h1>
                <p className="text-lime-500 max-w-[300px] md:max-w-max">30-day, hassle-free money back guarantee</p>

                <p className="text-xs text-gray-500 md:max-w-[75%] leading-6">Gain access to our full library of tutorials along with expert code reviews. Perfect for any developers who are serious about honing their skills.</p>
            </div>

            <div className="flex flex-col md:flex-row">
                <div className="flex-grow bg-[#2bb3b1] p-8">
                    <h2 className="text-white font-bold">Monthly Subscription</h2>
                    <p className="my-4">
                        <span className="text-3xl text-white font-bold">$29 </span>
                        <span className="text-gray-300">per month</span>
                    </p>

                    <p className="mb-6 text-sm font-bold text-gray-200">Full access for less than $1 a day</p>
                    <button className="shadow-md w-full text-white font-bold py-4 rounded-md bg-[#bfdf32]">Sign Up</button>
                </div>

                <div className="flex-grow bg-[#4abebd] p-8">
                    <h2 className="text-white font-bold">Why Us</h2>
                    <p className="mt-4 flex flex-col text-gray-200">
                        <span>Tutorials by industry experts</span>
                        <span>Peer &amp; expert code review</span>
                        <span>Coding exercises</span>
                        <span>Access to our GitHub repos</span>
                        <span>Community forum</span>
                        <span>Flashcard decks</span>
                        <span>New videos every week</span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Card;