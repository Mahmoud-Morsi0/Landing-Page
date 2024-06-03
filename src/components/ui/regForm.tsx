"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { Input } from "./input"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const FormSchema = z.object({
    firstName: z.string().min(2, {
        message: "First Name must have at least 1 capital characters.",
    }),
    lastName: z.string().min(2, {
        message: "Last Name must have at least 1 capital characters.",
    }),
    email: z.string().min(8, {
        message: "email must be valid.",
    }),
    password: z.string().min(8, {
        message: "passwors must be at least 8 characters.",
    }),
})

export function RegForm() {
    const [isVisable, setVisability] = useState(false)



    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
    })


    const navigate = useNavigate()
    const handellNavigate = () => {
        navigate("/auth/login")
    }
    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                                <Input placeholder="First Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                                <Input placeholder="Last Name" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input placeholder="Password" type={`${isVisable ? "text" : "password"}`} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-start items-center gap-5">

                    <Button
                        className="bg-[#363636] hover:bg-[#abd665] disabled:inline-block hover:text-[#363636] "
                        type="submit"
                    >
                        Sign Up</Button>
                    <p
                        onClick={handellNavigate}
                        className="text-[#abd665] cursor-pointer text-sm"
                    >
                        Log In</p>
                </div>
            </form>
        </Form>
    )
}
