import { useGSAP } from "@gsap/react";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useAppSelector } from "@/redux/hooks";

interface SliderProps {
    className: string;
    scale: boolean;
}

gsap.registerPlugin(useGSAP);

const Slider: React.FC<SliderProps> = ({ className, scale }) => {
    const theme = useAppSelector((state) => state.themeReducer.value);

    console.log(theme);

    const [images, setImages] = useState([
        "./html.svg",
        "./css.svg",
        "./js.svg",
        "./react.svg",
        "./next.svg",
        "./c.svg",
        "./cdark.svg",
        "./figma.svg",
        "./git.svg",
        "./mysql.svg",
        "./net.svg",
        "./node.svg",
        "./postman.svg",
        "./python.svg",
        "./redux.svg",
        "./sql.svg",
        "./html.svg",
        "./css.svg",
        "./js.svg",
        "./react.svg",
        "./next.svg",
        "./c.svg",
        "./figma.svg",
        "./git.svg",
        "./mysql.svg",
        "./net.svg",
        "./node.svg",
        "./postman.svg",
        "./python.svg",
        "./redux.svg",
        "./sql.svg",
    ]);

    console.log(theme);

    const filteredImages = useMemo(() => {
        if (theme) {
            return images.filter((img) => img !== "./c.svg");
        } else {
            return images.filter((img) => img !== "./cdark.svg");
        }
    }, [images, theme]);

    const icons = new Array(images.length).fill(null).map(() => useRef(null));

    useGSAP(() => {
        if (scale) {
            icons.forEach((iconRef) => {
                gsap.to(iconRef.current, {
                    scale: 1,
                    ease: "Power1.easeInOut",
                    duration: 5,
                    stagger: 0.2,
                });
            });
        }
    }, [scale]);

    return (
        <div className='slider'>
            <div className={`brands ${className}`}>
                {filteredImages.map((src, index) => (
                    <img
                        key={index}
                        ref={icons[index]}
                        className='brand-logo'
                        src={src}
                        alt=''
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
