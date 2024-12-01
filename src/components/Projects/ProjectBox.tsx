import Image from "../Image"
import Detail from "./Detail"


type Projects = {
    image: string,
    name: string,
    link: string,
    tools: string,
    github: string
}

type ProjectBoxProps = {
    projects: Projects[]
}

const ProjectBox = ({projects}: ProjectBoxProps) => {
    return (
        <>
            {projects.map((projects, index) => (
                <div className="md:flex bg-gray-700 mt-4 p-5 rounded-xl gap-8" key={index}>
                    <Image image={projects.image} className="w-96 rounded-xl" alt=""/>
                    <Detail name={projects.name} link={projects.link} github={projects.github} />
                </div>
            ))}
        </>
    )
}

export default ProjectBox