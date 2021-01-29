import React from 'react'
import { Auth } from 'aws-amplify'
import { RouteComponentProps } from '@reach/router'
import useInput from '../hooks/useInput'


type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void

const Login = (props: RouteComponentProps) => {
  const [email, emailChange] = useInput('')
  const [password, passwordChange] = useInput('')

  const handleSubmit: SubmitHandler = async (e) => {
    e.preventDefault()
    try {
      await Auth.signIn(email, password)
      const user = await Auth.currentAuthenticatedUser()
    console.log({user})
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <input value={email} onChange={emailChange} type="email" />
        <input value={password} onChange={passwordChange} type="password" />
        <button type="submit">Login</button>
      </form>
    </React.Fragment>
  )
  
}

export default Login