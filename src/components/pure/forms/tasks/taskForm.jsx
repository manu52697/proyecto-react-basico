import React from 'react'
import PropTypes from 'prop-types'
import { Field, Form, ErrorMessage } from 'formik'
import { LEVELS } from '../../../../models/levels.enum'
import Loader from '../../loader'

// Styles
import '../../../../styles/taskform.css'

const TaskForm = ({ values, touched, errors, isSubmitting, length }) => {
  const priorityClassNames = (level) => {
    switch (level) {
      case LEVELS.BLOCKING:
        return 'levels-blocking'

      case LEVELS.PRIORITY:
        return 'levels-priority'

        // case LEVELS.NORMAL: // not needed
        //     return 'levels-normal';

      default:
        return 'levels-normal'
    }
  }

  return (
        <Form
        className='card'>   {/* d-flex flex-column justify-content-center align-items-center mt-4 mb-4 p-3 */}
            <div className='card-header p-3'>
            <h4>New Task</h4>
            </div>

            <div className='card-body'>
            <Field
                id="taskName"
                name="taskName"
                placeholder="Task Name"
                type="text"
                className='form-control form-control-lg mt-4'
                autoFocus
            />

            {/* //TODO Add task name errors */}
            {
                errors.taskName && touched.taskName &&
                (
                    <ErrorMessage name='taskName' component='div'></ErrorMessage>
                )
            }

            <Field
                id="taskDescription"
                name="taskDescription"
                placeholder="Task Description"
                type="text"
                className='form-control form-control-lg mt-4'
            />

            {/* //TODO add description errors */}
            {
                errors.taskDescription && touched.taskDescription &&
                (
                    <ErrorMessage name='taskDescription' component='div'></ErrorMessage>
                )
            }

            {/* //TODO add select field */}
            <Field
            id="taskLevel"
            name="taskLevel"
            as="select"
            defaultValue={LEVELS.NORMAL}
            className={'form-select form-control form-control-lg mt-4 ' + priorityClassNames(values.taskLevel)}
            >
                <option value={LEVELS.NORMAL}>Normal</option>
                <option value={LEVELS.PRIORITY}>Urgent</option>
                <option value={LEVELS.BLOCKING}>Blocking</option>
            </Field>

            {/* //TODO Add select field error */}
            {
                errors.taskLevel && touched.taskLevel &&
                (
                    <ErrorMessage name='taskLevel' component='div'></ErrorMessage>
                )
            }

            {/* Submit button */}
            <button
            className='btn btn-lg btn-primary mt-4'
            type="submit">
                {length > 0 ? 'Add new task' : 'Create a task'}
            </button>

            {isSubmitting ? <Loader className='mt-4'></Loader> : null}

            </div>

        </Form>
  )
}

TaskForm.propTypes = {

}

export default TaskForm
