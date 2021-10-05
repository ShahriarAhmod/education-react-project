import React from 'react';
import email from '../../images/email.png';
import call from '../../images/call.png';
import location from '../../images/location.png';
import './Contact.css';

const Contact = () => {
    return (
        <div>
        <div className="contact my-5 py-5">
            <div className="my-5 py-5 mx-5 px-5">
                <h1 className="fw-bold fs-1">Our Contact <br/> Information</h1>
                <button className="btn btn-secondary my-3">Contact Us</button>
            </div>
       </div>
           <div className="container mb-5 mt-4 contact-detail ps-5">
               <div className=" p-1 m-4">
                   <div>
                   <img className="email p-2" src={email} alt="" style={{width: '150px', height:'150px'}}/>
                   </div>
                   <div className="text-start">
                       <h3>E-mail Address</h3>
                       <p>info@demolink.com<br/>contact@demolink.com</p>
                       
                   </div>

               </div>
               <div className="p-1 m-4">
                   <div>
                   <img className="call p-2" src={call} alt="" style={{width: '150px', height:'150px'}}/>
                   </div>
                   <div className="text-start">
                       <h3>Phone Number</h3>
                       <p>+9964852923<br/>+9977665554</p>
                   </div>

               </div>
               <div className="p-1 m-4">
                   <div>
                   <img className="location p-2" src={location} alt="" style={{width: '150px', height:'150px'}}/>
                   </div>
                   <div className="text-start">
                       <h3>Our Location</h3>
                       <p>30 Central zone,<br/> New York City</p>
                   </div>

               </div>

           </div>
       </div>

    );
};

export default Contact;