import React, { useState, useEffect } from "react";

//props: endTime, currentTime (HH:MM:SS)
function Countdown(props) {
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [hours, setHours] = useState(props.hours);
    const [minutes, setMinutes] = useState(props.minutes);
    const [seconds, setSeconds] = useState(props.seconds);

    useEffect(() => {
        setTotalSeconds(hours * 60 * 60 + minutes * 60 + seconds);
    }, []);

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
                clearInterval(countdownInterval);
            }
        }, 1000);
        return () => clearInterval(countdownInterval);
    }, [totalSeconds, hours, minutes, seconds]);

    return (
        <>
            <div>你仲有：</div>
            <div className="flex gap-5 ">

                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": `${hours}` }}></span>
                    </span>
                    hours
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": `${minutes}` }}></span>
                    </span>
                    min
                </div>
                <div>
                    <span className="countdown font-mono text-4xl">
                        <span style={{ "--value": `${seconds}` }}></span>
                    </span>
                    sec
                </div>


            </div>
            <div ><h1>目標：{props.endTime}</h1></div>
        </>

    );
}

export default Countdown;