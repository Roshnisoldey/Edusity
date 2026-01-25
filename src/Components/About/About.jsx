import React from "react";
import './About.css'
import about_img from '../../Assets/about.jpg'
import play_icon from '../../Assets/play_icon.jpeg';


const About = () => {
    return(
        <div className="about">

            <div className="about-left">
               <img src={about_img} alt="" className="about-img" />
               <img src={play_icon} alt="" className="play-icon" />
            </div>

            <div className="about-right">
                 <h3>ABOUT UNIVERSITY</h3>
                 <h2>Nuturing Tomorrow's Leaders Today</h2>
                 <p>Embark on a transformative educatonal journey with our university's comprehensive educaton programs . Our cutting-efdge curriculum is designed to empower students with the knowledge, skills , and experience needed to excel in the dynamic field of education.</p>
                 <p>With a focus on innovation , hands-on learning , and personalized mentorship , our programs prepare aspiring educators to make a meaningful impact in classroom , schools and communities.</p>
                 <p>Wheather you aspire to become a teacher, administrator, counselor, or educational leader, our diverse rnge of programs offers the perfect pathway to achieve your goals and unlock your full potential in shapin the future of education.</p>
            </div>

        </div>
    );
};

export default About; 