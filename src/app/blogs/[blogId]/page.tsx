import BlogDetailsCard from "@/components/ui/BlogDetailsCard";

const BlogDetailsPage = async({
    params,
}:{
    params : Promise<{blogId : string}>
})=> {
    
    const {blogId} = await params;
    const res = await fetch(`http://localhost:5000/blogs/${blogId}`);
    // console.log(res);

    const blog = await res.json();
    // console.log(blog);
    return (
    <div className="my-10">
        <BlogDetailsCard blog={blog}/>
    </div>
    )
}
export default BlogDetailsPage;