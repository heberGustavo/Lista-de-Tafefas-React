import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleChangeStatusTask, handleDeleteTask}) => {
    return (
        <>
            {tasks.map((task) => (
                <Task 
                    key={task.id}
                    task={task} 
                    handleChangeStatusTask={handleChangeStatusTask}
                    handleDeleteTask={handleDeleteTask}></Task>
            ))}
        </>
    )
}

export default Tasks;