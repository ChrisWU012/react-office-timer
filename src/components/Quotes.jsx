import React, { useState, useEffect } from "react";
import { QuoteList } from '../constants/QuotesList'
import "./Quotes.css";

function Quotes() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveIndex((activeIndex) => (activeIndex + 1) % QuoteList.length);
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="carousel w-full" style={{ width: "500px" }}>
            {QuoteList.map((quote, index) => (
                <div
                    key={index}
                    className={`carousel-item w-full text-center content-center ${index === activeIndex ? "active" : ""
                        }`}
                >
                    <div className="w-full text-center content-center ">{quote}</div>
                </div>
            ))}
        </div>
    );
}

export default Quotes