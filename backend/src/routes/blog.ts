import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { verify } from "hono/jwt";
import { createBlogInput } from "@dhirajudhani1313/medium-comman/dist/zod";
import { updateBlogInput } from "@dhirajudhani1313/medium-comman/dist/zod";


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET : string
    },
    Variables :{
        authorId : string
    }
}>()

// first we have to authenticate whether the user is right or not 

blogRouter.use("/*" , async (c, next) =>{
    const authHeader = c.req.header('Authorization') || ""
    const res  = await verify(authHeader, c.env.JWT_SECRET);
    if(res) {
        c.set("authorId", res.id as string)
        return await next()
    }
    else{
        c.status(403);
        c.json({
            error:"unauthorize"
        })  
    }
} ) 




blogRouter.post("/", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    const body = await c.req.json();
    const {success} = createBlogInput.safeParse(body)
    if(!success) {
        c.status(411);
        return c.json({
            message : "the given inputs are incorrect for post"
        })
    }
    const authorId = c.get("authorId");
    try {
        const blog = await prisma.post.create({
            data: {
                content: body.content,
                title: body.title,
                author: body.author,
                authorId: authorId
            }
        });
        return c.json({ id: blog.id });
    } catch (error) {
        console.error(error);
        return c.json({ error: "Error creating blog post" }, 500);
    }
});
  


  blogRouter.put("/",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const {success} = updateBlogInput.safeParse(body);
    if(!success) {
        c.status(411);
        return c.json({
            message : "the given inputs are invalids for post"
        })
    }
    const authorId  = c.get("authorId")
    const blog = await prisma.post.update({
        where: {
            id : body.id
        },
        data:{
            content: body.content,
            title : body.title,
        }
    })

    return c.json({
        id : blog.id
    })

  })

// add pagination to this end point 
blogRouter.get("/bulk",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    try {
        const blogs = await prisma.post.findMany()
        console.log(blogs)
        return c.json({
            blogs
        })
    } catch (error) {
        c.status(403)
        return c.json({
            error: "Some issue while fetching the blog"
        })
    }
  })
  
  
  blogRouter.get("/:id",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const paramId = await c.req.param('id')
    try {
        const blog = await prisma.post.findFirst({
            where:{
             id : paramId
            }
         })
     
         return c.json({
             blog
         })
    } catch (error) {
        c.status(403)
        return c.json({
            error : "Error while fetching blog post"
        })
    }
    

  })
  
  
  