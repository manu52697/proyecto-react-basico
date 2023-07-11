import type React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.enum'

// Importamos la hoja de estilos de task
import '../../styles/task.scss'

interface TaskProps {
  task: Task
  complete: (task: Task) => void
  remove: (task: Task) => void
}

const TaskComponent: React.FunctionComponent<TaskProps> = ({ task, complete, remove }) => {
  /* useEffect(() => {
        console.log('Task created')
        return () => {
            console.log(`Task ${task.name} is going to unmount`)
        };
    }, [task]); */

  /**
     * Function that returns a badge based on the task's level
     */
  function taskLevelBadge (): React.JSX.Element {
    const normalBadge = (<h6 className='mb-0'>
                            <span className='badge bg-primary' style={{ fontSize: '0.9rem' }}>
                                {task.level}
                            </span></h6>)

    switch (task.level) {
      case LEVELS.NORMAL:
        return normalBadge
      case LEVELS.PRIORITY:
        return (<h6 className='mb-0'><span className='badge bg-warning' style={{ fontSize: '0.9rem' }}>
                    {task.level}
                </span></h6>)
      case LEVELS.BLOCKING:
        return (<h6 className='mb-0'><span className='badge bg-danger' style={{ fontSize: '0.9rem' }}>
                    {task.level}
                </span></h6>)
      default:
        return normalBadge
    }
  }

  /**
     * Function that returns an icon based on completion status of the task
     */
  function taskCompletedIcon (): React.JSX.Element {
    if (task.completed) {
      return (<i onClick={() => { complete(task) }} className='bi bi-toggle-on task-action' style={ { color: 'green', fontSize: '1.8rem' } }></i>)
    } else {
      return (<i onClick={() => { complete(task) }} className='bi bi-toggle-off task-action' style={ { color: 'grey', fontSize: '1.8rem' }}></i>)
    }
  }

  return (

        <tr className={'fw-normal ' + (task.completed ? 'task-completed' : 'task-pending')}>
            <th>
            <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span>{task.description}</span>
            </td>
            <td className='align-middle'>
            {/* Execute function to return badge element */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
            {/* Execution of function to return icon depending on completion */}
                {taskCompletedIcon()}
            </td>
            <td>
            <i
            className='bi-trash task-action'
            style={ { color: 'tomato', fontSize: '1.8rem' }}
            onClick={() => { remove(task) }}
            ></i>
            </td>
        </tr>
  )
}

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default TaskComponent
