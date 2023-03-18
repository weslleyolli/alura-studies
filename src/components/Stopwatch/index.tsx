import { useEffect, useState } from "react";
import { timeToSecond } from "../../common/utils/date";
import Button from "../Button";
import { ITask } from "../types/task";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss"

interface Props {
    selected: ITask | undefined,
    closeTask: () => void
}

export default function Stopwatch({ selected, closeTask }: Props) {
    const [ time, setTime] = useState<number>();

    useEffect(() =>  {
        if(selected?.time){
            setTime(timeToSecond(selected.time))
        }
    },[selected])

    function regressive(cont: number = 0) {
        setTimeout(() => {
            if(cont > 0) {
                setTime(cont - 1)
                return regressive(cont - 1) 
            }
            closeTask()
        }, 1000)
    }

    return (
        <div className={style.stopwatch}>
            <p className={style.title}>Select a card and start the stopwatch</p>
            <div className={style.clockWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressive(time)} 
                text="start"
            />
        </div>
    )
}
