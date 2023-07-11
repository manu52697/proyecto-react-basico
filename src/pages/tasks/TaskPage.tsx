import type React from 'react'

// @ts-expect-error ts-migration-incomplete //TODO migrate module to tsx
import TaskListComponent from '../../components/containers/task_list'

const TaskPage: React.FunctionComponent = () => {
  return (
        <div>
        {/* filler or whatever */}
            <TaskListComponent></TaskListComponent>
        </div>
  )
}

export default TaskPage
