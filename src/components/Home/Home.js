import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import Details from '../Details/Details';
import Banner from '../Banner/Banner';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
       <div className="my-5">
           <Banner/>
           <Details/>
           <h1 className="fw-bold text-center my-5">Our Top Reviewed Courses</h1>
            <div className="px-5">
            <div className=" my-3 home-course-container">
                {/* displayed all the courses*/}
                {
                    courses.slice(0,4).map(course =>
                        <SingleCourse
                            Key={SingleCourse.id}
                            course={course} >
                        </SingleCourse>)
                }
            </div>
        </div>
       </div>

    );
};

export default Home;