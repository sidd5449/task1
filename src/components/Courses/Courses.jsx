import React from 'react';
import './Courses.scss';
import { Link } from 'react-router-dom';
import { FiServer, FiCpu, FiSliders, FiSettings, FiRadio, FiHome, FiFilter } from 'react-icons/fi';

const courses = [{courseName:"CS"}, {courseName:"E&TC"}, {courseName:"Electrical"}, {courseName:"Instrumentation"}, {courseName:"Civil"}, {courseName:"Metallurgy"}, {courseName:"Mechanical"}]

const courseIcons = [
    FiServer, 
    FiRadio, 
    FiSliders, 
    FiCpu, 
    FiHome, 
    FiFilter,
    FiSettings, 
]
const Courses = () => {
  return (
    <div className="app__courses" id='courses'>
        <h1>Courses</h1>
        <div className="app__courses-cards">
            {courses.map((course, idx) => {
                const CIcon = courseIcons[idx];
                return(
                    <Link to={course.courseName}
                        className="courseLink"
                    >
                        <div className="app__courses-card">
                            <CIcon 
                                className='cicon'
                                size={25}
                            />
                            <p>{course.courseName}</p>
                        </div>
                    
                    </Link>
                )
            })}
        </div>
    </div>
  )
}

export default Courses