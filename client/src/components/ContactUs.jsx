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
        <div className="w-full">
            <div className="h-screen bg-riding-board bg-cover flex items-center justify-center">
                <form onSubmit={sendEmail}>
                    <div>
                        <h1 class="text-4xl font-extrabold text-white">Custom SooT</h1>
                        <h1 class="text-l text-white">Share your vision with our shaper Jacob,<br/> to be able to ride your dream surfboard,<br/> made just for you. </h1>
                    </div>
                    <br/>
                    <div>
                        <h3 className="text-white">Client Details</h3>
                    </div>
                    <div>
                        <input type="text" className="rounded" placeholder="Name" name="name"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="email" className="rounded" placeholder="Email" name="email"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Height (cm)" name="height"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Weight (kg)" name="weight"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Level of Surfing" name="level"/>
                    </div>
                    <br/>
                    <div>
                        <h3 className="text-white">Shaping Details</h3>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Model" name="model"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Length (inches)" name="length"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Width (inches)" name="width"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Thickness" name="thickness"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <input type="text" className="rounded" placeholder="Volume" name="volume"/>
                    </div>
                    <div className="col-8 form-group pt-2 mx-auto">
                        <textarea className="rounded" cols="30" rows="8" placeholder="Purpose: What type of waves do you want to ride and how?" name="purpose"></textarea>
                    </div>
                    <div className="col-8 pt-3 mx-auto">
                        <button className="btn bg-white rounded" value="Send Message">Send Request</button>
                    </div>
                </form>
            </div>
        </div>
    )
}