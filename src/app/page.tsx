"use client";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import Slider from "@/components/Slider";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";
import WorkDescription from "@/components/ProjectDescription";
import TitleWork from "@/components/Title";
import WorkLinks from "@/components/ProjectLinks";
import { animateTitleWork } from "@/utils/animatedTitle";
import { scrollTriggerAnimation } from "@/utils/scrolltrigger";
import { AnimatedTitleIntro } from "@/utils/animated TitleIntro";
import { scrollTriggerWorkSection } from "@/utils/scrollImageWorkSection";
import Image from "next/image";
import { projectsData, ProjectsData } from "@/constants/projects";
import ProjectDescription from "@/components/ProjectDescription";
import ProjectLinks from "@/components/ProjectLinks";
import WorkSection from "@/components/WorkSection";

gsap.registerPlugin(
    TextPlugin,
    ScrollTrigger,
    useGSAP,
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
            AnimatedTitleIntro(titleRef, subtitleRef, orange, setScale);
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
            scrollTriggerAnimation(
                windowWidth,
                logoWrapper,
                titleRef,
                subtitleRef
            );
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
            scrollTriggerWorkSection(workSection);
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
                <WorkSection />
            </section>
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
                <ProjectDescription projectHover={projectHover} />
                <ProjectLinks onHover={handleProject} />
            </section>
        </>
    );
};

export default Home;
