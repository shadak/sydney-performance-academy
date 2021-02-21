import React from 'react'
import { Router } from '@reach/router'
import Login from '../routes/Login'
import Dashboard from '../routes/Dashboard'
import Register from '../routes/Register'
import Confirm from '../routes/Confirm'
import Admin from '../routes/Admin'
import Lesson from '../routes/Lesson'
import withProvider from '~/utils/withProvider'
import AdminProvider from '~/context/admin/context'
import asRoute from '~/utils/asRoute'
import { curry } from 'ramda'
import LessonsProvider from '~/context/lessons/context'

const App = () => {
  const asRouteWithProvider = curry((provider: React.FC, component: React.FC) =>
    asRoute(withProvider(provider)(component))
  )
  const AdminRoute = asRoute(
    withProvider(LessonsProvider)(withProvider(AdminProvider)(Admin))
  )
  //const AdminRoute = asRouteWithProvider(AdminProvider)(Admin)

  return (
    <Router>
      <Dashboard path="/" />
      <Lesson path="/lesson/:lessonId" />
      <Login path="/login" />
      <Register path="/register" />
      <Confirm path="/confirm" />
      <AdminRoute path="/admin" />
    </Router>
  )
}

export default App
