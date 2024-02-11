import React from 'react';
import './weatherCss.css';
import Image from "next/image";
export const InterfaceWeather = () => {
    return (
        <div>
            <div className="rectangle_weather">
                <div className="day_text">
                    Tue
                </div>
                <div className="icon">
                    <Image src="/iconWeather.svg" alt="Vercel Logo" className="dark:invert" width={94} height={84}/>
                </div>
                <div className="temperatureBody">
                    16°
                </div>
            </div>
        </div>
    );
};