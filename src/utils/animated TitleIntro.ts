import gsap from "gsap";

export const AnimatedTitleIntro = (
    titleRef: React.RefObject<HTMLElement>,
    subtitleRef: React.RefObject<HTMLElement>,
    orangeRef: React.RefObject<HTMLElement>,
    setScale: (param: boolean) => void
) => {
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
                orangeRef.current,
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
};
