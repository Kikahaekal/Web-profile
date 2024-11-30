import { ReactNode } from "react"


type MainBoxProps = {
    className?: string,
    children: ReactNode
}

const MainBox = ({className, children}: MainBoxProps) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default MainBox