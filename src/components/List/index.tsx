import React, { useState } from "react";
import Item from "./Item";
import style from './List.module.scss'

export function List() {
    const [tasks, setTask] = useState([{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Js',
        time: '01:10:00'
    }, {
        task: 'Typescript',
        time: '01:30:00'
    }])
    return (
        <aside className={style.taskList}>
           <h2 onClick={() => {
                setTask([...tasks, { task: "Estudar estado", time: "05:00:00"}])
            }}> Day's study </h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item 
                        key={index}
                        {...item}
                    />
                ))}
            </ul>
        </aside >
    )
}

