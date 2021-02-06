import React from 'react'
import { getSubmissionVideo, listSubmissionsByLesson, Submission } from '~/api/submission'
import usePromiseSuspense from '~/hooks/usePromiseSuspense'
import ReactPlayer from 'react-player'

type SubmissionPlayerProps = {
  lessonId: string | undefined
}

export const SubmissionPlayerFallback: React.FC = () => {

  return (
    <div>Loading...</div>
  )
}

const SubmissionPlayer: React.FC<SubmissionPlayerProps> = ({ lessonId }) => {
  const submission = usePromiseSuspense(listSubmissionsByLesson, [lessonId]) as Submission[]
  const id = submission[0]?.id
  const videoUrl = usePromiseSuspense(getSubmissionVideo, [id]) as string

  return (
    <ReactPlayer url={videoUrl} controls />
  )
}

export default SubmissionPlayer