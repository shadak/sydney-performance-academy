import React from 'react'
import { getSubmissionById, getSubmissionVideo, listSubmissionsByLesson, Submission } from '~/api/submission'
import usePromiseSuspense from '~/hooks/usePromiseSuspense'
import ReactPlayer from 'react-player'

type SubmissionPlayerProps = {
  id: string | undefined
}

export const SubmissionPlayerFallback: React.FC = () => {
  return (
    <div>Loading...</div>
  )
}

const SubmissionPlayer: React.FC<SubmissionPlayerProps> = ({ id }) => {
  const videoUrl = usePromiseSuspense(getSubmissionVideo, [id]) as string
  return (
    <ReactPlayer url={videoUrl} controls />
  )
}

export default SubmissionPlayer