type Props = {
    children: React.ReactNode
}

export default function Layout({
    children,
                               } : Props) {
    return (
        <div className="w-full h-screen flex flex-col justify-center items-center">
            {children}
        </div>
    )
}