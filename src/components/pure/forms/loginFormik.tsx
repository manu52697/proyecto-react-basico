/* eslint-disable react/prop-types */
import type React from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'

import useLoginUser from '../../../hooks/auth/useLoginUser'
import { type LoginInfo } from '../../../models/types/auth'
import { useNavigate } from 'react-router-dom'

const LoginFormik: React.FunctionComponent = () => {
  const navigate = useNavigate()

  const doLogin = useLoginUser()

  const initialCredentials: LoginInfo = {
    email: '',
    password: ''
  }

  const onSubmitLoginForm: (loginInfo: LoginInfo) => boolean = (loginInfo) => {
    const success = doLogin(loginInfo)

    if (success) navigate('dashboard')

    return false
  }

  const loginSchema = Yup.object().shape(
    {
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
    }
  )

  return (
        <div>
        <h1>Sign Up</h1>
        <Formik
            initialValues={initialCredentials}

            // *** Yup validation schema ***
            validationSchema={loginSchema}

            // *** on submit handler ***
            onSubmit={
                async (values, actions) => {
                //   await new Promise((r) => setTimeout(r, 1000))
                  // alert(JSON.stringify(values,null,2));
                  onSubmitLoginForm(values)
                  actions.setSubmitting(false)

                  // localStorage.setItem('credentials', values)
                }

            }
        >

        {/* Obtain props from Formik */}
        { props => {
          const {

            // values,
            touched,
            errors,
            isSubmitting

            // handleChange,
            // handleBlur,
          } = props

          return (
                <Form className='form'>
                    <label htmlFor="email">Email</label>
                    <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    />

                    {
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        errors.email && touched.email &&
                        (
                            <div className='error'>
                                <p>{errors.email}</p>
                            </div>
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field
                    id="password"
                    name="password"
                    placeholder="*********"
                    type="password"
                    />

{
                        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
                        errors.password && touched.password &&
                        (
                            <div className='error'>
                                <p>{errors.password}</p>
                            </div>
                        )
                    }

                    <button className='btn btn-lg btn-primary' type="submit">Login</button>

                    {isSubmitting ? (<p>Checking your credentials</p>) : null}

                </Form>
          )
        }}

        </Formik>
        </div>
  )
}

export default LoginFormik
