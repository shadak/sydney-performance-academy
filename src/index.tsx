import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import Amplify from "aws-amplify"
import config from "./aws-exports"
import videoConfig from "./aws-video-exports"

Amplify.configure({...config, ...videoConfig})

render(<App />, document.getElementById('root'))
