import { useGSAP } from "@gsap/react";
import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { useAppSelector } from "@/redux/hooks";
import Image from "next/image";

interface SliderProps {
    className: string;
    scale: boolean;
}

gsap.registerPlugin(useGSAP);

const Slider: React.FC<SliderProps> = ({ className, scale }) => {
    const theme = useAppSelector((state) => state.themeReducer.value);
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

    // Create refs for each image
    const imageRefs = images.map(() => useRef(null));

    const filteredImages = useMemo(() => {
        if (theme) {
            return images.filter((img) => img !== "./c.svg");
        } else {
            return images.filter((img) => img !== "./cdark.svg");
        }
    }, [images, theme]);

    useGSAP(() => {
        if (scale) {
            imageRefs.forEach((ref, index) => {
                gsap.to(ref.current, {
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
                    <Image
                        key={index}
                        ref={imageRefs[index]}
                        className='brand-logo'
                        src={src}
                        alt=''
                        width={100}
                        height={100}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
