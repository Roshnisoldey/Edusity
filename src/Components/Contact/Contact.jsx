import React, { useState } from "react";
import './Contact.css'
import msg from '../../Assets/msg-icon.jpeg'
import mail from '../../Assets/mail-icon.jpeg'
import phone from '../../Assets/phone-icon.jpeg'
import location from '../../Assets/location-icon.jpeg'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async(event)=>{
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);

        formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

        const res = await fetch("https://api.web3forms.com/submit",{
            method: "POST",
            body: formData
        }).then((res) => res.json());
        
        if(res.success){
            console.log("Success",res);
            setResult(res.message);
            event.target.reset();
        }else{
            console.log("Error", res);
            setResult(res.message);
        }
    };

    return(
        <div className="contact">
           <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /> </h3>
            <p>Feel free to reach out through contact from or find our contact information below. Your feedback , questions and suggestions are important to us we strive to provide exceptional service to our university commmunity.</p>
            <ul>
                <li> <img src={mail} alt="" />Contact@edusity.dev</li>
                <li> <img src={phone} alt="" /> +1 123-456-789</li>
                <li> <img src={location} alt="" />77 Massachusetts Ave , Cambridge <br /> MA 02139, United States </li>
            </ul>
           </div>

           <div className="contact-col">
            <form onSubmit={onsubmit}>
                <label>Your Name</label>
                <input type="text" name="name" placeholder="Enter Your Name" required />
                <label>Phone Number</label>
                <input type="tel" name="phone" placeholder="Enter Your Mobile Number" required/>
                <label>Write Your message here</label>
                <textarea name="message" rows='6' placeholder="Entter your message here" required ></textarea>
                <button type="submit" className="btn">Submit now</button>
            </form>
            <span></span>
           </div>
              

  

        </div>
    )
}

export default Contact;