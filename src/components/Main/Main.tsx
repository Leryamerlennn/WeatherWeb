import React from 'react';
import {InterfaceWeather} from "./weatherBox";
import "./mainCss.css"

export const Main = () => {
    return (
        <div>
            <div className="title">Weather to the next 7 days</div>
            <div className="weather_menu">
                <InterfaceWeather></InterfaceWeather>
            </div>
            <div className="line_body">
                <svg xmlns="http://www.w3.org/2000/svg" width="956" height="2" viewBox="0 0 956 2" fill="none">
                    <path d="M0 1.12415H956" stroke="#D8D8D8"/>
                </svg>
            </div>
        </div>
    );
};