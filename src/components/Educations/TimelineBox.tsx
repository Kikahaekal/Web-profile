

type Institutions = {
    name: string,
    start_year: number,
    end_year?: number,
    major: string
}

type TimelineBoxProps = {
    institutions: Institutions[],
}

const TimelineBox = ({ institutions }: TimelineBoxProps) => {
    return (
        (institutions.map((institution, index) => (
            <div key={index} className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-gray-600 text-white rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-5 h-5 bg-gray-800 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0"></div>
                <div className="w-10 h-1 bg-gray-300 absolute -left-10 z-0"></div>
                <div className="flex-auto">
                    <h1 className="text-lg">{institution.start_year} - {institution.end_year ? institution.end_year : "sekarang"}</h1>
                    <h1 className="text-xl font-bold">{institution.name}</h1>
                    <h3>{institution.major}</h3>
                </div>
            </div>
        )))
    )
}

export default TimelineBox