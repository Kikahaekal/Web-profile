import { ReactNode } from "react"
import Title from "../Title"


type ExperienceProps = {
    children: ReactNode
}

const Experience = ({children}: ExperienceProps) => {
    return (
        <>
            <Title text="Pengalaman Kerja"/>
            <div>
                <div className="mt-3 md:flex md:flex-col">
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience