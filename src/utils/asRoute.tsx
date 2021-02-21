import { RouteComponentProps } from '@reach/router'
import React from 'react'

export interface AsRoute {
  (Component: React.FC): React.FC<RouteComponentProps>
}

const asRoute: AsRoute = (Component) => () => <Component />

export default asRoute
