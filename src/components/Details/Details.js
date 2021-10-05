import React from 'react';
import './Details.css';

const Details = () => {
    return (
        <div className="pt-5 mt-5 mb-3">
            <h1 className="text-center fw-bold" style={{color: 'rgb(31, 68, 128)'}}>We Make Learning Easier</h1>
            <div>
                <div className="detail-container container mb-5 mt-4">
                    <div className="px-1 py-2 border rounded-3 m-3">
                        <div className="text-center">
                            <h3 className="fw-bold" style={{color: 'rgb(44, 19, 54)'}}>Premium Content</h3> 
                            <p className="fs-5">We provide high quality content for our students.</p>
                        </div>
                    </div>

                    <div className="px-1 py-2 border rounded-3 m-3">
                        <div className="text-center">
                            <h3 className="fw-bold" style={{color: 'rgb(44, 19, 54)'}}>Support Session</h3>
                            <p className="fs-5">We provide 24 hr support session for our students.</p>
                        </div>
                        </div>

                    <div className="px-1 py-2 border rounded-3 m-3">
                        <div className="text-center">
                            <h3 className="fw-bold" style={{color: 'rgb(44, 19, 54)'}}>Qualified Teachers</h3>
                            <p className="fs-5">We have very high qualified experienced teachers.</p>
                        </div>
                    </div>

                    <div className="py-2 px-1 border rounded-3 m-3">
                        <div className="text-center">
                            <h3 className="fw-bold" style={{color: 'rgb(44, 19, 54)'}}>Certificate</h3>
                            <p className="fs-5">We provide Certificate after the course.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Details;