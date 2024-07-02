"use client";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger, Flip, MotionPathPlugin } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Slider from "@/components/Slider";
import { useGSAP } from "@gsap/react";
import TitleWork from "@/components/title";
import { Observer } from "gsap/Observer";
import WorkObserver from "@/components/workObserver";

gsap.registerPlugin(
    TextPlugin,
    ScrollTrigger,
    useGSAP,
    Flip,
    MotionPathPlugin,
    Observer
);

const Home = () => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const homeSection = useRef(null);
    const orange = useRef(null);
    const pageTitle = useRef(null);
    const [scale, setScale] = useState(false);
    const logoWrapper = useRef(null);
    const titleWork = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [animation, setAnimation] = useState({
        work: false,
    });

    useGSAP(
        () => {
            if (titleRef.current && subtitleRef.current) {
                setTimeout(() => {
                    gsap.to(titleRef.current, {
                        duration: 2,
                        text: "Nicole Struggia",
                        ease: "none",
                        stagger: 0.05,
                        onComplete: () => {
                            gsap.fromTo(
                                subtitleRef.current,
                                {
                                    opacity: 0,
                                },
                                {
                                    opacity: 1,
                                    duration: 2,
                                }
                            );
                        },
                    });

                    gsap.fromTo(
                        orange.current,
                        {
                            yPercent: -100,
                            xPercent: -100,
                            opacity: 0,
                        },
                        {
                            opacity: 1,
                            xPercent: 0,
                            duration: 3,
                            ease: "Power1.easeInOut",
                            stagger: 0.2,
                            onComplete: () => {
                                setScale(true);
                            },
                        }
                    );

                    gsap.to(
                        subtitleRef.current,

                        {
                            color: "#dfd8c8",
                            duration: 3,
                        }
                    );
                }, 2000);
            }
        },
        { scope: titleRef }
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: logoWrapper.current,
                start: "top top",
                onEnter: () => {
                    if (windowWidth > 1000) {
                        Flip.fit(titleRef.current, logoWrapper.current, {
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
                        Flip.fit(titleRef.current, logoWrapper.current, {
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
        },
        { scope: titleRef }
    );

    useGSAP(
        () => {
            gsap.fromTo(
                ".title__work",
                { opacity: 0, xPercent: -150 },
                {
                    opacity: 1,
                    xPercent: 0,
                    scale: 1.3,
                    duration: 0.4,
                    stagger: 0.2,
                    onComplete: () => {
                        gsap.to(".title__work", {
                            yPercent: -5,
                            duration: 0.3,
                            stagger: 0.05,
                        });
                    },
                    scrollTrigger: {
                        trigger: pageTitle.current,
                        start: "top 75%",
                    },
                }
            );
        },
        { scope: pageTitle }
    );

    const previous = () => {
        console.log("hola soy previous");
    };

    const next = () => {
        console.log("hola soy next");
    };

    Observer.create({
        target: window,
        type: "wheel, scroll",
        onUp: () => previous(),
        onDown: () => next(),
    });

    return (
        <>
            <section ref={homeSection} className='homeSection'>
                <div ref={logoWrapper} className='helperWrapper'>
                    <span className='helper'></span>
                </div>
                <div className='homeContainer'>
                    <h1 ref={titleRef} className='split b-title'>
                        HELLO!
                    </h1>
                    <p
                        ref={subtitleRef}
                        className='opacity-0 subtitle text-2xl flex'
                    >
                        Fullstack Developer
                    </p>
                </div>
            </section>
            <div ref={orange} className='orange'>
                <Slider scale={scale} className={"right"} />
                <Slider scale={scale} className={"left"} />
                {windowWidth < 1000 && (
                    <Slider scale={scale} className={"right"} />
                )}
            </div>
            <div ref={pageTitle} className='title__work_container'>
                <TitleWork titleWork={titleWork} />
            </div>
            <WorkObserver />
        </>
    );
};

export default Home;
