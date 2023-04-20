import React, { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import { Countdown } from "react-daisyui";
import useWindowSize from 'react-use/lib/useWindowSize'

import { getCurrentTime } from "../hooks/GetCurrentTime";

//props: endTime, currentTime (HH:MM:SS)
function CountdownTimer(props) {
    var [hh, mm, ss] = getCurrentTime()
    const [totalSeconds, setTotalSeconds] = useState(0);

    const [hours, setHours] = useState(props.hours - hh);
    const [minutes, setMinutes] = useState(props.mins - mm);
    const [seconds, setSeconds] = useState(props.secs - ss);
    const [showConfetti, setShowConfetti] = useState(false)
    const { width, height } = useWindowSize()

    useEffect(() => {
        var total_seconds = (props.hours - hh) * 60 * 60 + (props.mins - mm) * 60 + (props.secs - ss)
        setTotalSeconds(total_seconds);
        // setHours
    }, []);

    useEffect(() => {
        // console.log("countdownInterval", totalSeconds)
        const countdownInterval = setInterval(() => {
            if (totalSeconds > 0) {
                setTotalSeconds(totalSeconds - 1);
                const cur_time = new Date()
                var curr_hour = cur_time.getHours()
                var curr_min = cur_time.getMinutes()
                var curr_sec = cur_time.getSeconds()

                let newHours = props.hours - curr_hour;
                let newMinutes = props.mins - curr_min;
                let newSeconds = props.secs - curr_sec;

                if (newSeconds < 0 && totalSeconds >= 1 && (newHours > 0 || newMinutes > 0)) {
                    newSeconds += 60;
                    newMinutes -= 1;
                } else {
                    //call end animation
                    setShowConfetti(true)
                    clearInterval(countdownInterval);
                    return () => clearInterval(countdownInterval);
                }

                if (newMinutes < 0 && newHours > 0) {
                    newMinutes += 60;
                    newHours -= 1;
                }

                setHours(newHours);
                setMinutes(newMinutes);
                setSeconds(newSeconds);
            } else {
                //call end animation
                setShowConfetti(true)
                clearInterval(countdownInterval);
            }
        }, 1000);
        return () => clearInterval(countdownInterval);
    }, [totalSeconds]);

    return (
        <div className="w-96" style={{ marginLeft: "auto", marginRight: "auto" }}>
            <div className="label-text text-xl">距離放工時間仲有：</div>
            <div className="mt-20 mb-20">
                <Countdown className="label-text text-8xl" value={hours} />
                <span className="label-text text-7xl">:</span>
                <Countdown className="label-text text-8xl" value={minutes} />
                <span className="label-text text-7xl">:</span>
                <Countdown className="label-text text-8xl" value={seconds} />
            </div>
            <div >
                <h1 className="label-text" >今日放工時間：<span className="text-accent text-2xl">{props.endTime}</span></h1>
            </div>

            {showConfetti ? <Confetti
                width={width}
                height={height}
                recycle={true}
                numberOfPieces={500}
                tweenDuration={2000}
            /> : null}
        </div>

    );
}

export default CountdownTimer;