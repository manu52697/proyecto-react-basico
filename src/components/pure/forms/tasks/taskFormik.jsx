import React from 'react'
import PropTypes from 'prop-types'
import { Formik } from 'formik'
import { Task } from '../../../../models/task.class'
import { LEVELS } from '../../../../models/levels.enum'
import * as Yup from 'yup'
import TaskForm from './taskForm'

const TaskFormik = ({ add, length }) => {
  const initialValues = {
    taskName: '',
    taskDescription: '',
    taskCompleted: false,
    taskLevel: LEVELS.NORMAL
  }

  const addTaskSchema = Yup.object().shape(
    {
      taskName: Yup.string()
        .min(6, 'Name is too short')
        .max(35, 'Name is too long')
        .required('Please provide a name'),
      taskDescription: Yup.string()
        .when('taskName', {
          is: value => value && value.length > 0,
          then: schema => schema
            .min(8, 'Description is too short')
            .max(60, 'Description too long')
            .required('Provide a description')
        }),
      taskCompleted: Yup.boolean()
        .required('Missing completion status'),

      taskLevel: Yup.string()
        .oneOf([LEVELS.NORMAL, LEVELS.PRIORITY, LEVELS.BLOCKING], 'Invalid priority level')
        .required('Please provide a priority level')
    }
  )

  function addTask (values) {
    // e.preventDefault(); //TODO check if formik already handles this
    console.log(values)
    const newTask = new Task(values.taskName, values.taskDescription, values.taskCompleted, values.taskLevel)
    add(newTask)
  }

  return (
        <Formik
        initialValues={initialValues}

        // *** Validation Schema ***
        validationSchema={addTaskSchema}

        // *** onSubmit Handler ***
        onSubmit={(values) => { addTask(values) }}
        >
            {
                ({
                  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleSubmit
                }) => <TaskForm
                values={values}
                touched={touched}
                errors={errors}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
                length={length}
                onSubmit={handleSubmit}
                ></TaskForm>
            }
        </Formik>
  )
}

TaskFormik.propTypes = {
  add: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired
}

export default TaskFormik
