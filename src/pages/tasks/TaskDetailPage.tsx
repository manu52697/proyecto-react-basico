import type React from 'react'

// This helps parsing the path params and calling the loader function defined for the route
import { useLoaderData, useParams } from 'react-router-dom'
import { type Task } from '../../models/task.class'

const TaskDetailPage: React.FunctionComponent = () => {
  const params = useParams()
  const task = useLoaderData() as Task

  return (
        <div>
            <h1> Task Detail - {params.id} </h1>
            <h2> { task.name } </h2>
            <h5> { task.description } </h5>
        </div>
  )
}

TaskDetailPage.propTypes = {

}

export default TaskDetailPage
