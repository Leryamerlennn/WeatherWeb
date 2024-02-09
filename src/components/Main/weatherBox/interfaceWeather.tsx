import React from 'react';
import './weatherCss.css';
export const InterfaceWeather = () => {
    return (
        <div>
            <div className="rectangle_weather">
                <div className="day_text">
                    Tue
                </div>
                <div className="icon">
                    тут должна быть иконка
                </div>
                <div className="temperature">
                    16
                </div>
            </div>
        </div>
    );
};