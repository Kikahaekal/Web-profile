

type DescriptionProps = {
    text: string,
    start_date: string,
    end_date: string,
    company_name: string,
    skills: string,
    status: string
}

const Description = ({text, start_date, end_date, company_name, skills, status}: DescriptionProps) => {
    return (
        <div className="mt-5 md:mt-0 text-gray-800">
            <div>
                <p className="text-2xl text-center md:text-left md:text-3xl text-blue-800">{company_name} - {status}</p>
                <small className="block">{start_date} - {end_date}</small>
                <small className="text-blue-800 font-bold">Tools yang digunakan: {skills}</small>
            </div>
            <p className="mt-5 text-lg text-center md:text-left">{text}</p>
        </div>
    )
}

export default Description