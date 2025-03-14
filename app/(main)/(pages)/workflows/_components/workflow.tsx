import {Card, CardHeader,CardTitle,CardDescription} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import {Label} from "@/components/ui/label";
import {Switch} from "@/components/ui/switch";


type Props = {
    name : string
    description : string
    id: string
    publish : boolean
}

export default function Workflow({ name, description, publish,id }: Props) {
    return (
        <Card className="w-full flex flex-row items-start justify-between">
            <CardHeader className="flex flex-col gap-4 ml-5">
                <Link href={`/workflows/editor/${id}`}>
                    <div className="flex flex-row gap-2">
                        <Image
                            src="/googleDrive.png"
                            alt="Google Drive"
                            height={30}
                            width={30}
                            className="object-contain"
                        />
                        <Image
                            src="/notion.png"
                            alt="Google Drive"
                            height={30}
                            width={30}
                            className="object-contain"
                        />
                        <Image
                            src="/discord.png"
                            alt="Google Drive"
                            height={30}
                            width={30}
                            className="object-contain"
                        />
                    </div>
                    <div className="">
                        <CardTitle className="text-lg">{name}</CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                </Link>
            </CardHeader>
            <div className="flex flex-col items-center gap-2 p-4">
                <Label
                    htmlFor="airplane-mode"
                    className="text-muted-foreground"
                >
                    { publish! ? "On" : "Off"}
                </Label>
                <Switch
                    id="airplane-mode"
                    defaultChecked={publish!}
                >

                </Switch>
            </div>
        </Card>
    )
}