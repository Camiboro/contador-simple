import React, { useState, useEffect } from "react";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds + 1);
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function formatTime(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const remainingSeconds = totalSeconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    return (
        <div className="full-screen">
            <div className="clock">
                <i className="fa-solid fa-clock icon"></i>
                {currentTime.getHours().toString().padStart(2, '0')}:{currentTime.getMinutes().toString().padStart(2, '0')}:{currentTime.getSeconds().toString().padStart(2, '0')}
            </div>
            <div className="timer">
                {formatTime(seconds)}
            </div>
        </div>
    );
};

export default Home;
