import gsap from "gsap";

export const animateTitleWork = (
    selector: string,
    triggerRef: React.RefObject<HTMLElement>
) => {
    gsap.fromTo(
        selector,
        {
            opacity: 0,
            xPercent: -150,
            yPercent: selector === ".title__project" ? -5 : 18,
        },
        {
            opacity: 1,
            xPercent: 0,
            scale: 1.3,
            duration: 0.4,
            stagger: 0.2,
            onComplete: () => {
                gsap.to(selector, {
                    yPercent: selector === ".title__project" ? 0 : 12,
                    duration: 0.3,
                    stagger: 0.05,
                    onComplete: () => {
                        gsap.to(selector, {
                            opacity: 1,
                            duration: 3,
                            ease: "power3.inOut",
                            scrollTrigger: {
                                trigger: triggerRef.current,
                                start: "top 75%",
                                end: "+=500",
                                scrub: true,
                            },
                        });

                        gsap.to(selector, {
                            opacity: 0,
                            duration: 4,
                            ease: "power3.inOut",
                            scrollTrigger: {
                                trigger: triggerRef.current,
                                start:
                                    selector === ".title__project"
                                        ? "top 25%"
                                        : "top 10%",
                                end: "+=100",
                                scrub: true,
                            },
                        });
                    },
                });
            },
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top 75%",
            },
        }
    );
};
