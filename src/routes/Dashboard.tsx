import React, { Suspense } from 'react'
import { RouteComponentProps } from '@reach/router'
import LessonPreview from '../components/LessonPreview'

const Dashboard = (props: RouteComponentProps) => {
  const lessons: Array<string> = ['1', '2', '3', '4']
  return (
    <Suspense fallback='loading...'>
      <div>Dashboard</div>
      {lessons.map((lessonId) => <LessonPreview key={lessonId} lessonId={lessonId}/>)}
    </Suspense>
  )
}

export default Dashboard