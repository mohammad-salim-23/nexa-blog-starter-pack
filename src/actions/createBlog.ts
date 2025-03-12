"use server"

import { redirect } from "next/navigation";

export const createBlog = async (data :FormData)=>{
    const blogData = Object.fromEntries(data.entries());

    const res = await fetch ("http://localhost:5000/blogs",{
        method: "POST",
        headers: {
            "COntent-Type" : "application/json",
        },
        body : JSON.stringify(blogData ),
    })
    const blogInfo = await res.json();

    if(blogInfo){
        redirect(`/blogs/${blogInfo?.id}`);//server component ar server actions e sudu bebohar kora jabe
    }
    return blogInfo;
}