import type { Blog } from "../hooks/useBlogs";
import { Appbar } from "./Appbar";

export const FullBlog = ({blog} : {blog : Blog  }) => {

  return (
    <div>
      <Appbar />
      <div className="grid grid-cols-12 px-10 w-full pt-6 ">
        <div className="col-span-8 text-3xl font-bold">
            <div className="text-3xl font-bold"> {blog.title }</div>
            <div className="">{blog.content}</div>
        </div>
        <div className="col-span-4">
            <div>
                hello
            </div>
        </div>
      </div>
    </div>
  );
};
