/**
 * Componente que va  a contener un formulario para autenticar usuarios
 */

import React, {useState} from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
            user : ``,
            passwd: ''
    }
    ];

    const [credentials, setCredentials] = useState(initialCredentials);

    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
