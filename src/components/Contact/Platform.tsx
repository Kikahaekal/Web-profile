import Image from "../Image"


type Contacts = {
    image: string,
    platform: string,
    link: string
}

type PlatformProps = {
    contacts: Contacts[]
}

const Platform = ({contacts}: PlatformProps) => {
    return (
        <>
            {contacts.map((contact, index) => (
                <a href={contact.link} key={index}>
                    <div className="flex flex-col justify-center gap-3 text-center hover:shadow-2xl p-5 hover:rounded-xl hover:delay-75">
                        <Image image={contact.image} className="w-14" alt={`Gambar Kontak ${index}`}/>
                        <small>{contact.platform}</small>
                    </div>
                </a>
            ))}
        </>
    )
}

export default Platform