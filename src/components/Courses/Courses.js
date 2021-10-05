import React, { useEffect, useState } from 'react';
import SingleCourse from '../SingleCourse/SingleCourse';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])
    return (
       <div className=" my-5 py-5" >
           <h1 className="text-center fw-bold">Courses We Provide</h1>
           <p className="w-50 mx-auto fs-5">These are our available courses that we offer.We also provide notes and guidelines for better learning process.You can enroll your favorite course from here . Learn in a very easy way with us and support and stay with us.</p>
            <div>
            <div className="p-5 my-3 course-container">
                {/* displayed all the courses*/}
                {
                    courses.map(course =>
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

export default Courses;