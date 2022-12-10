import React from 'react';

const Contacts = () => {
    return (
        <div className='lg:w-3/4 md:w-3/4 mx-auto my-10'>
            <h1 className='text-4xl font-bold text-center mb-10'>Contact Us</h1>
            <div className='w-2/4 mx-auto'>
            <input type="text" placeholder="Enter Your Name" className="input input-bordered input-primary w-full mb-10 " /> <br />
            <input type="text" placeholder="Enter Your Email" className="input input-bordered input-primary w-full mb-10" /> <br />
            <textarea className="textarea textarea-primary w-full" placeholder="Messege"></textarea>
            <input type="submit" value="Submit" className='btn btn-primary' />
            </div>
        </div>
    );
};

export default Contacts;