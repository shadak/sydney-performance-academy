import React, { Suspense, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import LessonPlayer, { LessonPlayerFallback } from '../components/LessonPlayer'
import useFileInput from '~/hooks/useFileInput'
import { createSubmission } from '~/api/submission'

type LessonParameters = {
  lessonId: string
}
export type LessonRouteProps = RouteComponentProps<LessonParameters>
type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void

const Lesson: React.FC<LessonRouteProps> = ({ lessonId }) => {
  const [file, fileInputClick] = useFileInput()
  const [subVisible, setSubVisible] = useState(true)

  const handleProgress = (progress: any) => {
    console.log(progress)
  }

  const handleSubmissionUpload: SubmitHandler = async (e) => {
    e.preventDefault()
    if (file && lessonId) {
      createSubmission({ lessonId, file }, handleProgress)
    }
  }

  return (
    <>
      <Suspense fallback={<LessonPlayerFallback/>}>
        <LessonPlayer id={lessonId} />
        
      </Suspense>
      <form onSubmit={handleSubmissionUpload}>
        <button onClick={(e) => { e.preventDefault; fileInputClick() }}>
          Select File
        </button>
        <button>
          Upload
        </button>
      </form>
    </>
  )
}

export default Lesson