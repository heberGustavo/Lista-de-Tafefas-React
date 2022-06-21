import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button';

import './TaskDetails.css'

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.push('/');
        document.location.reload();
    }

    return ( 
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae ipsam incidunt ipsum, tenetur iure minus, earum modi, deleniti atque a distinctio sed illum voluptatem nulla voluptates quaerat necessitatibus quos tempora?</p>
            </div>
        </>
     
     );
}
 
export default TaskDetails