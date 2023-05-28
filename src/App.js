import { React , useEffect , useState } from 'react';
import styles from "./App.module.scss";
import AddTask from "./components/AddTask/AddTask";
import TaskList from "./components/TaskList/TaskList";
import Todos from "./components/Todos/Todos";
import { db } from './firebase';
import {
  query,
  collection,
  onSnapshot,
  QuerySnapshot
} from 'firebase/firestore';

function App() {
  const [taskList, setTaskList] = useState([])
  const [todos, setTodos] = useState([])

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
  },[])

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
  console.log(todos);
  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <div className={styles.form}>
          <AddTask onTaskList={addTask} />
        </div>
        <div className={styles.task}>
          <TaskList tasks={taskList} sets={setTaskList} className={styles.task} />
        </div>
        <div>
          {
          todos.map((todo) => (
              <Todos id={todo.id} key={todo.id}  title={todo.title} url={todo.url}/>
          ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;