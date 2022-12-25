import React, { useRef } from "react";
import { render } from "react-dom";
import Form from "react-bootstrap/Form"
import Button  from "react-bootstrap/Button";
import './contact.css'
import emailjs from '@emailjs/browser';

function Contactme(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_uevxjgw', 'template_pfan9zk', form.current, '1mhIUEjksfiDE_ThC')
      .then((result) => {
          console.log(result.text);
          console.log('message sent')
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
    };
    return(
        <>
        <div className='one'><header classname="title" style={{fontFamily:"times new roman"}}>Contact me</header></div>
        
          <form id="ls" method="post" action="" className='form' ref={form} onSubmit={sendEmail}>
                <h1>Contact Me</h1>
                <fieldset>
                    <label for='Name'>Name</label>
                    <input type="text" id="name" name="name" class="stored" />
                    <br/>
                    <label for="mail">Email</label>
                    <input type="email" id="small" name="email" class="stored" />
                    <br/>
                    <label for="message">Message</label>
                    <textarea id="message" name="message" class="stored"></textarea>
                </fieldset>
        
                <button type="submit" value="Send">Send</button>
                    <input id="clear" type="reset"/>
            </form>
           </> 






 
    );
}

export default Contactme;


