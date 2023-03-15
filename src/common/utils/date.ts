export function timeToSecond(time: string) {
    const [hour = '0', min = '0', second] = time.split(':')

    const hoursinsecond = Number(hour) * 3600
    const minInSecond = Number(min) * 60
    return hoursinsecond + minInSecond + Number(second)
}