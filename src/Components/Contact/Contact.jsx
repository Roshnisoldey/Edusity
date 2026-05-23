import React, { useState } from "react";
import './Contact.css'
import msg from '../../Assets/msg-icon.jpeg'
import mail from '../../Assets/mail-icon.jpeg'
import phone from '../../Assets/phone-icon.jpeg'
import location from '../../Assets/location-icon.jpeg'

const Contact = () => {

    const [result, setResult] = useState("");

    return (
        <div className="contact">

            <div className="contact-col">
                <h3>Send us a message <img src={msg} alt="" /></h3>
                <p>
                    Feel free to reach out through contact form or find our contact information below.
                </p>

                <ul>
                    <li><img src={mail} alt="" />Contact@edusity.dev</li>
                    <li><img src={phone} alt="" /> +1 123-456-789</li>
                    <li><img src={location} alt="" />77 Massachusetts Ave, Cambridge</li>
                </ul>
            </div>

            <div className="contact-col">

                <form>
                    <label>Your Name</label>
                    <input type="text" name="name" required />

                    <label>Phone Number</label>
                    <input type="tel" name="phone" required />

                    <label>Write Your message here</label>
                    <textarea name="message" rows="6" required></textarea>

                    <button type="submit" className="btn">Submit now</button>
                </form>

                <span>{result}</span>
            </div>

        </div>
    )
}

export default Contact;