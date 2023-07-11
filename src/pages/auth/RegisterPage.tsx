import React from 'react';

// @ts-expect-error
import RegisterFormik from '../../components/pure/forms/registerFormik';

const RegisterPage: React.FunctionComponent = () => {
    return (
        <div>
            <RegisterFormik></RegisterFormik>
        </div>
    );
}

export default RegisterPage;
