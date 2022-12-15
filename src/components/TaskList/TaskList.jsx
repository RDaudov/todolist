import React from "react";
import styles from "./TaskList.module.scss"



const TaskList = props => {
    function deleteTask(id) {
        let newTaskList = [...props.tasks].filter(task => task.id!==id)
        props.sets(newTaskList)

    }
    return (
        props.tasks.map((task) => (
            <div key={task.id} className={styles.task}>
                <div className={styles.header}>
                    {task.header}
                </div>
                <div className={styles.description}>
                    {task.description}
                </div>
                <div>
                    {task.date}
                </div>
                <button onClick={()=>deleteTask(task.id)}>Удалить</button>
            </div>
        ))
    );
}

export default TaskList;