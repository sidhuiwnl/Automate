"use client"

import {useEffect, useState} from "react";
import {EditUserProfileSchema} from "@/lib/types";
import {useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";



type Props = {
    user : any,
    updateUser? : any,

}

export default function ProfileForm({user,updateUser}: Props) {
    const [isLoading,setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        resolver : zodResolver(EditUserProfileSchema),
        defaultValues : {
            name: user.name,
            email: user.email,
        }
    })

    const handleSubmit = async ( values : z.infer<typeof EditUserProfileSchema>) =>{
        setIsLoading(true);
        await updateUser(values.name)
        setIsLoading(false);
    }

    useEffect(() => {
        form.reset({
            name: user.name,
            email: user.email,
        })
    }, [user]);

    return (

            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                      className="flex flex-col gap-4 mt-5">
                    <FormField
                        disabled={isLoading}
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">User Full name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Name"


                                    />
                                </FormControl>
                                <FormMessage/>

                            </FormItem>
                        )}
                    />
                    <FormField
                        disabled={true}
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-sm">User Full name</FormLabel>
                            <FormControl>
                                <Input
                                    {...field}
                                    placeholder="Email"

                                    type="email"
                                />
                            </FormControl>
                            <FormMessage/>

                        </FormItem>
                    )}
                    />
                    <Button
                        type="submit"
                        className="self-start hover:bg-[#2F006B] hover:text-white "
                    >
                        { isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Saving
                            </>
                        ) : (
                            'Save User Settings'
                        )
                        }

                    </Button>
                </form>
            </Form>

    )
}