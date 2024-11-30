

type BoxProps = {
    title: string,
    img: string
}

const Box = ({ title, img }: BoxProps) => {
    return (
        <div className="bg-white rounded-md p-2 md:p-5">
            <div className="text-gray-800 flex flex-col justify-center items-center w-40">
                <p className="text-xs font-bold mb-2 text-center">{title}</p>
                <img src={img} alt="skill" className="w-24 h-auto" />
            </div>
        </div>
    )
}

export default Box