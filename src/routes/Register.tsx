import React from 'react'
import { Auth } from 'aws-amplify'
import { RouteComponentProps } from '@reach/router'
import useInput from '../hooks/useInput'

type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void

const Register = (props: RouteComponentProps) => {
  const [name, nameChange] = useInput('')
  const [email, emailChange] = useInput('')
  const [password, passwordChange] = useInput('')

  const handleSubmit: SubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const [given_name, family_name] = name.split(" ")
      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email,
          given_name,
          family_name
        }
      })
      console.log({user})
    } catch(e) { console.error(e) }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" type="text" value={name} onChange={nameChange}/>
      <input placeholder="Email" type="email" value={email} onChange={emailChange}/>
      <input placeholder="Password" type="password" value={password} onChange={passwordChange}/>
      <button type="submit">Register</button>
    </form>
  )
}

export default Register