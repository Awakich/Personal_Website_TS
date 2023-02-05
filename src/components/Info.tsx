import { ImgProp } from "../models"

const Info: React.FC<ImgProp> = ({ img }) => {
    return (
        <div className="my-24 mx-auto">
            <h2 className="font-black italic text-8xl text-center">Info</h2>

            <div className="flex justify-around items-center mt-12">
                <img alt="" src={img} className="rounded-3xl w-72 h-72 object-cover" />
                <div className="flex flex-col gap-5">
                    <h3 className="text-5xl font-semibold italic">My stack</h3>
                    <p className="text-4xl font-light italic">TypeScript JavaScript React TailwindCSS Webpack React-Router GitHub</p>
                </div>
            </div>
        </div>
    )
}

export default Info