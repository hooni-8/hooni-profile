import React from 'react';

import '@styles/Home.scss'

import Section_1 from "@pages/section/Section_1";
import Section_2 from "@pages/section/Section_2";
import Section_3 from "@pages/section/Section_3";
import Section_4 from "@pages/section/Section_4";
import Section_5 from "@pages/section/Section_5";

export default function Home() {
    return (
        <>
            <Section_1 />
            <Section_2 />
            <Section_3 />
            <Section_4 />
            <Section_5 />
        </>
    );
}