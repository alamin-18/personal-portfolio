import ProgressBar from '@ramonak/react-progress-bar';
import React from 'react';
import html from '../../../imeges/html-5.png'
import css from '../../../imeges/css-3.png'
import tailwind from '../../../imeges/icons8-tailwind-css-48.png'
import bootstrap from '../../../imeges/icons8-bootstrap-48.png'
import reacticone from '../../../imeges/science.png'
import javaScript from '../../../imeges/js.png'
import nodejs from '../../../imeges/icons8-nodejs-48.png'
import express from '../../../imeges/icons8-node-js-48.png'
import firebase from '../../../imeges/icons8-firebase-48.png'

const Skills = () => {

    return (
        <div>
            <h1 className="text-4xl font-bold text-center mb-10">Professional Skills</h1>
            <div className='lg:w-3/4 mx-auto grid lg:grid-cols-2 gap-4'>
                <div>
                    <div className='flex gap-3 mb-2 items-center'>
                        <img className='className=" w-10 rounded-full"' src={html} alt="" />
                        <h1 className='text-3xl'>HTML</h1>
                    </div>
                    <ProgressBar bgColor={"#ff651e"} completed={90}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={css} alt="" />
                        <h1 className='text-3xl'>CSS</h1>
                    </div>
                    <ProgressBar bgColor={"#3abff8"} completed={80}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={bootstrap} alt="" />
                        <h1 className='text-3xl'>BootStrap</h1>
                    </div>
                    <ProgressBar bgColor={"#673ab7"} completed={85}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={tailwind} alt="" />
                        <h1 className='text-3xl'>Tailwind CSS</h1>
                    </div>
                    <ProgressBar bgColor={"#00b3d2"} completed={90}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={reacticone} alt="" />
                        <h1 className='text-3xl'>React JS</h1>
                    </div>
                    <ProgressBar bgColor={"#3abff8"} completed={80}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={javaScript} alt="" />
                        <h1 className='text-3xl'>JavaScript</h1>
                    </div>
                    <ProgressBar bgColor={"#ffdf00"} completed={75}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={nodejs} alt="" />
                        <h1 className='text-3xl'>Node JS</h1>
                    </div>
                    <ProgressBar bgColor={"#4caf50"} completed={75}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={express} alt="" />
                        <h1 className='text-3xl'>Express JS</h1>
                    </div>
                    <ProgressBar bgColor={"#4caf50"} completed={85}></ProgressBar>
                </div>
                <div>
                    <div className='flex gap-3 mb-2'>
                        <img className='className=" w-10 rounded-full"' src={firebase} alt="" />
                        <h1 className='text-3xl'>FireBase</h1>
                    </div>
                    <ProgressBar bgColor={"#ff7400"} completed={60}></ProgressBar>
                </div>
            </div>
        </div>
    );
};

export default Skills;