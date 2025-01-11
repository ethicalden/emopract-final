// eslint-disable-next-line no-unused-vars
import React from 'react';
import JoyCardOneHero from './JoyCardOneHero/JoyCardOneHero';
import JoysRegularWork from './JoysRegularWork/JoysRegularWork';
import JoysCardWeelness from './JoysCardWeelness/JoysCardWeelness';
import Footer from './../../../Shared/Footer/Footer';

const JoysCardOne = () => {
    return (
        <div>
            <JoyCardOneHero></JoyCardOneHero>
            <JoysRegularWork></JoysRegularWork>
            <JoysCardWeelness></JoysCardWeelness>
            <Footer></Footer>
        </div>
    );
};

export default JoysCardOne;