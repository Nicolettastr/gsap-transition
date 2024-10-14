import { ProjectsData } from "@/constants/projects";
import Image from "next/image";

interface WorkDescriptionProps {
    projectHover: ProjectsData;
}

const WorkDescription: React.FC<WorkDescriptionProps> = ({ projectHover }) => {
    return (
        <div className='work_description_wrapper'>
            <figure>
                <Image
                    src={projectHover?.photo ?? ""}
                    alt={projectHover?.name ?? ""}
                    width={50}
                    height={50}
                />
            </figure>
            <h2>{projectHover?.name}</h2>
            <p>{projectHover?.description}</p>
        </div>
    );
};

export default WorkDescription;
