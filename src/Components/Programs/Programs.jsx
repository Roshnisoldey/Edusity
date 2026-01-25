import React from "react";
import "./Programs.css"
import program1 from '../../Assets/Program1.jpeg'
import program2 from '../../Assets/Program2.jpeg'
import program3 from '../../Assets/Program3.jpeg'
import program_icon1 from '../../Assets/program_icon1.jpeg'
import program_icon2 from '../../Assets/program_icon2.jpeg'
import program_icon3 from '../../Assets/program_icon3.jpeg'

const Programs = () => {
    return(
        <div className="programs">
            <div className="program">
               <img src={program1} alt="" />
               <div className="caption">
                <img src={program_icon1} alt="" />
                <p>Graduation Degree</p>
               </div>
            </div>
              
               <div className="program">
               <img src={program2} alt="" />
                <div className="caption">
                <img src={program_icon2} alt="" />
                <p>Master Degree</p>
               </div>
            </div>
              
               <div className="program">
               <img src={program3} alt="" />
                <div className="caption">
                <img src={program_icon3} alt="" />
                <p> Post Graduation Degree</p>
               </div>
            </div>
              

        </div>
    )
}

export default Programs;