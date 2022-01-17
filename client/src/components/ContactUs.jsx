import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmail', 'template_rondk4y', e.target, 'user_xSYxDnrAKfjXYqLs9r0zK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }


    return(
        <div className="w-full grid grid-cols-1">
            <div className="h-screen bg-riding-board bg-cover flex items-center justify-center">
                <form className="w-1/4" onSubmit={sendEmail}>
                    <div>
                        <h1 class="text-4xl font-extrabold text-white">Custom SooT</h1>
                        <h1 class="text-l text-white">Share your vision with our shaper Jacob,<br/> to be able to ride your dream surfboard,<br/> made just for you. </h1>
                    </div>
                    <br/>
                    <div>
                        <h3 className="text-white font-medium text-lg">Client Details</h3>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="email" className="rounded w-full px-2 py-1" placeholder="Email" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Height (cm)" name="height"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Weight (kg)" name="weight"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Level of Surfing" name="level"/>
                    </div>
                    <br/>
                    <div>
                        <h3 className="text-white font-medium text-lg">Shaping Details</h3>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Model" name="model"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Length (inches)" name="length"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Width (inches)" name="width"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Thickness" name="thickness"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <input type="text" className="rounded w-full px-2 py-1" placeholder="Volume" name="volume"/>
                    </div>
                    <div className="col-8 form-group pt-3 mx-auto">
                        <textarea className="rounded w-full px-2 py-1" cols="30" rows="8" placeholder="Purpose: What type of waves do you want to ride and how?" name="purpose"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <button className="w-full block bg-teal text-center text-white font-semibold py-2 rounded cursor-pointer duration-300 hover:bg-black" value="Send Message">Send Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}