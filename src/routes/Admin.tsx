import React, { useContext, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'
import AdminProvider, {
  AdminDispatchContext,
  AdminStateContext,
} from '~/context/admin/context'
import LessonEditor from '~/components/LessonEditor'
import AdminDashboard from '~/components/AdminDashboard'
import useLessons from '~/hooks/useLessons'

const Admin: React.FC<RouteComponentProps> = (props) => {
  const { lessonEditor, submissionEditor } = useContext(AdminStateContext)
  const adminDispatch = useContext(AdminDispatchContext)

  return lessonEditor.enabled ? (
    <LessonEditor />
  ) : submissionEditor.enabled ? (
    <div>Sub Editor</div>
  ) : (
    <AdminDashboard />
  )
}

export default Admin
