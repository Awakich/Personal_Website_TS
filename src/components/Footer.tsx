import NavBar from "./NavBar"

const Footer: React.FC = () => {
    return (
        <div className="mt-24 bg-white text-black rounded-t-xl p-5 flex flex-col-reverse justify-start">
            <p className="text-3xl font-light">By Artem Ivanov</p>
            <NavBar />
        </div>
    )
}

export default Footer