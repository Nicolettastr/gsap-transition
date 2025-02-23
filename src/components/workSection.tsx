import { workData } from "@/constants/work";
import useNavigation from "@/utils/Navigation";
import Image from "next/image";
import React from "react";

const WorkSection = () => {
    const { goTo } = useNavigation();

    return (
        <section className='work_section'>
            {workData.map((work) => {
                return (
                    <>
                        <div className={`company ${work.name}`}>
                            <Image
                                src={work.photo}
                                width={1000}
                                height={1000}
                                alt={work.name}
                            />
                        </div>
                        <div
                            className={`${work.name}_description work__description`}
                        >
                            <p>{work.description}</p>
                            <button onClick={() => goTo(work.link, true)}>
                                View more
                            </button>
                        </div>
                    </>
                );
            })}
        </section>
    );
};

export default WorkSection;
