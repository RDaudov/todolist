import {
  React,
  useState,
  useEffect
} from 'react';
import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import db from './db.json';
import {query, collection,onSnapshot} from "./firebase";

function App() {

  const [taskList, setTaskList] = useState()

  useEffect(() => {
    console.log('useeffect');
    const q = query(collection(db, 'todos'))
    const unsubcribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = []
      QuerySnapshot.forEach((doc) => {
        todosArr.push({
          ...doc.data(),
          id: doc.id
        })
      });
      setTaskList(todosArr)
    })
    return () => unsubcribe()
  }, [])

  const addTask = (taskHeader, taskDescription, taskDate, taskFile) => {
    setTaskList((prevstate) => {
      return [...prevstate, {
        header: taskHeader,
        description: taskDescription,
        id: Math.random().toString(),
        date: taskDate,
        file: taskFile
      }]
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