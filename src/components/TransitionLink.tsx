"use client";

import { usePathname, useRouter } from "next/navigation";
import { animationsOut } from "@/utils/animation";

interface AnimationsProps {
    href: string;
    label: string;
}

const TransitionLink = ({ href, label }: AnimationsProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const handleClick = () => {
        if (pathname !== href) {
            animationsOut(href, router);
        }
    };

    return (
        <button className='text-xl navPaths' onClick={handleClick}>
            {label}
        </button>
    );
};

export default TransitionLink;
