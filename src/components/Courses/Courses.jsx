import React from 'react';
import './Courses.scss';
import { FiServer, FiActivity, FiCpu, FiSliders, FiSettings, FiRadio, FiHome, FiBattery } from 'react-icons/fi';

const courses = [{courseName:"CS"}, {courseName:"E&TC"}, {courseName:"Electrical"}, {courseName:"Mechanical"}, {courseName:"Instrumentation"}, {courseName:"Civil"}, {courseName:"Metallurgy"}]

const courseIcons = [
    FiServer, 
    FiRadio, 
    FiSliders, 
    FiSettings, 
    FiCpu, 
    FiHome, 
    FiBattery
]
const Courses = () => {
  return (
    <div className="app__courses">
        <h1>Courses</h1>
        <div className="app__courses-cards">
            {courses.map((course, idx) => {
                const CIcon = courseIcons[idx];
                return(
                    <div className="app__courses-card">
                        <CIcon 
                            className='cicon'
                            size={25}
                        />
                        <p>{course.courseName}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Courses