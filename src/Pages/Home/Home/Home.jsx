import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Footer from '../Footer/Footer';
import Navber from '../Navber/Navber';
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <Skills></Skills>
            <About></About>
            <Project></Project>
            <Contacts></Contacts>
            <Footer></Footer>
        </div>
    );
};

export default Home;