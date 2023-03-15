import { useState } from "react";
import { timeToSecond } from "../../common/utils/date";
import Button from "../Button";
import { ITask } from "../types/task";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"

interface Props {
    selected: ITask | undefined
}

export default function Stopwatch({ selected }: Props) {
    const [ time, setTime] = useState<number>();
    if(selected?.time) {
        setTime(timeToSecond(selected.time))
    }
    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Select a card and start the stopwatch</p>
            Time: {time}
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button 
                text="start"
            />
        </div>
    )
}
