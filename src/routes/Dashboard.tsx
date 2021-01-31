import React, { Suspense } from 'react'
import { RouteComponentProps } from '@reach/router'
import { Auth } from 'aws-amplify'
import LessonPreviewList from '../components/LessonPreviewList'

const Dashboard = (props: RouteComponentProps) => {
  const handleLogout = () => {
    Auth.signOut()
  }
  return (
    <Suspense fallback='loading...'>
      <div>Dashboard</div>
      <LessonPreviewList />
      <button onClick={handleLogout}>Logout</button>
    </Suspense>
  )
}

export default Dashboard