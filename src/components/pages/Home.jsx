import React, { useState } from 'react'

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
    return (
        <div>Home</div>
    )
}

export default Home