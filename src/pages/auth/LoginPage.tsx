import type React from 'react'

import LoginFormik from '../../components/pure/forms/loginFormik'
import { Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

const LoginPage: React.FunctionComponent = () => {
  return (
        <div>
            {/* Some filler for big screens */}
            {/* The actual login form */}
            <LoginFormik></LoginFormik>
            <Link variant='caption' component={RouterLink} to={'/signup'}>
            Create account
            </Link>
        </div>
  )
}

export default LoginPage
