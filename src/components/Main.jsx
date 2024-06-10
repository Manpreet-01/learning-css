import React from 'react';
import Hero from './Hero';
import Companies from './Companies';
import Bento from './Bento';
import Steps from './Steps';
import Testimonials from './Testimonials';

export default function Main() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent'>
            <Hero />
            <Companies />
            <Steps />
            <Bento />
            <Testimonials />
        </div>
    );
}
