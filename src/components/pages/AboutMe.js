import React from "react"
import avatar from "../../assets/images/"

export default function AboutMe() {
    return (
        <div className="aboutContainer">
            <div className="avatarContainer">
                <img src={avatar} alt="Courtney sitting at a table with a rose and a purple window back drop" className="avatar"></img>
            </div>
            <div className="textContent">
                <h1>About me</h1>
                <p className="aboutMe">
                    Hey there! I'm Courtney.
                </p>
                <p className="aboutMe">
                    I'm a fullstack developer, thanks to University of Pennsylvania's Full-Stack certification.
                    Prior to getting my fullstack certification, I earned my Associate's degree in Business Management
                    through Harrisburg Area Community College.

                    My next goal is to earn my SCRUM master certification. I enjoy organizing, problem solving, and learning new things.
                    When I'm not learning new things, working, or hanging out with my children you can find me working with multiple charities.
                </p>
            </div>
        </div>
    )
}