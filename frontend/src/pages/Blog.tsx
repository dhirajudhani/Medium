import { useBlog } from "../hooks/useBlogs"

export const Blog = () => {
  const blog  = useBlog()
  return (
    <div>Blog</div>
  )
}

