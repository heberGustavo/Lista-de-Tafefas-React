import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import "./App.css"

import Tasks from "./components/Tasks";
import AddTask from './components/AddTask'
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const getTasks = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setTasks(data)
    }

    getTasks();

  }, []);

  const handleAddTask = ((title) => {
    
    const newTask = [
        ...tasks, {
        id: uuidv4(),
        title: title,
        completed: false,
      }
    ];

    setTasks(newTask);

  });

  const handleChangeStatusTask = ((taskId) => {
      const updateTask = tasks.map((task) => {
        if(task.id === taskId) return { ...task, completed: !task.completed } 

        return task;
      });

      setTasks(updateTask);
  });

  const handleDeleteTask = ( (taskId) => {
    const updateTasks = tasks.filter(task => task.id != taskId)
    setTasks(updateTasks);
  });

  return (
    <Router>
      <div className="container">
        <Header></Header>

        <Route 
          path="/"
          exact
          render={() => (
            <>
              <AddTask handleAddTask={handleAddTask}></AddTask>
              <Tasks 
                tasks={tasks} 
                handleChangeStatusTask={handleChangeStatusTask}
                handleDeleteTask={handleDeleteTask} />
            </>
          )}
        />
        <Route path="/:taskTitle" exact component={TaskDetails}></Route>

      </div>
    </Router>
  )
}

export default App;