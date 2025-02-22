import React from "react";

interface TitleProps {
    titleWork: React.RefObject<HTMLDivElement>;
    title: string[];
    className: string;
}

const TitleWork: React.FC<TitleProps> = ({ titleWork, title, className }) => {
    return (
        <>
            {title.map((letter, index) => (
                <h2 key={index} ref={titleWork} className={className}>
                    {letter}
                </h2>
            ))}
        </>
    );
};

export default TitleWork;
