import React from 'react';
import { NavLink, Navigate, Routes, Route} from 'react-router-dom';

//Course components
import CourseContainer from './courses/CourseContainer';
import { HTMLCourses, CSSCourses, JSCourses } from '../data/courses';

const Courses = () => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to='html'>HTML</NavLink></li>
        <li><NavLink to='css'>CSS</NavLink></li>
        <li><NavLink to='javascript'>JavaScript</NavLink></li>
      </ul>
    </div>
    <Routes>
      <Route path='' element={<Navigate replace to='html'/>}/>
      <Route path='html' element={<CourseContainer data={HTMLCourses}/>}/>
      <Route path='css' element={<CourseContainer data={CSSCourses}/>}/>
      <Route path='javascript' element={<CourseContainer data={JSCourses}/>}/>
      <Route path='*' element={<Navigate replace to='/404' />} />
    </Routes>
  </div>
);

export default Courses;