import React, { useEffect, useState } from 'react'
import animateValue from '../hooks/AnimNumber'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeLowVision } from '@fortawesome/free-solid-svg-icons'
import { Stats, Button } from 'react-daisyui'

function MoneyStat(props) {
    //props: salary, startTime, endTime, currentTime
    // const [total, setTotal] = useState()

    // const [earned, setEarned] = useState(0)
    const [currentTime, setCurrentTime] = useState()
    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()
    const [salary,] = useState(props.salary)

    const [showEarnedMoney, setShowEarnedMoney] = useState(true)
    const [showMinMoney, setShowMinMoney] = useState(true)

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

        // setTotal(endTime - startTime);
    }, []);

    useEffect(() => {
        if (currentTime) {
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
        <div className='m-1'>
            <div className="stats shadow border-double border-2 border-sky-500">
                <div className="stat place-items-center">
                    <div className="stat-figure text-secondary">
                        {showEarnedMoney ?
                            <button ><FontAwesomeIcon style={{ width: "34px" }} icon={faEye} onClick={() => setShowEarnedMoney(false)} /></button>
                            : <button><FontAwesomeIcon style={{ width: "34px" }} icon={faEyeLowVision} onClick={() => setShowEarnedMoney(true)} /></button>}
                    </div>
                    <div className="stat-title">你今日已經搵咗：</div>
                    <div className="stat-value text-secondary">{showEarnedMoney ? `$ ${animNum}` : `****`}</div>
                    <div className="stat-desc">/ {showEarnedMoney ? (salary / 22).toFixed(2) : `****`}</div>
                </div>
                <div className="stat place-items-center">
                    <div className="stat-figure text-primary button">
                        {showMinMoney ?
                            <button><FontAwesomeIcon style={{ width: "34px" }} icon={faEye} onClick={() => setShowMinMoney(false)} /></button>
                            : <button> <FontAwesomeIcon style={{ width: "34px" }} icon={faEyeLowVision} onClick={() => setShowMinMoney(true)} /></button>}
                    </div>
                    <div className="stat-title">每分鐘你搵緊：</div>
                    <div className="stat-value text-primary">{showMinMoney ? `$ ` + (Math.round(salary / 22 * 100) / 100 / (endTime - startTime) * 60).toFixed(2) : `****`}</div>
                    <div className="stat-desc">以每月工作22天計算</div>
                </div>
            </div>
        </div>
    )
}

export default MoneyStat