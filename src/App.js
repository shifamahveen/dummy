import React from 'react';
import Courses from './udemy/Courses';
import Details from './udemy/Details';
import About from './udemy/About';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';

const App = () => {
  const courses = JSON.parse(localStorage.getItem("courses"));

  return (
    <BrowserRouter>
      <nav className='navbar navbar-expand-lg bg-dark text-light'>
        <div className='container '>
        <Link to="/" className='nav-link p-2'>Udemy</Link>
        <Link to="/about" className='nav-link p-2'>About</Link>
        </div>
       
      </nav>


      <Routes>
        <Route path="/" element={<Courses />}></Route>
        <Route path="/course/:id" element={<Details courses={courses} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;