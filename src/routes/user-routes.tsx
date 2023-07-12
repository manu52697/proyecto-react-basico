/* eslint-disable react/no-children-prop */

// protected pages
import ProfilePage from '../pages/profile/ProfilePage'
import TaskDetailPage from '../pages/tasks/TaskDetailPage'
import TaskPage from '../pages/tasks/TaskPage'
import { DashBoardPage } from '../pages/dashboard/DashBoardPage'

// Redirection component
import ProtectedRoute from '../components/navigation/redirectors/ProtectedRoute'

// TODO Eventually remove this fake data
import { TASK_LIST_DEMO } from '../util/fake/taskPopulator'

interface TaskDetailParams {
  id: number
}

export const USER_ROUTES = [
  {
    path: 'profile',
    element: <ProtectedRoute children={<ProfilePage/>}/>
  },
  {
    path: 'tasks',
    element: <ProtectedRoute children={<TaskPage/>}/>
  },
  {
    path: 'tasks/:id',
    element: <ProtectedRoute children={<TaskDetailPage/>}/>,
    loader: async (params: TaskDetailParams) => TASK_LIST_DEMO[params.id]
  },
  {
    path: 'dashboard',
    element: <ProtectedRoute children={<DashBoardPage/>} />
  }
]
