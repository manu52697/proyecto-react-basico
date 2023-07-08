import React from 'react';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';

const LoginFormik = () => {


    const initialCredentials = {
        email: '',
        password:''
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
                async (values) => {
                    await new Promise((r) => setTimeout(r,1000));
                    alert(JSON.stringify(values,null,2));
                    localStorage.setItem('credentials', values)
                }
            }
        >

        {/* Obtain props from Formik */}
        { props => {
            const {values,
            touched,
            errors,
            isSubmitting,
            handleChange,
            handleBlur,
            } = props;


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
                        errors.passwd && touched.passwd && 
                        (
                            <div className='error'>
                                <p>{errors.passwd}</p>
                            </div>
                        )
                    }

                    <button className='btn btn-lg btn-primary' type="submit">Login</button>

                    {isSubmitting ? (<p>Checking your credentials</p>): null}

                </Form>
            )

        }}

        </Formik>
        </div>
    );
}

export default LoginFormik;
