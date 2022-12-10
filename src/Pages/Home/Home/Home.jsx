import React from 'react';
import Banner from '../Banner/Banner';
import Navber from '../Navber/Navber';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Skills></Skills>
        </div>
    );
};

export default Home;