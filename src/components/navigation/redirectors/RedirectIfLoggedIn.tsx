import { useNavigate } from 'react-router-dom';


import RedirigibleRoute from './RedirigibleRoute';
import useUserCredentials from '../../../hooks/useUserCredentials';


const RedirectIfLoggedIn = (props: {children:any}) => {

    const [credentials] = useUserCredentials();
    const navigate = useNavigate();

    const doesRedirect = credentials.isLoggedIn;

    function redirectLoggedUsers(){
        alert('You are already logged in. Redirecting to home...');
        navigate('/home', { replace:true });
    }

    return (
        <RedirigibleRoute 
            redirectionCondition={() => doesRedirect} 
            redirectionFunction={redirectLoggedUsers}
        >
            {props.children}
        </RedirigibleRoute>
    );
};

export default RedirectIfLoggedIn;
