import React from 'react';

const About = () => (
    <div className="about">
        <div className="about__img__container">
            <img 
                src={require(`../images/desktop/image-interactive.jpg`).default}
                alt="Man using VR googles" />
        </div>
        <div className="about__textbox">
            <h2>The leader in interactive VR</h2>
            <p>
                Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.
            </p>
        </div>
    </div>
)

export default About;