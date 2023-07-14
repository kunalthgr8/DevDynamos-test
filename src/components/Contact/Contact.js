import github_img from "../img/github_image.png";
import linkedin_img from "../img/linkedin_image.png";
import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';



export default function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4frhtpo', 'template_24md2fc', form.current, 'fPIm2nVfWlHFOPkWI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <div className="contact-page" id="Contacts">
            <div className="contact-container">
                <div className="contact-heading">Join Us
                    <hr className="contact-hr"></hr>
                </div>
                <div className="options-contact">
                    <a href="https://github.com/OpenLake" target="_blank"><div className="icons-contact">
                        <img src={github_img} alt="Github"></img>
                    </div></a>
                    <a href="https://in.linkedin.com/company/openlake" target="_blank"><div className="icons-contact">
                        <img src={linkedin_img} alt="Linked In "></img>
                    </div></a>
                </div>
            </div>
            <div className="contact-container-2">
                <div className="contact-heading">Any Queries ?
                    <hr className="contact-hr"></hr>
                </div>
                <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>

                        <input type="text" name="name" placeholder="Your Full Name" required />

                        <input type="email" name="email" placeholder="Your Email" required />

                        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                        <button type="submit" className="btn-contact"> Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}