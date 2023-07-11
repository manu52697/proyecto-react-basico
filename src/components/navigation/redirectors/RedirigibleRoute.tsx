import React, { useEffect} from 'react';
// import PropTypes from 'prop-types';

type RedirigibleProps = {
    redirectionFunction(): void,
    redirectionCondition(): boolean,
    children: React.ReactNode,
}


const RedirigibleRoute: React.FunctionComponent<RedirigibleProps> = ({ redirectionFunction, redirectionCondition , children}) => {

    useEffect(() => {
        // If the redirection condition is true, execute the redirection function, otherwise do nothing
        redirectionCondition() ? redirectionFunction() : null ;
    }, []);

    return (
        <>
            {/* 
            This only renders after useEffect is done
            If the user is redirected inside the hook, 
            the component will not render
              */}
            { children }
        </>
    );
};


// RedirigibleRoute.propTypes = {
//     redirectionFunction: PropTypes.func.isRequired,
//     redirectionCondition: PropTypes.func.isRequired,
//     children: PropTypes.any.isRequired,
// };

export default RedirigibleRoute;

