import { React, useState } from 'react';
import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import db from './db.json'
function App() {

  const [taskList, setTaskList] = useState(db)

  const addTask = (taskHeader, taskDescription, taskDate, taskFile) => {
    setTaskList((prevstate) => {
      return [...prevstate, { header: taskHeader, description: taskDescription, id: Math.random().toString(), date: taskDate, file: taskFile }]
    })
  }

  return (

    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.form}>
          <AddTask onTaskList={addTask} />
        </div>
        <div className={styles.task}>
          <TaskList tasks={taskList} sets={setTaskList} className={styles.task} />
        </div>
        <div className={styles.task}>12343</div> 
      </div>
    </div>
  );
}

export default App;
