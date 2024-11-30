

type TitleProps = {
    text: string
}

const Title = ({text}: TitleProps) => {
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">{text}</h1>
        </div>
    )
}

export default Title