import React from 'react';
import car from '../../../imeges/resale-car.jpg'

const Project = () => {
    return (
        <div className=' mt-10 lg:w-3/4 mx-auto'>
            <h1 className='text-4xl font-bold text-center mb-10'>Projects</h1>
            <div className='grid sm:grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
                <div className="card w-[476px] bg-base-300 shadow-2xl rounded-none ">
                    <figure><img src={car} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Resale Car</h2>
                        <div className="card-actions justify-between">
                            <a href='https://resale-product-d5835.web.app/' target='_blank'className="btn btn-primary btn-outline">Live Site</a>
                            <a href='https://github.com/fpalamin/resale-car-cilent' target='_blank' className="btn btn-primary btn-outline">GitHub Client</a>
                            <a href='https://github.com/fpalamin/resale-car-server' target='_blank' className="btn btn-primary btn-outline">GitHub Server</a>
                        </div>
                    </div>
                </div>
                <div className="card w-[476px] bg-base-300 shadow-2xl rounded-none ">
                    <figure><img src={car} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Resale Car</h2>
                        <div className="card-actions justify-between">
                            <a href='https://resale-product-d5835.web.app/' target='_blank'className="btn btn-primary btn-outline">Live Site</a>
                            <a href='https://github.com/fpalamin/resale-car-cilent' target='_blank' className="btn btn-primary btn-outline">GitHub Client</a>
                            <a href='https://github.com/fpalamin/resale-car-server' target='_blank' className="btn btn-primary btn-outline">GitHub Server</a>
                        </div>
                    </div>
                </div>
                <div className="card w-[476px] bg-base-300 shadow-2xl rounded-none ">
                    <figure><img src={car} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl">Resale Car</h2>
                        <div className="card-actions justify-between">
                            <a href='https://resale-product-d5835.web.app/' target='_blank'className="btn btn-primary btn-outline">Live Site</a>
                            <a href='https://github.com/fpalamin/resale-car-cilent' target='_blank' className="btn btn-primary btn-outline">GitHub Client</a>
                            <a href='https://github.com/fpalamin/resale-car-server' target='_blank' className="btn btn-primary btn-outline">GitHub Server</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;