import React from 'react';
import {InterfaceWeather} from "./weatherBox";
import "./mainCss.css"
import Image from "next/image";

export const Main = () => {
    return (
        <div>
            <div className="title">Weather to the next 7 days</div>
            <div className="weather_menu">
                <InterfaceWeather></InterfaceWeather>
            </div>
            <div className="line_body">
                <Image src="/lineHeadFoot.svg" alt="Vercel Logo" className="line" width={1317} height={2}/>
            </div>
        </div>
    );
};