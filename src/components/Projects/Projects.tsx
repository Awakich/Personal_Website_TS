import ProjectInfo from "./ProjectInfo"

import { RepoProps } from '../../models'

interface RepoProp {
    repo: RepoProps[]
}

const Projects: React.FC<RepoProp> = ({ repo }) => {
    return (
        <div className="mt-24">
            <h2 className="font-black italic text-8xl text-center">Projects</h2>

            <div className="bg-white p-12 gap-12 grid grid-cols-2 mt-12 rounded-3xl">
                {repo.map(({ id, name, description, created_at, html_url, language }) => (
                    <ProjectInfo key={id} name={name} description={description} language={language} html_url={html_url} created_at={created_at} />
                ))}
            </div>
        </div>
    )
}

export default Projects