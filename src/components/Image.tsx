

type ImageProps = {
    image: string,
    className?: string,
    alt?: string
}

const Image = ({ className, alt, image }: ImageProps) => {
    return <img src={image} alt={alt} className={className} />
}

export default Image