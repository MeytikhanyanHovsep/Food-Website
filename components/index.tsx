'use client';
import React, {ReactNode} from 'react';
import Header from './Header/header';
import {ParallaxProvider} from 'react-scroll-parallax';

type Props = {
    children: ReactNode;
};

export default function Components({children}: Props) {
    return (
        <>
            <ParallaxProvider>
                <Header />
                {children}
            </ParallaxProvider>
        </>
    );
}
