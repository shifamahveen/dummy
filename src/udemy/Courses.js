import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(async () => {
        const url = 'https://udemy-paid-courses-for-free-api.p.rapidapi.com/rapidapi/courses/search?page=1&page_size=10&query=python';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ea86ec0756msh17e532df1e1c9c9p170c20jsnebad0933d91c',
                'x-rapidapi-host': 'udemy-paid-courses-for-free-api.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            setCourses(result.courses);
            localStorage.setItem("courses", JSON.stringify(result.courses));
        } catch (error) {
            console.error(error);
        }
        
    }, [])

  return (
    <div className='row container mx-auto'>
      {courses.map((course, index) => (
        <div className="card col-3 m-4 p-0">
        <img src={course.image} className="card-img-top p-0" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{course.name}</h5>
          <p className="card-title">{course.category}</p>
          <Link to={`/course/${index}`} className="btn btn-primary">Read More</Link>
        </div>
      </div>
      
      ))}
    </div>
  )
}

export default Courses