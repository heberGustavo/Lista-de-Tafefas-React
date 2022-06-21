import React from 'react';
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import './Task.css'

const Task = ({task, handleChangeStatusTask, handleDeleteTask}) => {

    const history = useHistory();

    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }

    return (
        <div 
            className='task-container' 
            style={task.completed ? {borderLeft: "6px solid chartreuse" } : {} }>
            
            <div 
                className='task-title'
                onClick={() => handleChangeStatusTask(task.id)}>
                {task.title}
            </div>

            <div className='button-container'>
                <button 
                    className='button-task' 
                    onClick={() => handleDeleteTask(task.id)}>
                    <CgClose />
                </button>
                <button 
                    className='button-details-task' 
                    onClick={handleTaskDetailsClick}>
                    <CgInfo />
                </button>
            </div>
        </div>
    )
}
 
export default Task;