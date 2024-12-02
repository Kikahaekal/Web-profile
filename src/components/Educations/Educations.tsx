import { ReactNode } from "react"
import Title from "../Title"

type EducationProps = {
    children: ReactNode
}


const Educations = ({children}: EducationProps) => {
    return (
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative py-20">
            <Title text="Riwayat Pendidikan"/>
            <div className="border-l-2 mt-10">
                {children}
            </div>
        </div>
    )
}

export default Educations