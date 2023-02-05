import NavBar from "./NavBar"

const Header: React.FC = () => {
    return (
        <div>
            <NavBar />

            <div className="mt-24">
                <p className="font-bold text-8xl">HI, THIS IS MY </p>
                <div className="flex justify-end">
                    <div className="flex flex-col">
                        <p className="font-bold text-8xl">PERSONAL WEBSITE</p>
                        <p className="font-light text-4xl flex justify-end">By Artem Ivanov</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header