import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/InfoBar";

type Props = {
    children: React.ReactNode;
}

export default function Layout(props: Props) {
    return (
        <div className="flex overflow-hidden h-screen">
            <Sidebar/>
            <div className="w-full">
                <InfoBar/>
                {props.children}
            </div>
        </div>
    )
}