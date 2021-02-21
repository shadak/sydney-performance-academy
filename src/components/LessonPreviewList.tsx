import React, { Suspense } from 'react'
import usePromiseSuspense from '~/hooks/usePromiseSuspense'
import { listLessons, Lesson, ListLessons } from '~/api/lesson'
import LessonPreview, {
  LessonPreviewFallback,
} from '../components/LessonPreview'

const LessonPreviewList: React.FC = () => {
  //const lessons = usePromiseSuspense<ListLessons, Lesson[]>(listLessons, [])
  listLessons().then(console.log)
  return <div></div>
}

export default LessonPreviewList
