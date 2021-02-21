import { curry } from 'lodash'
import React, { useContext } from 'react'
import {
  AdminDispatchContext,
  AdminStateContext,
} from '~/context/admin/context'
import useLessons from '~/hooks/useLessons'

const LessonEditor: React.FC = () => {
  const { lessonEditor } = useContext(AdminStateContext)
  const adminDispatch = useContext(AdminDispatchContext)
  const [lessons, lessonsDispatch] = useLessons()

  const handleClick = () => {
    if (adminDispatch) {
      adminDispatch({ type: 'RETURN_DASHBOARD' })
    }
  }

  if (lessonEditor.enabled) {
    return (
      <div>
        <h1>Test</h1>
        <button onClick={handleClick}>Disable</button>
      </div>
    )
  }

  return null
}

export default LessonEditor
