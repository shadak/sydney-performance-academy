import React from 'react'
import usePromiseSuspense from '../hooks/usePromiseSuspense'

interface LessonPreviewProps {
  lessonId: string;
}

const LessonPreview = ({ lessonId }: LessonPreviewProps) => {

  return <div>{lessonId}</div>
}

export default LessonPreview