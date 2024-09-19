import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/useBlogs"
import { FullBlog } from "../components/FullBlog"

export const Blog = () => {
  const { id } = useParams()
  const {blog, loading}  = useBlog({
    id : id || ""
  })
  if(loading){
    return <div>
      Loding...
    </div>
  }
  if (!blog) {
    return <div>Blog not found</div>
  }
  return (
    <div>
     <FullBlog blog={blog}/>
    </div>
  )
}

