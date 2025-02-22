"use client";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger, Flip, MotionPathPlugin } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Slider from "@/components/Slider";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import WorkDescription from "@/components/WorkDescription";
import { projectsData, ProjectsData } from "@/constants/projects";
import TitleWork from "@/components/Title";
import WorkLinks from "@/components/WorkLinks";
import { animateTitleWork } from "@/utils/animatedTitle";

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
    const titleProject = useRef(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);
    const projectTitle = useRef(null);
    const projectSection = useRef(null);
    const workSection = useRef(null);
    const [projectHover, setProjectHover] = useState<Partial<ProjectsData>>(
        projectsData[0]
    );

    const handleProject = (project: ProjectsData) => {
        setProjectHover(project);
    };

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
            setWindowHeight(window.innerHeight);
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
            animateTitleWork(".title__work", pageTitle);
        },
        { scope: pageTitle }
    );

    useGSAP(
        () => {
            animateTitleWork(".title__project", projectTitle);
        },
        { scope: projectTitle }
    );

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: workSection.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".work__right",
            });
        },
        { scope: workSection }
    );

    useGSAP(
        () => {
            ScrollTrigger.create({
                trigger: projectSection.current,
                start: "top top",
                end: "bottom bottom",
                pin: ".title__project",
            });
        },
        { scope: projectSection }
    );

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
            <section ref={orange} className='orange'>
                <Slider scale={scale} className={"right"} />
                <Slider scale={scale} className={"left"} />
                {windowWidth < 1000 && (
                    <Slider scale={scale} className={"right"} />
                )}
            </section>
            <section ref={pageTitle} className='title__work_container'>
                <TitleWork
                    titleWork={titleWork}
                    title={["w", "o", "r", "k"]}
                    className={"title__work"}
                />
            </section>
            <section ref={workSection} className='work_container_wrapper'>
                <WorkDescription projectHover={projectHover} />
                <WorkLinks onHover={handleProject} />
            </section>
            <span className='space'></span>
            <section
                ref={projectTitle}
                className='title__project_container mt-5'
            >
                <TitleWork
                    titleWork={titleProject}
                    title={["p", "r", "o", "j", "e", "c", "t", "s"]}
                    className={"title__project"}
                />
            </section>
            <section
                ref={projectSection}
                className='work_container_wrapper wrap'
            >
                <WorkDescription projectHover={projectHover} />
                <WorkLinks onHover={handleProject} />
            </section>
        </>
    );
};

export default Home;
