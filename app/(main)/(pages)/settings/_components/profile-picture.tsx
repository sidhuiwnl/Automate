"use client"

import UploadCareButton from "@/app/(main)/(pages)/settings/_components/uploadcare-button";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {X} from "lucide-react";

type Props = {
    userImage : string | null;
    onDelete? : any;
    onUpload? : any;
}

export default function ProfilePicture({ onUpload,userImage,onDelete }: Props) {
    return(
        <div className="flex flex-col mt-4">
            <p className="text-lg text-white">Profile Picture</p>
            <div className="flex flex-col h-[30vh] items-center justify-center">
                {
                    userImage ? (
                        <>
                            <div className="relative h-full w-2/12">
                                <Image
                                    src={userImage}
                                    alt="User-Image"
                                    fill
                                />
                            </div>
                            <Button
                                className="bg-transparent text-white/70 hover:bg-transparent hover:text-white"
                            >
                                <X/> Remove Logo
                            </Button>
                        </>
                    ) : (
                        <UploadCareButton/>
                    )
                }
            </div>
        </div>
    )
}