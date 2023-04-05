import React, { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import { Countdown } from "react-daisyui";

//props: endTime, currentTime (HH:MM:SS)
function CountdownTimer(props) {
    var [hh, mm, ss] = getCurrentTime()
    const [totalSeconds, setTotalSeconds] = useState(0);

    const [hours, setHours] = useState(props.hours - hh);
    const [minutes, setMinutes] = useState(props.mins - mm);
    const [seconds, setSeconds] = useState(props.secs - ss);
    const [showConfetti, setShowConfetti] = useState(false)

    useEffect(() => {
        var total_seconds = (props.hours - hh) * 60 * 60 + (props.mins - mm) * 60 + (props.secs - ss)
        setTotalSeconds(total_seconds);
        // setHours
    }, []);

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            console.log("totalSeconds: ", totalSeconds)
            if (totalSeconds > 0) {
                setTotalSeconds(totalSeconds - 1);
                const cur_time = new Date()
                var curr_hour = cur_time.getHours()
                var curr_min = cur_time.getMinutes()
                var curr_sec = cur_time.getSeconds()

                let newHours = props.hours - curr_hour;
                let newMinutes = props.mins - curr_min;
                let newSeconds = props.secs - curr_sec;

                if (newSeconds < 0 && totalSeconds > 1) {
                    newSeconds += 60;
                    newMinutes -= 1;
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

    function getCurrentTime() {
        const cur_time = new Date()
        var curr_hour = cur_time.getHours()
        var curr_min = cur_time.getMinutes()
        var curr_sec = cur_time.getSeconds()
        return [curr_hour, curr_min, curr_sec]
    }

    return (
        <>
            <div className="label-text mt-8 text-xl">距離放工時間仲有：</div>
            <div className="m-24">
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
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={true}
                numberOfPieces={500}
                tweenDuration={2000}
            /> : null}
        </>

    );
}

export default CountdownTimer;