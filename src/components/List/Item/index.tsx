import { ITask } from '../../types/task'
import style from './Item.module.scss'

interface Props extends ITask {
    selectedTask: (taskSelected: ITask) => void
}

export default function Item({task, time, selected, completed, id, selectedTask}: Props) {
    return (
        <li className={`${style.item} ${selected ? style.itemSelected : ''}`} onClick={() => selectedTask({
            task,
            time,
            selected,
            completed,
            id,
        })}>
            <h3> {task} </h3>
            <span> {time} </span>
        </li>
    )
}