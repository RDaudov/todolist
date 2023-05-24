import React from "react";
import styles from "./Todos.module.scss"

const Todos = ({id, title, url}) => {
    return (
        <div className="list">
            <div className="id">{id}</div>
            <div className="title">{title}</div>
            <img src={url} alt=""/>
        </div>
    )
}

export default Todos