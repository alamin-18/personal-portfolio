import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { FaLinkedin ,FaFacebookSquare,FaGithub,FaTwitterSquare} from "react-icons/fa";
import banner from '../../../imeges/banner-img.png'



const Banner = () => {
    return (
        <div id='banner'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Hi I'm <span className='text-primary'>Md Al Amin</span>
                        <br />
                        <span >
                            <span>I'm Working in</span>
                            <br />
                            <span className='text-primary'>
                        <Typewriter
                        
                        words={["Frontend Developer", "Full Stack Web Developer",  "MERN Stack Developer", "ReactJs", "Javascript",  "Node Js"]}
                        loop={5}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                        ></Typewriter>
                        </span>
                        </span>
                        
                        </h1>
                        <p className="py-6">I am a web developer with an amazing ability to develop websites that are both functional and aesthetically pleasing. I have a strong under-standing of web standards and best practices, and I am passionate about creating websites that users will find easy to use and visually appealing.</p>
                        <a href='https://drive.google.com/file/d/1AbCEaUhXj4cA7eWP9v7wSB78bI8Y_cVx/view?usp=sharing' className="btn btn-outline btn-primary" target="_blank">View Resume</a>
                        <div className='flex text-4xl gap-4 mt-9'>
                            <a href="https://www.linkedin.com/in/fpalamin/" target="_blank"><FaLinkedin></FaLinkedin></a>
                            <a href="https://www.facebook.com/fpalamin7/" target="_blank"><FaFacebookSquare></FaFacebookSquare></a>
                            <a href="https://github.com/fpalamin" target="_blank"><FaGithub></FaGithub></a>
                            <a href="https://twitter.com/fp_alamin" target="_blank"><FaTwitterSquare></FaTwitterSquare></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;