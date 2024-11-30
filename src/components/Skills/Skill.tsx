import { ReactNode } from "react"
import Title from "../Title"


type SkillsProps = {
    children: ReactNode
}

const Skills = ({children}: SkillsProps) => {
    return(
        <div className="text-white mt-3 md:mt-0">
            <Title text="Keahlian"/>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 my-5">
                {children}
            </div>
        </div>
    )
}

export default Skills