import React from 'react';
import {InterfaceWeather} from "./weatherBox";

export const Main = () => {
    return (
        <div>
            <div className="title">Weather to the next 7 days</div>
            <div className="weather_menu">
                <InterfaceWeather></InterfaceWeather>
            </div>
        </div>
    );
};