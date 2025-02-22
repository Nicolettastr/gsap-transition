import { ProjectsData } from "@/constants/projects";
import Image from "next/image";

interface WorkDescriptionProps {
    projectHover: Partial<ProjectsData>;
}

const WorkDescription: React.FC<WorkDescriptionProps> = ({ projectHover }) => {
    return (
        <div className='work_description_wrapper'>
            <figure>
                <Image
                    src={projectHover?.photo ?? ""}
                    alt={projectHover?.name ?? ""}
                    width={500}
                    height={500}
                    layout='intrinsic'
                />
            </figure>
            <p>{projectHover.description}</p>
        </div>
    );
};

export default WorkDescription;
