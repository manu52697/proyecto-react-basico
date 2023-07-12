import React, { useState, useEffect } from 'react'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'
import TaskComponent from '../pure/taskComponent'

// Importamos la hoja de estilos task.scss
import '../../styles/task.css'

// import TaskFormBase from '../pure/forms/tasks/taskFormBase';
import Loader from '../pure/loader'
import TaskFormik from '../pure/forms/tasks/taskFormik'

// fake data
import { TASK_LIST_DEMO } from '../../util/fake/taskPopulator'

const TaskListComponent = () => {
  const defaultTask1 = TASK_LIST_DEMO[0]
  const defaultTask2 = TASK_LIST_DEMO[1]
  const defaultTask3 = TASK_LIST_DEMO[2]

  // Estado del componente
  const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3])
  const [loading, setLoading] = useState(true)

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log('Task State has been modified')
    setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => {
      console.log('TaskList is going to unmount...')
    }
  }, [tasks])

  function completeTask (task) {
    console.log('Complete this task: ' + task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]

    tempTasks[index].completed = !tempTasks[index].completed

    // we update the state of the component and it will re-render the
    // view and redo the iteration in order to show the updated task
    setTasks(tempTasks)
  }

  function deleteTask (task) {
    console.log('Delete this task: ' + task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.splice(index, 1)
    setTasks(tempTasks)
  }

  function addTask (task) {
    console.log('Add this task: ' + task)
    const index = tasks.indexOf(task)
    const tempTasks = [...tasks]
    tempTasks.push(task)
    setTasks(tempTasks)
  }

  const taskTable = () => (
        <table>
                <thead>
                <tr>
                    <th scope='col'>
                        Title
                    </th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col' colSpan="2">Actions</th>
                </tr>
                </thead>
                <tbody>
                    {tasks.map((task_, index) => {
                      return (
                        <TaskComponent
                            task={task_}
                            key={index}
                            complete={completeTask}
                            remove={deleteTask}
                            >
                        </TaskComponent>
                      )
                    })}
                </tbody>
            </table>
  )

  const noTasks = () => {
    return (
            <div>
                <h3>No tasks to show</h3>
                <h4>Please, create one</h4>
            </div>
    )
  }

  const taskDisplay = tasks.length > 0 ? taskTable() : noTasks()

  return (
        <div className='d-flex flex-row'>
        <div className='card'>
        {/* Card header */}
            <div className='card-header p-3'>
                <h4>Your Tasks:</h4>
            </div>
            {/* Card Body */}
            <div className='card-body justify-content-center' data-mdb-perfect-scrollbar='true' style={ { minHeight: '60vh', minWidth: '30vw' } }>
            {loading ? <Loader></Loader> : taskDisplay}
            </div>

        </div>
        <div className='col-1'></div>
        {/* //! DEPRECATED: Old form to add a task */}
        {/* <TaskFormBase add={addTask} length={tasks.length}></TaskFormBase> */}

        {/* //TODO extract the card here and render the component right in the card-body */}
        <TaskFormik add={addTask} length={tasks.length}></TaskFormik>
        </div>
  )
}

export default TaskListComponent
