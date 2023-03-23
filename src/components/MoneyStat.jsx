import React, { useEffect, useState } from 'react'
import animateValue from '../hooks/AnimNumber'

function MoneyStat(props) {
    //props: salary, start time, end time, current time
    const [total, setTotal] = useState()

    const [progress, setProgress] = useState(0)
    const [earned, setEarned] = useState(0)
    const [currentTime, setCurrentTime] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [salary,] = useState(props.salary)

    //number animation
    const [animNum, setAnimNum] = useState(0)

    useEffect(() => {
        const [hoursStart, minutesStart] = props.startTime.split(':');
        const startTime = (Number(hoursStart) * 3600) + (Number(minutesStart) * 60);
        setStartTime(startTime);

        const time = new Date();
        const currTime = time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()
        setCurrentTime(currTime)

        const [hoursEnd, minutesEnd] = props.endTime.split(':');
        const endTime = (Number(hoursEnd) * 3600) + (Number(minutesEnd) * 60);
        setEndTime(endTime);

        //number animation
        animateValue(setAnimNum, 0, (salary / 22) * (currTime - startTime) / (endTime - startTime), 500)
        setTimeout(() => {
            animateValue(
                setAnimNum, (salary / 22) * (currTime - startTime) / (endTime - startTime), (salary / 22), (endTime - currTime) * 1000
            )
        }, 500);

        setTotal(endTime - startTime);
    }, []);

    useEffect(() => {
        if (currentTime) {
            const curr = (currentTime - startTime) * 100 / total;
            setProgress(curr);

            const earned = curr / 100 * salary / 22;
            setEarned(earned.toFixed(2));

            const getCurrentTime = setInterval(() => {
                var time = new Date();
                var _curr = time.getHours() * 3600 + time.getMinutes() * 60 + time.getSeconds()
                if (_curr >= startTime && endTime >= _curr) {
                    setCurrentTime(_curr)
                } else {
                    clearInterval(getCurrentTime)
                }
            }, 1000)
        }
    }, [currentTime]);

    return (
        <div>
            <div className="stats shadow">

                <div className="stat place-items-center">
                    <div className="stat-title">你今日已經搵咗：</div>
                    <div className="stat-value text-primary-focus">$ {animNum}</div>
                </div>

                <div className="stat place-items-center">
                    <div className="stat-title">每日搵：</div>
                    <div className="stat-value">$ {(Math.round(salary / 22 * 100) / 100).toFixed(2)}</div>
                    <div className="stat-desc">以每月工作22天計算</div>
                </div>

            </div>
        </div>
    )
}

export default MoneyStat