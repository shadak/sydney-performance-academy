import React from 'react'
import { getLessonVideo } from '~/api/lesson'
import usePromiseSuspense from '~/hooks/usePromiseSuspense'
import ReactPlayer from 'react-player'

type LessonPlayerProps = {
  id: string | undefined
}

export const LessonPlayerFallback: React.FC = () => {

  return (
    <div>Loading...</div>
  )
}

const LessonPlayer: React.FC<LessonPlayerProps> = ({ id }) => {
  const videoUrl = usePromiseSuspense(getLessonVideo, [id]) as string

  return (
    <ReactPlayer url={videoUrl} controls />
  )
}

export default LessonPlayer