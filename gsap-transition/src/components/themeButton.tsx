"use client";

import { TbSunFilled, TbMoonFilled } from "react-icons/tb";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { changeTheme } from "@/redux/features/themeSlice";
import { useEffect } from "react";

const ThemeButton = () => {
    const theme = useAppSelector((state) => state.themeReducer.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        const body = document.querySelector("body");
        body?.setAttribute("data-theme", theme ? "dark" : "light");
    }, [theme]);

    console.log(theme);

    return (
        <button
            className='themeButton'
            onClick={() => {
                dispatch(changeTheme());
            }}
        >
            <div className='themeButton_indicator'>
                <div className='themeButton_container'>
                    {theme ? (
                        <TbMoonFilled className='themeButton_icon' />
                    ) : (
                        <TbSunFilled className='themeButton_icon' />
                    )}
                </div>
            </div>
        </button>
    );
};

export default ThemeButton;
