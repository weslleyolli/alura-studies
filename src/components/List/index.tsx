
import { ITask } from "../types/task";
import Item from "./Item";
import style from './List.module.scss'

interface Props {
    tasks: ITask[],
    selectedTask: (taskSelected: ITask) => void
}

export function List( { tasks, selectedTask }: Props) { 
    return (
        <aside className={style.taskList}>
           <h2> Day's study </h2>
            <ul>
                {tasks.map((item  => (
                    <Item 
                        selectedTask={selectedTask}
                        key={item.id}
                        {...item}
                    />
                )))}
            </ul>
        </aside >
    )
}

