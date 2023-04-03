import React, { useState, useEffect } from "react";
import Confetti from 'react-confetti';
import { Countdown } from "react-daisyui";

//props: endTime, currentTime (HH:MM:SS)
function CountdownTimer(props) {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [hours, setHours] = useState(props.hours);
    const [minutes, setMinutes] = useState(props.mins);
    const [seconds, setSeconds] = useState(props.secs);
    const [showConfetti, setShowConfetti] = useState(false)

    useEffect(() => {
        setTotalSeconds(hours * 60 * 60 + minutes * 60 + seconds);
    }, []);

    useEffect(() => { console.log("totalSeconds: ", totalSeconds) }, [totalSeconds])

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            if (totalSeconds > 0) {
                setTotalSeconds(totalSeconds - 1);
                let newHours = hours;
                let newMinutes = minutes;
                let newSeconds = seconds - 1;

                if (newSeconds < 0 && totalSeconds > 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }

                if (newMinutes < 0 && newHours > 0) {
                    newMinutes = 59;
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
    }, [totalSeconds, hours, minutes, seconds]);

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