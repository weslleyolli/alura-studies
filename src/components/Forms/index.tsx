import React, { useState } from "react";
import Button from "../Button";
import { ITask } from "../types/task";
import style from './Forms.module.scss'
import { v4 as uuidv4 } from 'uuid'
import { Interface } from "readline";

interface Props {
    setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}


function Forms( {  setTasks  }:Props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [task, setTask] = useState("");
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [time, setTime] = useState("00:00")
    function saveTask(event: React.FormEvent) {
        event.preventDefault()
        setTasks(tasksOld =>
            [
                ...tasksOld,
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setTask("");
        setTime("00:00")
    }
    return (
        <form className={style.newTask} onSubmit={saveTask}>
            <div className={style.inputContainer}>
                <label htmlFor="task">
                    Add a new study
                </label>
                <input
                    type="text"
                    name="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    id="task"
                    placeholder="What you want study?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="time">
                    Time
                </label>
                <input
                    type="time"
                    step='1'
                    name="time"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                />

            </div>
            <Button
                type="submit"
                text='Add'
            />

        </form>
    )
}

export default Forms