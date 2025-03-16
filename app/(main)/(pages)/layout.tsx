
type Props = {
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    return (
        <div className=" pb-20 h-screen rounded-l-3xl border-muted-foreground/20 overflow-scroll">
                {props.children}
        </div>
    )
}