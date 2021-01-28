import React from 'react'
import { Router } from '@reach/router'
import Dashboard from '../routes/Dashboard'

const App = () => {
    return (
      <Router>
        <Dashboard path='/' />
      </Router>
    )
}

export default App
