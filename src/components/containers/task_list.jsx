import React, {useState, useEffect} from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

// Importamos la hoja de estilos task.scss
import '../../styles/task.css';
import TaskForm from '../pure/forms/taskForm';

const TaskListComponent = () => {

    const defaultTask1 = new Task('Example 1', 'Description 1', true, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example 2', 'Description 2', false, LEVELS.PRIORITY);
    const defaultTask3 = new Task('Example 3', 'Description 3', false, LEVELS.BLOCKING);

    // Estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified')
        setLoading(false);
        return () => {
            console.log('TaskList is going to unmount...')
        };
    }, [tasks]);


    function completeTask(task){
        console.log('Complete this task: ' + task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];

        tempTasks[index].completed = !tempTasks[index].completed;
        // we update the state of the component and it will re-render the 
        // view and redo the iteration in order to show the updated task
        setTasks(tempTasks);
    }

    function deleteTask(task){
        console.log('Delete this task: ' + task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.splice(index, 1);
        setTasks(tempTasks);
    }

    function addTask(task){
        console.log('Add this task: ' + task);
        const index = tasks.indexOf(task);
        const tempTasks = [...tasks];
        tempTasks.push(task);
        setTasks(tempTasks);
    }

    return (
        <div className='col-12'>
        <div className='card'>
        {/* Card header */}
            <div className='card-header p-3'>
                <h5>Your Tasks:</h5>
            </div>
            {/* Card Body */}
            <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
            <table>
                <thead>
                <tr>
                    <th scope='col'>
                        Title
                    </th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Priority</th>
                    <th scope='col'>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {tasks.map((task_, index) => {
                        return (
                        <TaskComponent 
                            task={task_} 
                            key={index} 
                            complete={completeTask}
                            remove={deleteTask}
                            >
                        </TaskComponent>
                    )
                    })}
                </tbody>
            </table>
            </div>
            
        </div>
        {/* TODO: pass a callback function to add a task */}
        <TaskForm add={addTask}></TaskForm>
        </div>
    );
};



export default TaskListComponent;
