/** @jsx jsx */
import React from 'react'
import usePromiseSuspense from '../hooks/usePromiseSuspense'
import { getLessonThumbnail, Lesson } from '~/api/lesson'
import { css, jsx } from '@emotion/react'
import { Link } from '@reach/router'


interface LessonPreviewProps {
  lesson: Lesson
}

const LessonPreview: React.FC<LessonPreviewProps> = (props) => {
  const { lesson } = props
  let url: string | undefined
  if (lesson.id) {
    url = usePromiseSuspense(getLessonThumbnail, [lesson.id])
  }

  return (
    <div>
      <img src={url} css={imageStyle}/>
      <Link to={`/lesson/${lesson.id}`}>{lesson.title}</Link>
      <div>{lesson.description}</div>
    </div>
  )
}

export const LessonPreviewFallback: React.FC = () => {
  return (
    <div>
      <div css={placeholderStyle}/>
    </div>
  )
}

const placeholderStyle = css`
  width: 400px;
  height: 200px;
  background-color: gray;
`

const imageStyle = css`
  width: 400px;
  height: 200px;
  background-color:gray;
`

export default LessonPreview