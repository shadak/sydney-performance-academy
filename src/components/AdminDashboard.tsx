import React, { Suspense, useEffect } from 'react'
import { CreateLessonInput } from '~/api/API'
import { createLessonThunk } from '~/api/lesson'
import useLessons from '~/hooks/useLessons'
import LessonPreview, { LessonPreviewFallback } from './LessonPreview'

const AdminDashboard: React.FC = () => {
  const [lessons, lessonsDispatch] = useLessons()
  const createEmptyLesson = createLessonThunk({
    input: { title: '', description: '' },
  })

  const handleAddLesson = () => lessonsDispatch(createEmptyLesson)

  return (
    <div>
      <h1>Dash</h1>
      {lessons.map((lesson) =>
        lesson ? (
          <Suspense key={lesson.id} fallback={<LessonPreviewFallback />}>
            <LessonPreview lesson={lesson} />
          </Suspense>
        ) : null
      )}
      <button>Enable Lesson Editor</button>
    </div>
  )
}

export default AdminDashboard
