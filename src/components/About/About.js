import React from 'react';
import about from '../../images/about.png';

const About = () => {
    return (
        <div>
           <div className="d-flex align-items-center justify-content-between ms-5" style={{backgroundColor: 'rgb(247, 248, 255)'}}>
            <div>
                <h1 className="banner-font">Who We Are?</h1>
                <p className="fs-4">
                    We are the enthusiastic people trying to provide best facilities for you to learn and earn knowledge in easiest way ever!
                </p>

                <button className="btn btn-secondary">Visit Us</button>
            </div>
            <div>
            <img className="ms-4 about" src={about} alt="" style={{width: '700px' }}/>
            </div>
        </div>
        <div className="text-center p-5 my-5">
            <h1 className="text-center fw-bold fs-1">What is Our Motive?</h1>
            <p className="fs-4">
                We want to provide the best premium course for the curious learners who wants to learn from the very depth and want to explore the very basic concept of everything. We provide Premium courses and also provide 24 hr support to our students.We also provide notes and materials for each course. Our course is online and we try to provide best service to our students.
            </p>


        </div>
        </div>
    );
};

export default About;