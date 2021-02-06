import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Amplify from "aws-amplify"
import config from "./aws-exports"

Amplify.configure(config)

render(<App />, document.getElementById('root'))
