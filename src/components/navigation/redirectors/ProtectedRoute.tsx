import { useNavigate } from 'react-router-dom';
import useUserCredentials from '../../../hooks/useUserCredentials';
import RedirigibleRoute from './RedirigibleRoute';


const ProtectedRoute = (props:any) => {

    const navigate = useNavigate();
    const [credentials] = useUserCredentials();

    const doesRedirect: boolean = !credentials.isLoggedIn;

    const redirectToLogin = () => {
        // alert the user
        alert('You must be logged in. Redirecting to login page');
        // redirect to login replacing the url on the browser history
        navigate('/login', {replace: true});
    }

    return (
        <RedirigibleRoute
        redirectionCondition={() => doesRedirect}
        redirectionFunction={redirectToLogin}
        >
        {props.children}
        </RedirigibleRoute>
    );
};

export default ProtectedRoute;
