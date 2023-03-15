import style from "./Clock.module.scss"

interface Props {
    time: number | undefined
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60)
    const second = time % 60
    const [minutesDozens, minutesUnity] = String(minutes).padStart(2, '0')
    const [secondDozens, secondUnity] = String(second).padStart(2, '0')
    return (
        <>
            <span className={style.clockNumber}>{minutesDozens}</span>
            <span className={style.clockNumber}>{minutesUnity}</span>
            <span className={style.divisionClock}>:</span>
            <span className={style.clockNumber}>{secondDozens}</span>
            <span className={style.clockNumber}>{secondUnity}</span>
        </>
    )
}