import React, { useState } from 'react'

type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void;

const useInput = (defaultValue: string): [string, ChangeHandler] => {
  const [value, setValue] = useState(defaultValue)
  const onChange: ChangeHandler = (event) => { setValue(event.target.value) }
  
  return [value, onChange]
}

export default useInput