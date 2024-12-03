import Title from "../Title"
import Description from "./Description"


const About = () => {
    return (
        <div className="text-gray-800 bg-white shadow-2xl rounded-lg m-3 md:m-0 p-5 md:p-20">
            <Title text="Tentang Saya"/>
            <Description />
        </div>
    )
}

export default About