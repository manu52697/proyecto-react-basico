import type React from 'react'

// @ts-expect-error ts-migration-incomplete //TODO migrate component to tsx
import RegisterFormik from '../../components/pure/forms/registerFormik'
import { Link, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const RegisterPage: React.FunctionComponent = () => {
  return (
        <div>
            <RegisterFormik></RegisterFormik>
            <Typography variant='caption'>
                Already have an account? &nbsp;
                <Link variant='caption' component={RouterLink} to={'/login'}>
                Login
                </Link>
            </Typography>

        </div>
  )
}

export default RegisterPage
