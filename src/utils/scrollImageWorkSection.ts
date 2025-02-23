import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export const scrollTriggerWorkSection = (
    selectorRef: React.RefObject<HTMLElement>
) => {
    ScrollTrigger.create({
        trigger: selectorRef.current,
        start: "top top",
    });
};
