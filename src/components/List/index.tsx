
import { ITask } from "../types/task";
import Item from "./Item";
import style from './List.module.scss'

export function List( { tasks }: { tasks: ITask[]}) {
    
    return (
        <aside className={style.taskList}>
           <h2> Day's study </h2>
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

