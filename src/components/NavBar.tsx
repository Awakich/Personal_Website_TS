const NavBar: React.FC = () => {
    return (
        <ul className="flex gap-12 justify-end">
            <li className="font-light text-2xl italic hover:cursor-pointer hover:opacity-70"><a href="#info">Info</a></li>
            <li className="font-light text-2xl italic hover:cursor-pointer hover:opacity-70"><a href="#projects">Projects</a></li>
            <li className="font-light text-2xl italic hover:cursor-pointer hover:opacity-70"><a href="#contacts">Contacts</a></li>
        </ul>
    )
}

export default NavBar