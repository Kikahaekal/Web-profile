import Image from "../Image"
import Text from "./Text"
import myPhoto from "../../../public/Poto-ig.jpg"

const Header = () => {
    return (
        <div className="w-full gap-8 px-8 md:flex md:items-center md:gap-52 md:px-52">
            <Image image={myPhoto} className="rounded-full w-52 h-52 md:w-72 md:h-72" alt="Foto instagram"/>
            <Text />
        </div>
    )
}

export default Header