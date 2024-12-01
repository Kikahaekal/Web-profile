

type DetailProps = {
    name: string,
    link: string,
    github: string
}

const Detail = ({name, link, github}: DetailProps) => {
    return (
        <div className="flex flex-col gap-12 md:gap-20 mt-2 md:mt-0">
            <div>
                <p className="text-2xl font-bold italic">{name}</p>
            </div>
            <div>
                <p>Link akses: {link !== "#" ? <a className="text-blue-300 underline" href={link}>{link}</a> : "-"}</p>
                <p className="mt-1">Link github: {github != "not pushed" ? <a className="text-blue-300 underline" href={github}>{github}</a> : "-"}</p>
            </div>
        </div>
    )
}

export default Detail