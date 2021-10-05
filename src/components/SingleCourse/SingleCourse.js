import React from 'react';
import './SingleCourse.css'

const SingleCourse = (props) => {
    const { courseName, instructor, time, price, Ratings, Count, image } = props.course;
    return (
        // Course information
        <div className="">
            <div className="information-container">
                <div>
                    <img style={{ width: '350px', height: '200px', marginTop: '15px' }} src={image} alt="" />
                </div>
                <div className="pt-2 px-2">
                    <h3 className="fw-bold mb-3 text-center">{courseName}</h3>
                    <p><span className="fw-bold">{instructor}</span></p>
                    <p>{time}</p>
                    <div className="d-flex align-items center justify-content-evenly mb-2">
                <div className="fw-bold"><i class="fas fa-star text-warning"></i> {Ratings}</div>
                <div className="fw-bold"><i class="fas fa-user text-dark"></i> {Count}</div>
            </div>
                    <h4 className="fw-bold">Price: {price} $</h4>
                    <div className="mt-4">
                        <div><button className="button-style-1 mb-2" >Enroll Now</button>
                        </div>
                        <div><button className="button-style-2">Add to Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default SingleCourse;