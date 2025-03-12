"use client"

import {useState} from "react";
import {EditUserProfileSchema} from "@/lib/types";
import {useForm} from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Loader2} from "lucide-react";

export default function ProfileForm() {
    const [isLoading,setIsLoading] = useState(false);

    const form = useForm<z.infer<typeof EditUserProfileSchema>>({
        resolver : zodResolver(EditUserProfileSchema),
        defaultValues : {
            name: "",
            email: "",
        }
    })
    return (

            <Form {...form}>
                <form className="flex flex-col gap-4 mt-5">
                    <FormField
                        disabled={isLoading}
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-sm">User Full name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Name"
                                        {...field}
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
                                    placeholder="Email"
                                    {...field}
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