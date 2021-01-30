/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import React from 'react'
import { RouteComponentProps } from '@reach/router'
import useInput from '../hooks/useInput'
import useFileInput from '../hooks/useFileInput'
import { createLesson } from '~/api/lesson'

type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void



const Admin: React.FC<RouteComponentProps> = (props) => {
  const [title, titleChange] = useInput('')
  const [description , descriptionChange] = useInput('')
  const [file, fileInputClick] = useFileInput()

  const handleProgress = (progress: any) => {
    console.log(progress)
  }

  const handleLessonSubmit: SubmitHandler = async (e) => {
    e.preventDefault()
    if (file) {
      createLesson({ title, description, file}, handleProgress)
    }
  }

  return (
    <div>
      <form css={formStyle} onSubmit={handleLessonSubmit}>
        <input type="text" value={title} placeholder="Title" onChange={titleChange}/>
        <input type="text" value={description} placeholder="Description" onChange={descriptionChange}/>
        <button onClick={(e) => { e.preventDefault(); fileInputClick() }}>
          Select File
        </button>
        <button type="submit">
          Submit
        </button>
        </form>
    </div>
  )
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  input {
    margin-bottom: 10px;
  }
`

export default Admin