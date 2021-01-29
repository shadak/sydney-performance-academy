import React from 'react'
import { Auth } from 'aws-amplify'
import { RouteComponentProps } from '@reach/router'
import useInput from '../hooks/useInput'

type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void

const Confirm = (props: RouteComponentProps) => {
  const [email, emailChange] = useInput('')
  const [code, codeChange] = useInput('')

  const handleSubmit: SubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await Auth.confirmSignUp(email, code);
    } catch (error) {
        console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Email" type="email" value={email} onChange={emailChange}/>
      <input placeholder="Code" type="text" value={code} onChange={codeChange}/>
      <button type="submit">Confirm</button>
    </form>
  )

}

export default Confirm