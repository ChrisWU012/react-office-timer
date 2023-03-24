//library
import React, { useState, useEffect } from 'react'
import { Button } from 'react-daisyui'

//component
import InputModal from '../components/InputModal'
import Quotes from '../components/Quotes'
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

    const [data, setData] = useState()
    useEffect(() => { console.log("input data:", data) }, [data])

    useEffect(() => {
        if (startTime && endTime) {
            const cur_time = new Date(), curr_hour = cur_time.getHours(), curr_min = cur_time.getMinutes(), curr_sec = cur_time.getSeconds(), arr1 = startTime.split(':'), arr2 = endTime.split(':');

            const difference = (arr2[0] - curr_hour) * 3600 + (arr2[1] - curr_min) * 60 + (0 - curr_sec);

            const diff_in_HHMMSS = new Date(difference * 1000).toISOString().slice(11, 19), diff_arr = diff_in_HHMMSS.split(':');

            setCurrentTime(`${curr_hour}:${curr_min}:${curr_sec}`);

            setHours(diff_arr[0]);
            setMins(diff_arr[1]);
            setSecs(diff_arr[2]);

            setShowTimer(true);
            setShowInput(!showInput);

            if (salary) { setShowMoney(true) }
        }
    }, [startTime, endTime])

    return (
        <div>
            {/* todo: add themes */}
            {/* <NestedThemes /> */}
            <Button className='m-1' color={'accent'} onClick={() => setShowInput(!showInput)}>點擊開始</Button>

            <Quotes />

            {showInput ? <InputModal close={() => setShowInput(false)} getData={setData} /> : null}
        </div>
    )
}

export default Home