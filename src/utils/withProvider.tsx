import React from 'react'

export interface WithProvider {
  (Provider: React.FC): (Receiver: React.FC) => React.FC
}

const withProvider: WithProvider = (Provider) => (Receiver) => () => (
  <Provider>
    <Receiver />
  </Provider>
)

export default withProvider
