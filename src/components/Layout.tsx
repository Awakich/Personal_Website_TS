interface PropsLayout {
    children: React.ReactNode
}

const Layout: React.FC<PropsLayout> = ({ children }) => {
    return (
        <div className="px-12 py-6 bg-[#222222] text-white min-h-screen">{children}</div>
    )
}

export default Layout