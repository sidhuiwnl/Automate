import ProfileForm from "@/components/forms/profile-form";
import ProfilePicture from "@/app/(main)/(pages)/settings/_components/profile-picture";
import { db } from "@/lib/db"
import {currentUser} from "@clerk/nextjs/server";

export default  async function Settings() {
    const authUser = await currentUser();

    if(!authUser) {
        return null
    }

    const user = await db.user.findUnique({
        where : {
            clerkId : authUser.id
        }
    })

    const removeProfileImage = async () =>{
        "use server"
        const response = await db.user.update({
            where : {
                clerkId : authUser?.id,
            },
            data : {
                profileImage : ""
            }
        })
        return response;
    }

    const uploadImage = async (image : string) =>{
        "use server"

        const response = await db.user.update({
            where : {
                clerkId : authUser.id
            },
            data : {
                profileImage : image
            }
        })
        return response;
    }

    const  updateUser = async (name : string) => {
        "use server"

        const response = await db.user.update({
            where : {
                clerkId : authUser.id
            },
            data : {
                name,
            }
        })
        return response;
    }

    return (
        <div className="flex flex-col gap-4">
            <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-2xl backdrop-blur-lg">
                Settings
            </h1>
            <div className="flex flex-col gap-10 p-6">
                <div>
                    <h2 className="text-lg font-bold">User Profile</h2>
                    <p className="text-base text-white/50">Add or update your information</p>
                    <ProfilePicture
                        onDelete={removeProfileImage}
                        userImage={user?.profileImage || ""}
                        onUpload={uploadImage}
                    />
                    <ProfileForm
                        user={user}
                        updateUser={updateUser}
                    />
                </div>
            </div>
        </div>
    )
}