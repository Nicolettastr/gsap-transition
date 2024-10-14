import Link from "next/link";
import Image from "next/image";
import { ProjectsData, projectsData } from "../constants/projects";
import { RiExternalLinkLine } from "react-icons/ri";

interface WorkLinksProps {
    onHover: (project: ProjectsData) => void;
}

const WorkLinks: React.FC<WorkLinksProps> = ({ onHover }) => {
    const projects = projectsData.map((project, index) => {
        console.log(project);

        const isLastProject = index === projectsData.length - 1;
        const isPenultimateProject = index === projectsData.length - 2;

        return (
            <div
                key={project.name}
                id={`project-id-${project.name}`}
                className={`project_container ${
                    isLastProject
                        ? `isLastProject`
                        : isPenultimateProject
                        ? `isPenultimateProject`
                        : ``
                }`}
                onMouseEnter={() => onHover(project)}
            >
                <div className='work_project_info_container'>
                    <p className='project_name'>{project.name}</p>
                    <span>
                        <RiExternalLinkLine />
                    </span>
                </div>
            </div>
        );
    });

    return <div className='work_links_wrapper'>{projects}</div>;
};

export default WorkLinks;
