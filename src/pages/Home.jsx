//library
import React, { useState, useEffect } from 'react'
import { Button } from 'react-daisyui'

//component
import InputModal from '../components/InputModal'
// import Quotes from '../components/Quotes'
import CountdownTimer from '../components/CountdownTimer'
import MoneyStat from '../components/MoneyStat'
// import NestedThemes from '../components/NestedThemes'

function Home() {
    const [showInput, setShowInput] = useState(false)
    const [showTimer, setShowTimer] = useState(false)

    const [startTime, setStartTime] = useState()
    const [endTime, setEndTime] = useState()

    const [hours, setHours] = useState()
    const [mins, setMins] = useState()
    const [secs, setSecs] = useState()

    const [currentTime, setCurrentTime] = useState()

    const [salary, setSalary] = useState()
    const [showMoney, setShowMoney] = useState(false)

    const [data, setData] = useState({})
    useEffect(() => {
        if (data) {
            console.log("data", data)
            if (data.startTime) {
                setStartTime(data.startTime + ":00")
            }
            if (data.endTime) {
                setEndTime(data.endTime + ":00")
            }
            if (data.salary) {
                setSalary(data.salary)
            }
        }
    }, [data])

    useEffect(() => {
        if (startTime && endTime) {
            const cur_time = new Date()
            var curr_hour = cur_time.getHours()
            var curr_min = cur_time.getMinutes()
            var curr_sec = cur_time.getSeconds()
            var arr2 = endTime.split(':')

            const difference = (arr2[0] - curr_hour) * 3600 + (arr2[1] - curr_min) * 60 + (0 - curr_sec);

            const diff_in_HHMMSS = new Date(difference * 1000).toISOString().slice(11, 19), diff_arr = diff_in_HHMMSS.split(':');

            setCurrentTime(`${curr_hour}:${curr_min}:${curr_sec}`);

            setHours(arr2[0]);
            setMins(arr2[1]);
            setSecs(arr2[2]);

            setShowTimer(true);
            setShowInput(false);

            if (salary) { setShowMoney(true) }
        }
    }, [startTime, endTime, salary])

    return (
        <div className='inline-block align-middle'>
            {/* todo: add themes */}
            {/* <NestedThemes /> */}

            {showInput ? <InputModal close={setShowInput} getData={setData} /> : null}
            {showMoney ? <MoneyStat salary={salary} startTime={startTime} endTime={endTime} currentTime={currentTime} /> : null}
            {showTimer ? <CountdownTimer hours={hours} mins={mins} secs={secs} endTime={endTime} /> :
                <Button className='m-1' color={'accent'} onClick={() => setShowInput(!showInput)}>點擊開始</Button>}


            {/* <Quotes /> */}
        </div>
    )
}

export default Home