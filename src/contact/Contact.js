import React, { useState,useRef } from 'react';
import './Contact.css';
import contactImg from "../img/about-9.jpg"
import emailjs from '@emailjs/browser';

function Contact() {
const[name,setname]=useState("");
const[email,setemail]=useState("");
const[sub,setsub]=useState("");
const[mes,setmes]=useState("");

const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
    setemail(""); setmes(""); setname(""); setsub("");

    emailjs.sendForm('service_7zarc8n', 'template_zyooon7', form.current, 'Rqo6yG_ksMNFRJPqu')
      .then((result) => {
          console.log(result.text);
          
      }, (error) => {
          console.log(error.text);
      });
  };


    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for Hiring. Connect with me via phone:</p>
                           <p className="hire__text white"><strong>+91 6382176848</strong> or email: <a href="mailto:sureshganga12007@gmail.com"><strong>sureshganga12007@gmail.com</strong></a></p>
                        </div>
                        <div className="input__box">
                            <form ref={form} onSubmit={sendEmail}>
                           <input type="text"  className="contact name" value={name} onChange={e=>setname(e.target.value)} name="from_name" placeholder="Your name *" />
                           <input type="email" className="contact email" value={email} onChange={e=>setemail(e.target.value)} name="from_email" placeholder="Your Email *" />
                           <input type="text"  className="contact subject"value={sub} onChange={e=>setsub(e.target.value)} name="from_sub" placeholder="Write a Subject" />
                           <textarea name="message" id="message" value={mes} onChange={e=>setmes(e.target.value)} placeholder="Write Your message *"></textarea>
                           <button className="btn contact pointer" type="submit" >Submit</button>
                           </form>
                        </div>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>
        </div>
    )
}

export default Contact