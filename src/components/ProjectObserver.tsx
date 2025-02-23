import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Section from "./ProjectSection";

interface ProjectObserverProps {
    projectContainer: React.RefObject<HTMLDivElement>;
}

const ProjectObserver = ({ projectContainer }: ProjectObserverProps) => {
    const currentIndexRef = useRef<number>(0);
    const animatingRef = useRef<boolean>(false);

    useEffect(() => {
        const sections = document.querySelectorAll(".section");
        const images = document.querySelectorAll(".background");
        const headings = document.querySelectorAll(".section-title");
        const outerWrappers = document.querySelectorAll(".wrapper-outer");
        const innerWrappers = document.querySelectorAll(".wrapper-inner");

        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index: number, direction: number) {
            const wrappedIndex = (index + sections.length) % sections.length;

            if (
                wrappedIndex === currentIndexRef.current ||
                animatingRef.current
            )
                return;
            animatingRef.current = true;

            const fromTop = direction === -1;
            const dFactor = fromTop ? -1 : 1;

            const tl = gsap.timeline({
                defaults: { duration: 1.25, ease: "power1.inOut" },
                onComplete: () => {
                    animatingRef.current = false;
                },
            });

            if (currentIndexRef.current >= 0) {
                gsap.set(sections[currentIndexRef.current], { zIndex: 0 });
                tl.to(images[currentIndexRef.current], {
                    yPercent: -15 * dFactor,
                }).set(sections[currentIndexRef.current], { autoAlpha: 0 });
            }

            gsap.set(sections[wrappedIndex], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo(
                [outerWrappers[wrappedIndex], innerWrappers[wrappedIndex]],
                { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
                { yPercent: 0 },
                0
            )
                .fromTo(
                    images[wrappedIndex],
                    { yPercent: 15 * dFactor },
                    { yPercent: 0 },
                    0
                )
                .fromTo(
                    headings[wrappedIndex],
                    {
                        autoAlpha: 0,
                        yPercent: 150 * dFactor,
                    },
                    {
                        autoAlpha: 1,
                        yPercent: 0,
                        duration: 1,
                        ease: "power2",
                        stagger: {
                            each: 0.02,
                            from: "random",
                        },
                    },
                    0.2
                );

            currentIndexRef.current = wrappedIndex;
        }

        function handleTap() {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            if (tapLength < 500 && tapLength > 0) {
                gotoSection(currentIndexRef.current + 1, 1);
            }
            lastTap = currentTime;
        }

        let lastTap = 0;
        sections.forEach((section) => {
            section.addEventListener("touchend", handleTap);
        });

        window.addEventListener("wheel", (event) => {
            if (event.deltaY < 0) {
                gotoSection(currentIndexRef.current - 1, -1);
            } else if (event.deltaY > 0) {
                gotoSection(currentIndexRef.current + 1, 1);
            }
        });
        gotoSection(0, 1);

        return () => {
            sections.forEach((section) => {
                section.removeEventListener("touchend", handleTap);
            });
            window.removeEventListener("wheel", () => {});
        };
    }, []);

    return (
        <div ref={projectContainer} className='work-container'>
            <Section
                title='Connected Souls'
                className='first'
                bgUrl='https://images.unsplash.com/photo-1494403687614-8ca3e13f154f?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2ODk5OTV8&ixlib=rb-4.0.3&q=85'
            />
            <Section
                title='Traveling'
                className='second'
                bgUrl='https://images.unsplash.com/photo-1579786695384-b75487cd0411?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTAxNjR8&ixlib=rb-4.0.3&q=85'
            />
            <Section
                title='Making Memories'
                className='third'
                bgUrl='https://images.unsplash.com/photo-1514770643069-54183731a981?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTAyODJ8&ixlib=rb-4.0.3&q=85'
            />
            <Section
                title='Real experiences'
                className='fourth'
                bgUrl='https://images.unsplash.com/photo-1503516459261-40c66117780a?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTAzNDZ8&ixlib=rb-4.0.3&q=85'
            />
            <Section
                title='A Shared Lifetime'
                className='fifth'
                bgUrl='https://images.unsplash.com/photo-1645374499341-972cc5959a27?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTg2OTA1NDd8&ixlib=rb-4.0.3&q=85'
            />
        </div>
    );
};

export default ProjectObserver;
