import React from "react";
import styles from "./Todos.module.scss"

const Todos = ({id, title, url}) => {
    return (
        <div className={styles.list}>
            <div className={styles.id}>{id}</div>
            <div className={styles.title}>{title}</div>
            <img className={styles.img} src={url} alt=""/> 
        </div>
    )
}

export default Todos