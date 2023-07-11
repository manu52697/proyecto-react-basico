import React from 'react';

// @ts-expect-error
import LoginFormik from '../../components/pure/forms/loginFormik';

const LoginPage: React.FunctionComponent = () => {
    return (
        <div>
            {/* Some filler for big screens */}
            {/* The actual login form */}
            <LoginFormik></LoginFormik>
        </div>
    );
}

export default LoginPage;
