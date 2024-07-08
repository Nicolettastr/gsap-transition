import Link from "next/link";

const WorkLinks = () => {
    const projects = [
        {
            name: "Donair",
            link: "https://donair.es/",
            description:
                "Developed an informational website for Donair using React. Added animations for a dynamic user experience. Deployed on Hostinger for reliable performance.",
            photo: "",
        },
        {
            name: "Portfolio 2023",
            link: "https://nicolestruggia.vercel.app/",
            description:
                "Designed and developed my personal portfolio using a modern stack of technologies. The frontend is built with HTML, CSS, JavaScript, React, and Next.js for optimized performance. This project showcases my skills, projects, and experiences",
            photo: "",
        },
        {
            name: "Netflix",
            link: "https://netflix-lovat-rho.vercel.app/",
            description:
                "Developed a Netflix clone with a frontend stack including HTML, CSS, JavaScript, React, and Redux for state management. Integrated Firebase for backend services and user authentication. Implemented Stripe APIs for secure payment processing, providing a seamless user experience.",
            photo: "",
        },
        {
            name: "3D Solar system",
            link: "https://solar-system-chi-ochre.vercel.app/",
            description:
                "Developed a 3D solar system visualization using Three.js, a JavaScript library for WebGL. This project accurately models celestial bodies with realistic textures and orbital movements.",
            photo: "",
        },
        {
            name: "Pet house",
            link: "https://sample-service-name-f7fr.onrender.com/",
            description:
                "A web application designed during my bootcamp as a comprehensive platform for booking pet-friendly accommodations and services. Utilizing HTML, CSS, JavaScript, React, and Flux on the frontend, the site offers a seamless user experience with interactive features. Python and Flask power the backend, integrating with MySQL for secure and efficient data management. The project's user interface and visual design were crafted using Figma and Canva.",
            photo: "",
        },
        {
            name: "Airbnb",
            link: "https://myairbclone.vercel.app/",
            description:
                "Developed a clone of Airbnb leveraging modern web technologies. The frontend stack includes HTML, CSS, JavaScript, React, Next.js for server-side rendering, TypeScript for enhanced code quality, and Tailwind CSS for rapid UI development. On the backend, Prisma is used for database management and MongoDB for storing and querying data efficiently",
            photo: "",
        },
        {
            name: "Epic journey",
            link: "https://javascript-game-project.vercel.app/",
            description:
                "Epic Journey is an interactive game developed using JavaScript for logic and game mechanics, and HTML/CSS for presentation and styling",
            photo: "",
        },
    ];

    return (
        <>
            <div className='spacer'></div>
            <section className='work'>
                <div className='work__left'>
                    <div className='work__text'>
                        {projects.map((option, index) => (
                            <div key={option.name} className='work__info'>
                                <div className='work__left_bl'>
                                    <span className='work__num'>
                                        {index + 1}
                                    </span>
                                    <h2 className='title'>{option.name}</h2>
                                    <Link href={option.name} target='_blank'>
                                        View more
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='work__right'>
                    <div className='work__right_bl'>
                        <div className='work__photo'>
                            {projects.map((project, index) => (
                                <div
                                    key={project.name}
                                    className='work__photo-item'
                                    title={String(index + 1)}
                                >
                                    <img
                                        src={project.photo}
                                        alt={project.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className='spacer'></div>
        </>
    );
};

export default WorkLinks;
