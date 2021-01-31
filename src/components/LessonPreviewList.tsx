import React, { Suspense } from 'react'
import usePromiseSuspense from '~/hooks/usePromiseSuspense'
import { listLessons, Lesson, ListLessons} from '~/api/lesson'
import LessonPreview, { LessonPreviewFallback } from '../components/LessonPreview'

const LessonPreviewList: React.FC = () => {
  const lessons = usePromiseSuspense<ListLessons, Lesson[]>(listLessons, [])
  
  return (
    <div>
      {lessons.map((lesson) => (
        <Suspense key={lesson.id} fallback={<LessonPreviewFallback />}>
          <LessonPreview lesson={lesson}/>
        </Suspense>
      ))}
    </div>
  )
}

export default LessonPreviewList