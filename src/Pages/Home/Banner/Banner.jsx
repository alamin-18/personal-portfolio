import React from 'react';
import banner from '../../../imeges/banner-img.png'
import html from '../../../imeges/html-5.png'
import css from '../../../imeges/css-3.png'
import tailwind from '../../../imeges/icons8-tailwind-css-48.png'
import bootstrap from '../../../imeges/icons8-bootstrap-48.png'
import reacticone from '../../../imeges/science.png'
import javaScript from '../../../imeges/js.png'
import nodejs from '../../../imeges/icons8-nodejs-48.png'


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Md Al Amin</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;