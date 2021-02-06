import React from 'react'
import { Router } from '@reach/router'
import Login from '../routes/Login'
import Dashboard from '../routes/Dashboard'
import Register from '../routes/Register'
import Confirm from '../routes/Confirm'
import Admin from '../routes/Admin'
import Lesson from '../routes/Lesson'

const App = () => {
    return (
      <Router>
        <Dashboard path='/' />
        <Lesson path='/lesson/:lessonId' />
        <Login path='/login' />
        <Register path='/register' />
        <Confirm path='/confirm' />
        <Admin path='/admin' />
      </Router>
    )
}

export default App
