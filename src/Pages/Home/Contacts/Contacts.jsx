import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';



const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault(); // prevents the page from reloading when you hit “Send”

        emailjs.sendForm('service_j0b3t63', 'template_5fu9jqs', e.target, 'IQZlKSnyv052H8Dvc')
        .then((result) => {
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            console.log(result)
        }, (error) => {
            console.log(error.text);
            toast.error(error.text)
        });
    };
    return (
        <div className='lg:w-3/4 md:w-3/4 mx-auto my-10' id='contact'>
            <h1 className='text-4xl font-bold text-center mb-10'>Contact Us</h1>
            <div className='w-2/4 mx-auto'>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered input-primary w-full mb-10 " /> <br />
                    <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered input-primary w-full mb-10" /> <br />
                    <textarea name='msg' className="textarea textarea-primary w-full" placeholder="Messege"></textarea>
                    <input type="submit" value="Submit" className='btn btn-primary' />
                </form>
            </div>
        </div>
    );
};

export default Contacts;