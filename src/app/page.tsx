import {Main} from "../components/Main";
import React from "react";
import localFont  from "next/font/local"; //добавляю шрифт

const Satoshi = localFont({ src: [{
        path: '../../src/Fonts/Satoshi-Medium.ttf',
        weight: '500'

    },
        {
            path: '../../src/Fonts/Satoshi-Bold.ttf',
            weight: '700'
        }
    ] });

export default function Home() {
  return (
    <div className={Satoshi.className}>
      <Main></Main>

    </div>
  );
}
