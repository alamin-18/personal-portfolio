import React from 'react';

import about from '../../../imeges/about.jpg'


const About = () => {
    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center mb-6'>About Me</h1>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={about} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Md Al Amin <br /> Full Stack Developer</h1>
                        <p className="py-6">I am a self-motivated Full Stack Developer with knowledge in React.js, Node.js, Express.js, Google Authentication, MongoDB, JavaScript, HTML, CSS, Bootstrap, Tailwind and mobile responsive web development.</p>
                        <ul>
                            <li>Age: 19 Years</li>
                            <li>City: Pabna, Rajshahi, Bangladesh</li>
                            <li>Email: contact.alamin6@gmail.com</li>
                        </ul>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;