import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { LEVELS } from '../../../../models/levels.enum';
import { Task } from '../../../../models/task.class';

// styles
import '../../../../styles/taskform.css';

const TaskFormBase = ({add, length}) => {

    const [levelSelected, setLevelSelected] = useState(LEVELS.NORMAL);

    const nameRef = useRef('');
    const descriptionRef = useRef('');
    const levelRef = useRef(LEVELS.NORMAL);

    function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descriptionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
    }

    const priorityClassNames = (level) => {

        switch (level) {
            case LEVELS.BLOCKING:
                return 'priority-blocking';

            case LEVELS.PRIORITY:
                return 'priority-priority';
            
            // case LEVELS.NORMAL:
            //     return 'priority-normal';

            default:
                return 'priority-normal';
        }
    } 

    function onSelectLevel(){
        setLevelSelected(levelRef.current.value);
        console.log('New level selected: ' + levelSelected);
    }

    return (
        <form onSubmit={addTask} 
        className='d-flex justify-content-center align-items-center mb-4'
        >
            <div className='form-outline flex-fill'>
                <input
                ref={nameRef}
                id='inputName'
                type='text'
                className='form-control form-control-lg'
                required
                autoFocus
                placeholder='Task Name'
                />

                <input
                ref={descriptionRef}
                id='inputDescription'
                type='text'
                className='form-control form-control-lg'
                required
                placeholder='Task Description'
                />
                
                <select 
                className={'form-control form-control-lg ' + priorityClassNames(levelSelected)} 
                onInput={onSelectLevel}
                // onFocus={onSelectLevel}
                
                ref={levelRef} 
                defaultValue={LEVELS.NORMAL} 
                id='selectLevel'>
                    <option  value={LEVELS.NORMAL}>Normal</option>
                    <option  value={LEVELS.PRIORITY}>Urgent</option>
                    <option  value={LEVELS.BLOCKING}>Blocking</option>
                </select>
                <button 
                type='submit' 
                className='btn btn-success btn-lg ms-2'>
                { length > 0 ? 'Add new task' : 'Create a task' }
                </button>
            </div>
            

        </form>
    );
}

TaskFormBase.proptypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
}

export default TaskFormBase;
