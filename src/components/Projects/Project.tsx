import { ReactNode } from "react"
import Title from "../Title"

type ProjectProps = {
    children: ReactNode 
}

const Project = ({children}: ProjectProps) => {
    return (
        <div className="text-white py-5 px-8 md:py-24 md:px-24">
            <Title text="Projek"/>
            {children}
        </div>
    )
}

export default Project