import React, { useState } from 'react'


const useFileInput = (): [File | undefined, Function] => {
  const [file, setFile] = useState<File | undefined>()

  const handleFileChange = (e: Event) => {
    setFile((<HTMLInputElement>e.target).files![0])
  }

  const inputElement = document.createElement('input')
  inputElement.type = 'file'
  inputElement.onchange = handleFileChange 

  const handleClick = () => {
    inputElement.click()
  }

  return [file, handleClick]
}

export default useFileInput