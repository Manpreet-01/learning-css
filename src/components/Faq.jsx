import React, { useState } from 'react';


const faqs = [
    {
        id: 1,
        question: "Is ToDesktop Form Me?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sequi possimus temporibus odio? Rem molestiae repellendus, fugiat assumenda dolorum laudantium inventore at.",
    },
    {
        id: 2,
        question: "Is ToDesktop Form Me?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sequi possimus temporibus odio? Rem molestiae repellendus, fugiat assumenda dolorum laudantium inventore at.",
    },
    {
        id: 3,
        question: "Is ToDesktop Form Me?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sequi possimus temporibus odio? Rem molestiae repellendus, fugiat assumenda dolorum laudantium inventore at.",
    },
    {
        id: 4,
        question: "Is ToDesktop Form Me?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sequi possimus temporibus odio? Rem molestiae repellendus, fugiat assumenda dolorum laudantium inventore at.",
    },
    {
        id: 5,
        question: "Is ToDesktop Form Me?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sequi possimus temporibus odio? Rem molestiae repellendus, fugiat assumenda dolorum laudantium inventore at.",
    },
    {
        id: 6,
        question: "Is ToDesktop Form Me?",
        answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci sequi possimus temporibus odio? Rem molestiae repellendus, fugiat assumenda dolorum laudantium inventore at.",
    },
];

export default function Faq() {
    return (
        <div className='container'>
            <h2 className='h2-style'>FAQs</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6 gap-6 items-start">
                {faqs.map(data => <FaqItem {...data} />)}
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