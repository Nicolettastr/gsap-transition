import gsap from "gsap";
import React from "react";
import { ScrollTrigger, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Flip);

export const scrollTriggerAnimation = (
    windowWidth: number,
    selectorRef: React.RefObject<HTMLElement>,
    triggerRef: React.RefObject<HTMLElement>,
    subtitleRef: React.RefObject<HTMLElement>
) => {
    ScrollTrigger.create({
        trigger: selectorRef.current,
        start: "top top",
        onEnter: () => {
            if (windowWidth > 1000) {
                Flip.fit(triggerRef.current, selectorRef.current, {
                    fontSize: "2.2rem",
                    paddingLeft: "1rem",
                    paddingTop: "1rem",
                    duration: 2,
                    ease: "power1.inOut",
                    stagger: 2,
                    scrub: true,
                });
                gsap.to(subtitleRef.current, {
                    opacity: 0,
                    onComplete: () => {
                        gsap.to(subtitleRef.current, {
                            display: "none",
                        });
                    },
                });
            } else if (windowWidth < 999) {
                Flip.fit(triggerRef.current, selectorRef.current, {
                    fontSize: "2.2rem",
                    textAlign: "center",
                    paddingTop: "1rem",
                    paddingRight: "2rem",
                    duration: 2,
                    ease: "power1.inOut",
                    stagger: 2,
                    scrub: true,
                });
                gsap.to(subtitleRef.current, {
                    opacity: 0,
                    onComplete: () => {
                        gsap.to(subtitleRef.current, {
                            display: "none",
                        });
                    },
                });
            }
        },
    });
};
