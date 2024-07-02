import { useEffect } from "react";
import Section from "./workSection";
import gsap from "gsap";

const WorkObserver = () => {
    useEffect(() => {
        let sections = document.querySelectorAll(".section"),
            lastTap = 0,
            images = document.querySelectorAll(".background"),
            headings = document.querySelectorAll(".section-title"),
            outerWrappers = document.querySelectorAll(".wrapper-outer"),
            innerWrappers = document.querySelectorAll(".wrapper-inner"),
            currentIndex = -1,
            wrap = (index: number, max: number) => (index + max) % max,
            animating: boolean;

        gsap.set(outerWrappers, { yPercent: 100 });
        gsap.set(innerWrappers, { yPercent: -100 });

        function gotoSection(index: number, direction: number) {
            index = wrap(index, sections.length);
            animating = true;

            let fromTop = direction === -1,
                dFactor = fromTop ? -1 : 1,
                tl = gsap.timeline({
                    defaults: { duration: 1.25, ease: "power1.inOut" },
                    onComplete: () => {
                        animating = false;
                    },
                });

            if (currentIndex >= 0) {
                gsap.set(sections[currentIndex], { zIndex: 0 });
                tl.to(images[currentIndex], { yPercent: -15 * dFactor }).set(
                    sections[currentIndex],
                    { autoAlpha: 0 }
                );
            }

            gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
            tl.fromTo(
                [outerWrappers[index], innerWrappers[index]],
                { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
                { yPercent: 0 },
                0
            )
                .fromTo(
                    images[index],
                    { yPercent: 15 * dFactor },
                    { yPercent: 0 },
                    0
                )
                .fromTo(
                    headings[index],
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

            currentIndex = index;
        }

        function handleTap() {
            let currentTime = new Date().getTime();
            let tapLength = currentTime - lastTap;
            if (tapLength < 500 && tapLength > 0) {
                if (!animating) {
                    gotoSection(currentIndex + 1, 1);
                }
            }
            lastTap = currentTime;
        }

        sections.forEach((section) => {
            section.addEventListener("touchend", handleTap);
        });

        window.addEventListener("wheel", (event) => {
            if (event.deltaY < 0 && !animating) {
                gotoSection(currentIndex - 1, -1);
            } else if (event.deltaY > 0 && !animating) {
                gotoSection(currentIndex + 1, 1);
            }
        });

        gotoSection(0, 1);
    }, []);
    return (
        <div className='app-container'>
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

export default WorkObserver;
