
// protected pages
import ProfilePage from "../pages/profile/ProfilePage";
import TaskDetailPage from "../pages/tasks/TaskDetailPage";
import TaskPage from "../pages/tasks/TaskPage";

// Redirection component
import ProtectedRoute from "../components/navigation/redirectors/ProtectedRoute";

// TODO Eventually remove this fake data
import { TASK_LIST_DEMO } from "../util/fake/taskPopulator";

export const USER_ROUTES = [
    // { path: 'profile',
    // element: <ProtectedRoute children=<ProfilePage/>/>,
    // },
    { path:'tasks',
    element:<ProtectedRoute children={<TaskPage/>}/>
    },
    { path:'tasks/:id',
    element: <ProtectedRoute children={<TaskDetailPage/>}/>,
    // @ts-expect-error
    loader: async ({params}) => TASK_LIST_DEMO[params.id]
    },
    {
        path: 'profile',
        element: <ProfilePage/>,
    },
]


