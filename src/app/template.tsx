"use client";

import { useEffect } from "react";
import { animations } from "@/utils/animation";

export default function Template({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        animations();
    }, []);

    return (
        <div className='max-w-screen h-screen'>
            <div
                id='banner-1'
                className='min-h-full z-10 fixed top-0 left-0 w-1/4 bannerOne'
            />
            <div
                id='banner-2'
                className='min-h-full z-10 fixed top-0 left-1/4 w-1/4 bannerTwo'
            />
            <div
                id='banner-3'
                className='min-h-full z-10 fixed top-0 left-2/4 w-1/4 bannerThree'
            />
            <div
                id='banner-4'
                className='min-h-full z-10 fixed top-0 left-3/4 w-1/4 bannerFour'
            />
            {children}
        </div>
    );
}
