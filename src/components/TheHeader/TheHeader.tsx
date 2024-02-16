import React, {FC} from 'react';
import './TheHeaderCss.css';
import {format} from 'date-fns';
import Image from "next/image";


export const TheHeader = () => {

    return (
        <div>
            <div className="Month_Year">
                {format(new Date(), 'MMMM yyyy')}
            </div>
            <div className="Day_Data">
                {format(new Date(), 'EEEE, dd MMM yyyy')}
            </div>
            <input className="rectangle_search" placeholder={"Search City..."}/>
            <div className="icon_search">
                <Image src="/iconSearch.svg" alt="Vercel Logo" className="search" width={24} height={24}/>
            </div>
            <div className="line_header">
                <Image src="/lineHeadFoot.svg" alt="Vercel Logo" className="line" width={1317} height={2}/>
            </div>
        </div>
    );
};