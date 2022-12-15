import { useState } from "react";
import styles from "./AddTask.module.scss"
import { db } from "../../firebase";
import { collection, addDoc} from "firebase/firestore";

const AddTask = (props) => {

    const [header, setHeader] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')
    // const [file, setFile] = useState('')

    const onChangeHeader = (event) => {setHeader(event.target.value)}
    const onChangeDescription = (event) => {setDescription(event.target.value)}
    const onChangeDate = (event) => {setDate(event.target.value)}

    const onSubmit = async(event) => {

        event.preventDefault()

        if (header.trim().length === 0 || description.trim().length === 0) {
            return;
        }

        props.onTaskList(header, description, date);
        await addDoc(collection(db, "todos"), {
            header,
            description,
            date
        })
     }

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <label htmlFor="header"></label>
            <input type="text" name="header" id="header" placeholder="Заголовок" onChange={onChangeHeader} />
            <label htmlFor="description"></label>
            <input type="text" name="description" id="description" placeholder="Описание" onChange={onChangeDescription} />
            <label htmlFor="date"></label>
            <input type="date"  className={styles.date} name="date" id="date" onChange={onChangeDate}/>
            <input type="file" className={styles.file} name="file" id="file"/>
            <button type="submit" className={styles.button}>Создать задачу</button>
        </form>
    );
}

export default AddTask;