/** @jsx jsx */
import React from 'react'
import { ListSubmissions, listSubmissions, Submission } from '~/api/submission'
import usePromiseSuspense from '~/hooks/usePromiseSuspense'
import SubmissionPreview from './SubmissionPreview'
import { css, jsx } from '@emotion/react'

export const SubmissionPreviewListFallback: React.FC = () => {
  return <div>Loading...</div>
}

const SubmissionPreviewList: React.FC = () => {
  const submissions = usePromiseSuspense<ListSubmissions, Submission[]>(
    listSubmissions,
    []
  )
  console.log(submissions)
  return <div css={containerStyle}></div>
}

const containerStyle = css`
  display: flex;
  flex-direction: column;
`

export default SubmissionPreviewList
