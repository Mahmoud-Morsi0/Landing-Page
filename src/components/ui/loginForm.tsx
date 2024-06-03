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
import { useUser } from "@/context/userContext"

const FormSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
  password: z.string().min(3, {
    message: "passwors must be at least 8 characters.",
  }),
})

export function InputForm() {
  const [isVisable, setVisability] = useState(false)
  const navigate = useNavigate()
const {user,setUser}=useUser()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

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
    if (data) {
      localStorage.setItem("token", data.username)
      setUser(data.username)
      if(user){
        toast({
          title: "You are logged in",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(user, null, 2)}</code>
            </pre>
          ),
        })
      }
      console.log(localStorage.getItem("token"))
      navigate("/home")
    }
  }

  const handellNavigate = () => {
    navigate("/auth/signup")
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="UserName" {...field} />
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
            Log In</Button>
          <p
            onClick={handellNavigate}
            className="text-[#abd665] cursor-pointer text-sm"
          >
            SignUp</p>
        </div>

      </form>
    </Form>
  )
}
