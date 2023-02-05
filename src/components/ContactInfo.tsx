import { SocialIcon } from 'react-social-icons'

interface InfoProps {
    name: string;
    link: string;
}

const ContactInfo: React.FC<InfoProps> = ({ name, link }) => {
    return (
        <div className="flex flex-col gap-5 mx-auto bg-white text-black px-10 py-5 rounded-2xl">
            <div><SocialIcon url={link} fgColor="white" /></div>
            <h4 className="text-4xl">{name}</h4>
            <a className="text-xl hover:opacity-80" href={link}>{link}</a>
        </div>
    )
}

export default ContactInfo