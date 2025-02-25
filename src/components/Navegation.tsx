"use client";
import ThemeButton from "./ThemeButton";
import TransitionLink from "./TransitionLink";
import { useAppSelector } from "@/redux/hooks";

const Navigation = () => {
    const theme = useAppSelector((state) => state.themeReducer.value);

    return (
        <nav className='w-100 p-5'>
            <div className='flex gap-5 w-full justify-around'>
                <ThemeButton />
            </div>
        </nav>
    );
};

export default Navigation;
