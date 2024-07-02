import React from "react";

interface TitleProps {
    titleWork: React.RefObject<HTMLDivElement>;
}

const TitleWork = ({ titleWork }: TitleProps) => {
    return (
        <>
            <h2 ref={titleWork} className='title__work'>
                W
            </h2>
            <h2 ref={titleWork} className='title__work'>
                o
            </h2>
            <h2 ref={titleWork} className='title__work'>
                r
            </h2>
            <h2 ref={titleWork} className='title__work'>
                k
            </h2>
        </>
    );
};

export default TitleWork;
