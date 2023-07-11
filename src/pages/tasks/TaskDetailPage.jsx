import React from 'react';
import PropTypes from 'prop-types';

// This helps parsing the path params and calling the loader function defined for the route
import { useLoaderData, useParams } from 'react-router-dom';


const TaskDetailPage = () => {


    const params = useParams();
    const task = useLoaderData();

    return (
        <div>
            <h1> Task Detail - {params.id} </h1>
            <h2> { task.name } </h2>
            <h5> { task.description } </h5>
        </div>
    );
};


TaskDetailPage.propTypes = {

};

export default TaskDetailPage;
