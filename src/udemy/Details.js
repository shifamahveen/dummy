import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = ({ courses }) => {
    const { id } = useParams();
    let course = courses[id];
    
  return (
    <div className='container mx-auto p-5 m-3'>
      <div className="card">
        <img src={course.image} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{course.name}</h5>
            <p>Category: {course.category}</p>
            <p>Actual Price: {course.actual_price_usd}</p>
            <p>Sale Price: {course.sale_price_usd}</p>
            <p className="card-text">
            {course.description}
            </p>
            <a href={course.clean_url} target='_blank' className="btn btn-primary">
            Enroll Course
            </a>

        </div>

        </div>
        <Link to='/' className='btn btn-dark my-2 d-block mx-auto'>Back to Courses</Link>

    </div>
  )
}

export default Details
