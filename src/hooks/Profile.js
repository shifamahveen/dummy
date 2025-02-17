import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const { username } = useParams();

  return (
    <div>
      <div className="card w-10 container p-5">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Profile: { username }</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
        </div>
    </div>
  )
}

export default Profile
