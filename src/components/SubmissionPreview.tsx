/** @jsx jsx */
import React from 'react'
import { Submission } from '~/api/submission';
import { css, jsx } from '@emotion/react'

export interface SubmissionPreviewProps {
  submission: Submission
}

const SubmissionPreview: React.FC<SubmissionPreviewProps> = ({ submission }) => {

  return (
    <div css={containerStyle}>
      <span>{submission?.id}</span>
      <span>Marked: {submission?.feedback ? 'Yes' : 'No'}</span>
    </div>
  )
}

const containerStyle = css`
  display: flex;
  flex-direction: row;
`
export default SubmissionPreview