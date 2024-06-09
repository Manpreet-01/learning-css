

import React from 'react';
import Hero from './Hero';
import { Comment } from 'postcss';
import Companies from './Companies';

export default function Main() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-purple-50 via-orange-50 to-transparent'>
            <Hero />
            <Companies />
        </div>
    );
}
