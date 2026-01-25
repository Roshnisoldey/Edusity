import React from "react";
import './Campus.css'
import gallery1 from '../../Assets/gallery1.jpg'
import gallery2 from '../../Assets/gallery2.jpeg'
import gallery3 from '../../Assets/gallery3.jpeg'
import gallery4 from '../../Assets/gallery4.jpeg'

const Campus = () => {
    return(
        <div className="campus">
            <div className="gallery">
                <img src= {gallery1} alt="" />
                <img src= {gallery2} alt="" />
                <img src= {gallery3} alt="" />
                <img src= {gallery4} alt="" />
            </div>
            <button className="btn">See more here <img src="" alt="" /></button>
        </div>
    )
}

export default Campus;