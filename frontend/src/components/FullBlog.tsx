import type { Blog } from "../hooks/useBlogs";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-6 max-w-screen-xl">
          <div className="col-span-8">
            <div className="text-5xl font-bold"> {blog.title}</div>
            <div className="text-slate-400 pt-4">
              Posted on 24th August, 2024
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div>
            <div className="text-slate-600 text-lg pb-3">Author</div>
              <div className="flex w-full">
                <div className=" items-center pr-1 flex justify-center">
                  <Avatar name={blog.author.name || "Anonymous"} size="big" />
                </div>
                <div className="pl-2">
                  <div className="text-xl font-bold ">
                    {" "}
                    {blog.author.name || "Anonymous"}
                  </div>
                  <div className="text-slate-500 pt-2">
                    Random catch phrase about the author's ability to grab the
                    users attention
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
