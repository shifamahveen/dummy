import React from 'react';
import Timer from './components/Timer';
import Form from './hooks/Form';
import Profile from './hooks/Profile';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const NotFound = () => <h2 className='text-danger'>404 | Not Found</h2>

const App = () => {
  return (
    <Router>
      <Link to="/timer" className='p-4 fs-4'>Timer</Link> | 
      <Link to="/form" className='p-4 fs-4'>Form</Link> |
      <Link to="/profile/John" className='p-4 fs-4'>My Profile</Link>

      <Routes>
          <Route path='/timer' element={<Timer />}  />
          <Route path='/form' element={<Form />} />
          <Route path='/profile/:username' element={<Profile />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;