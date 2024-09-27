import Link from "next/link";
import one from "../../public/image1.jpeg";
import two from "../../public/2.jpg";
import three from "../../public/3.jpg";
import four from "../../public/4.jpg";
import five from "../../public/5.jpg";
import Image from "next/image";

const WorkLinks = () => {
    const projects = [
        {
            name: "Donair",
            link: "https://donair.es/",
            description:
                "Developed an informational website for Donair using React. Added animations for a dynamic user experience. Deployed on Hostinger for reliable performance.",
            photo: one,
        },
        {
            name: "Portfolio 2023",
            link: "https://nicolestruggia.vercel.app/",
            description:
                "Designed and developed my personal portfolio using a modern stack of technologies. The frontend is built with HTML, CSS, JavaScript, React, and Next.js for optimized performance. This project showcases my skills, projects, and experiences",
            photo: two,
        },
        {
            name: "Netflix",
            link: "https://netflix-lovat-rho.vercel.app/",
            description:
                "Developed a Netflix clone with a frontend stack including HTML, CSS, JavaScript, React, and Redux for state management. Integrated Firebase for backend services and user authentication. Implemented Stripe APIs for secure payment processing, providing a seamless user experience.",
            photo: three,
        },
        {
            name: "3D Solar system",
            link: "https://solar-system-chi-ochre.vercel.app/",
            description:
                "Developed a 3D solar system visualization using Three.js, a JavaScript library for WebGL. This project accurately models celestial bodies with realistic textures and orbital movements.",
            photo: four,
        },
        {
            name: "Pet house",
            link: "https://sample-service-name-f7fr.onrender.com/",
            description:
                "A web application designed during my bootcamp as a comprehensive platform for booking pet-friendly accommodations and services. Utilizing HTML, CSS, JavaScript, React, and Flux on the frontend, the site offers a seamless user experience with interactive features. Python and Flask power the backend, integrating with MySQL for secure and efficient data management. The project's user interface and visual design were crafted using Figma and Canva.",
            photo: five,
        },
        {
            name: "Airbnb",
            link: "https://myairbclone.vercel.app/",
            description:
                "Developed a clone of Airbnb leveraging modern web technologies. The frontend stack includes HTML, CSS, JavaScript, React, Next.js for server-side rendering, TypeScript for enhanced code quality, and Tailwind CSS for rapid UI development. On the backend, Prisma is used for database management and MongoDB for storing and querying data efficiently",
            photo: one,
        },
        {
            name: "Epic journey",
            link: "https://javascript-game-project.vercel.app/",
            description:
                "Epic Journey is an interactive game developed using JavaScript for logic and game mechanics, and HTML/CSS for presentation and styling",
            photo: two,
        },
    ];

    return (
        <>
            <div className='spacer'></div>
            <section className='work'>
                <div className='work__left'>
                    {projects.map((project, index) => (
                        <div className='work__info' key={project.link}>
                            <h2 className='work__title'>{project.name}</h2>
                            <p className='work__description'>
                                {project.description}
                            </p>
                            <Link
                                className='work__link'
                                href={project.link}
                                target='_blank'
                            >
                                Go
                            </Link>
                            <span>{`0${index + 1}`}</span>
                        </div>
                    ))}
                </div>
                <div className='work__right'>
                    {projects.map((project) => (
                        <Image
                            key={project.name}
                            src={project.photo}
                            width={200}
                            height={80}
                            alt={project.name}
                            className='work__img'
                        />
                    ))}
                </div>
            </section>
            <div className='spacer'></div>
        </>
    );
};

export default WorkLinks;
