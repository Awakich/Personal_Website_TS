import ContactInfo from "./ContactInfo"

const Contacts: React.FC = () => {
    return (
        <div className="mt-24 text-center">
            <h2 className="font-black italic text-8xl">Contacts</h2>

            <div className="flex mt-12">
                <ContactInfo name="Telegram" link="https://t.me/Ionkiks" />
                <ContactInfo name="VK" link="https://vk.com/artyomivanov3" />
                <ContactInfo name="Email" link="artem.bqpower@gmail.com" />
            </div>
        </div>
    )
}

export default Contacts
