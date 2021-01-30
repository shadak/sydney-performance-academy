import React, { Suspense } from 'react'
import { RouteComponentProps } from '@reach/router'
import LessonPreview from '../components/LessonPreview'
import { Auth } from 'aws-amplify'

const Dashboard = (props: RouteComponentProps) => {
  const lessons: Array<string> = ['1', '2', '3', '4']

  const handleLogout = () => {
    Auth.signOut()
  }
  return (
    <Suspense fallback='loading...'>
      <div>Dashboard</div>
      {lessons.map((lessonId) => <LessonPreview key={lessonId} lessonId={lessonId}/>)}
      <button onClick={handleLogout}>Logout</button>
    </Suspense>
  )
}

export default Dashboard