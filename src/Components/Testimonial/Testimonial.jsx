import React, { useRef } from "react";
import './Testimonial.css'
import next from '../../Assets/next_icon.jpg'
import back from '../../Assets/back-icon.jpeg'
import user1 from '../../Assets/user1.jpeg'
import user2 from '../../Assets/user2.jpeg'
import user3 from '../../Assets/user3.jpeg'
import user4 from '../../Assets/user4.jpeg'

const Testimonial =() => {

    const slider = useRef();
    let tx = 0;

   const slideForward = () => {
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translate(${tx}%)`
   }

   const slideBackward = () => {
         
       if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translate(${tx}%)`
   }

    return (
                 
        <div className="testimonials">
            <img src={next} alt=""  className="next-btn" onClick={slideForward}/>
            <img src={back} alt="" className="back-btn" onClick={slideBackward}/>

            <div className="slider">

                <ul ref = {slider}>

                    <li>
                        <div className="slide">
                            <div className="uder-info">
                                <img src={user1} alt="" />
                                <div>
                                    <h3>William Jackson1</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue mu degree at Edusity was one of the best decisions i've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="uder-info">
                                <img src={user2} alt="" />
                                <div>
                                    <h3>William Jackson2</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue mu degree at Edusity was one of the best decisions i've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="uder-info">
                                <img src={user3} alt="" />
                                <div>
                                    <h3>William Jackson3</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue mu degree at Edusity was one of the best decisions i've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="uder-info">
                                <img src={user4} alt="" />
                                <div>
                                    <h3>William Jackson4</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>Choosing to pursue my degree at Edusity was one of the best decisions i've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonial;