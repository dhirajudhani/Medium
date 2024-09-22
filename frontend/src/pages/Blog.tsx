import { useParams } from "react-router-dom"
import { useBlog } from "../hooks/useBlogs"
import { FullBlog } from "../components/FullBlog"
import { Spinner } from "../components/Spinner"
import { Appbar } from "../components/Appbar"

export const Blog = () => {
  const { id } = useParams()
  const {blog, loading}  = useBlog({
    id : id || ""
  })
  if(loading){
    return <div>
      <Appbar/><div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
      <Spinner/>
      </div>
      </div> 
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

