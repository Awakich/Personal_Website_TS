import { RepoProps } from "../../models"

const ProjectInfo: React.FC<RepoProps> = ({ name, id, description, html_url, language, created_at }) => {
    return (
        <div className="rounded-xl p-12 text-black bg-[#CBFC50] hover:bg-[#cbfc50]/90 hover:cursor-pointer">
            <div className="flex justify-between items-end">
                <div className="flex flex-col gap-5">
                    <p className="font-bold text-4xl">{name}</p>
                    <p className="font-light text-xl">{description}</p>
                    <a href={html_url} className="text-lg">{html_url}</a>
                </div>

                <div className="flex flex-col items-end gap-5">
                    <p className="font-light text-2xl">{created_at.slice(0, 10)}</p>
                    <p className="text-xl font-semibold">{language}</p>
                    <button className="bg-white text-2xl px-12 py-4 rounded-full font-bold hover:bg-white/90"><a href={html_url}>More</a></button>
                </div>

            </div>
        </div>
    )
}

export default ProjectInfo