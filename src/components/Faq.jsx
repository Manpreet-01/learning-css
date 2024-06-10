import React, { useState } from 'react';


const faqs = [
    {
        id: 1,
        question: "Is ToDesktop Form Me?",
        answer: "That depends! If you would like to distribute your web app to your users as a downloadable desktop app then ToDesktop is for you.",
    },
    {
        id: 2,
        question: "Can I try ToDesktop without buying?",
        answer: "Yes. You can get started by downloading ToDesktop Builder at no cost. After installing it, you can build your desktop application and preview it by clicking the “Run” button. This allows you to test the app on your own computer to ensure it performs to your expectations.",
    },
    {
        id: 3,
        question: "Do you collect or store data about my customers?",
        answer: "No. When a ToDesktop app opens it contacts the our servers to check if an update is available. We do not collect or store any user data from these requests.",
    },
    {
        id: 4,
        question: "Will my app work offline?",
        answer: "Think of ToDesktop as a normal browser that is just for your website. Your website will work exactly as it does in Chrome, or any other browser. If you want to make the app work offline you’ll need to make it into a progressive web app. Include a web manifest, service workers and client-side storage and voila — offline support. ",
    },
    {
        id: 5,
        question: "What support do you offer?",
        answer: "We’ll do our best to help you with any issue you encounter with ToDesktop. You can get in touch with us via email and chat. On the Startup plan we deal with the same day or the next day.",
    },
    {
        id: 6,
        question: "How does my app get updated??",
        answer: "Every time your app launches it contacts the ToDesktop update server. If there is a newer version available then it gets downloaded automatically. The user gets a notification that the new version will be installed the next time that they open the app.",
    },
];

export default function Faq() {
    return (
        <div className='container'>
            <h2 className='h2-style'>FAQs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
                {faqs.map(data => <FaqItem key={data.id} {...data} />)}
            </div>

            <div className='text-gray-400 py-8'>
                More questions? Visit our
                <a className='anchor-hover text-gray-600' href="#"> docs</a>.
                Or
                <a className='anchor-hover text-gray-600' href="#"> send us a message.</a>
            </div>
        </div >
    );
}


function FaqItem({ question, answer }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="group rounded-xl border border-gray-200 bg-gray-40 p-6 hover:gradient-hover-inner">
            <dt onClick={() => setIsExpanded(!isExpanded)} className='flex justify-between items-center cursor-pointer'>
                <p className='font-semibold text-lg items-center'>{question}</p>
                <i
                    className={`fa-solid fa-chevron-up ${isExpanded ? "rotate-0" : "-rotate-180"} transition-transform duration-300`}
                ></i>
            </dt>
            <dd className={`${isExpanded ? 'h-fit mt-6' : 'h-0 mt-0'} overflow-hidden text-lg font-light transition-[margin] transition-[height] duration-300`}>
                <p>{answer}</p>
            </dd>
        </div>
    );
}