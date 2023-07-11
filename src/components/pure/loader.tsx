import React from 'react';

const Loader: React.FunctionComponent  = () => {
    return (
        <div className="spinner-border text-secondary" role="status">
            <span className="sr-only visually-hidden">Loading...</span>
        </div>
    );
};


export default Loader;
