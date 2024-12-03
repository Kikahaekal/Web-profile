import { ReactNode } from "react"
import Title from "../Title"

type ContactProps = {
    children: ReactNode
}


const Contact = ({children}: ContactProps) => {
    return (
        <div>
            <Title text="Kontak" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 my-7">
                {children}
            </div>
        </div>
    )
}

export default Contact