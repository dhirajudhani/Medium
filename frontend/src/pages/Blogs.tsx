import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
    const {blogs, loading} = useBlogs()
    
    console.log(blogs) 
    console.log(loading)
    if(loading){
        return <div>Loading...</div>
    }
   
  return (
    <>
    <Appbar/>
      <div className="flex justify-center">
        <div className=" max-w-xl">
            {
                blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} content={blog.content} title={blog.title} publishedDate="1/1/2001"/>)
            }
        </div>
      </div>
    </>
  );
};
