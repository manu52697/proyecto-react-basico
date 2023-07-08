import React from 'react';
import { User } from '../../../models/user.class';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {



    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', 
        role: ROLES.USER,
    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                                .min(6, 'Username must be min 6 characters')
                                .max(12, 'Username too long. Max is 12 characters')
                                .required('Username is required'),
            email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),

            role:Yup.string()
                .oneOf([
                    ROLES.USER,
                    ROLES.ADMIN
                ], 'Must select a role')
                .required('Role is required') ,

            password: Yup.string()
                .required('Password is required').min(8, 'Password to short, minimum is 8 chars'),
            
            confirm: Yup.string()
                .when(
                    'password', {
                        is: value => value && value.length > 0,
                        then: schema => schema.oneOf([Yup.ref('password')], 'Passwords must match!')
                    }
                )
                .required('Please confirm the password'),
        }
    )

    const submit = (values) => {
        alert('User registered: '  + values)
    }
    return (
        <div>
            <h3>Register Formik</h3>
            <Formik
            initialValues={initialValues}
            validationSchema={registerSchema}
            // *** on submit handler ***
            onSubmit={
                async (values) => {
                    await new Promise((r) => setTimeout(r,1000));
                    alert(JSON.stringify(values,null,2));
                }
            }
            >

            {({values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            }) => {
                return (
                    <Form className='form d-flex flex-column'>

                    <label className='mt-4' htmlFor="username">Username</label>
                    <Field
                    id="username"
                    name="username"
                    placeholder="cutest-username-ever"
                    type="text"
                    />

                    {
                        errors.username && touched.username && 
                        (
                            <ErrorMessage name='username' component='div'></ErrorMessage>
                        )
                    }

                    <label className='mt-3' htmlFor="email">Email</label>
                    <Field
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email"
                    />
                    
                    {
                        errors.email && touched.email && 
                        (
                            <ErrorMessage name='email' component='div'></ErrorMessage>
                        )
                    }


                    <label className='mt-3' htmlFor="password">Password</label>
                    <Field 
                    id="password" 
                    name="password" 
                    placeholder="*********" 
                    type="password"
                    />

                    {
                        errors.password && touched.password && 
                        (
                            <ErrorMessage name='password' component='div'></ErrorMessage>
                        )
                    }

                    <label className='mt-3' htmlFor="confirm">Confirm Password</label>
                    <Field 
                    id="confirm" 
                    name="confirm" 
                    placeholder="*********" 
                    type="password"
                    />

                    {
                        errors.confirm && touched.confirm && 
                        (
                            <ErrorMessage name='confirm' component='div'></ErrorMessage>
                        )
                    }

                    <button className='btn btn-lg btn-primary mt-4' type="submit">Register</button>

                    {isSubmitting ? (<p>Checking your credentials</p>): null}

                    </Form>
                )
            }
            }

            </Formik>
        </div>
    );
}

export default RegisterFormik;
