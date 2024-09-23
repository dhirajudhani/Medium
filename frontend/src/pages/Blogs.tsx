import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks/useBlogs";

export const Blogs = () => {
  const { blogs, loading } = useBlogs()


  if (loading) {
    return <div >

      <Appbar />

      <div className="flex flex-col justify-center items-center">
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
        <BlogSkeleton />
      </div>
    </div>
  }

  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className=" max-w-xl">
          {
            blogs.map(blog => <BlogCard id={blog.id} authorName={blog.author.name || "Anonymous"} content={blog.content} title={blog.title} publishedDate="1/1/2001" />)
          }
        </div>
      </div>
    </>
  );
};
