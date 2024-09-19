import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <>
    <Appbar/>
      <div className="flex justify-center">
        <div className=" max-w-xl">
          <BlogCard
            authorName={"dhiraj udhani"}
            content={
              "something very confidential which can not be said until you wake up so wake up fast and go to the gym and once you will know the secret the sceret of life so go to the gym work hark and do better things in life "
            }
            title={"My first blog"}
            publishedDate="1/1/2001"
          />
          <BlogCard
            authorName={"dhiraj udhani"}
            content={
              "something very confidential which can not be said until you wake up so wake up fast and go to the gym and once you will know the secret the sceret of life so go to the gym work hark and do better things in life "
            }
            title={"My first blog"}
            publishedDate="1/1/2001"
          />{" "}
          <BlogCard
            authorName={"dhiraj udhani"}
            content={
              "something very confidential which can not be said until you wake up so wake up fast and go to the gym and once you will know the secret the sceret of life so go to the gym work hark and do better things in life "
            }
            title={"My first blog"}
            publishedDate="1/1/2001"
          />{" "}
          <BlogCard
            authorName={"dhiraj udhani"}
            content={
              "something very confidential which can not be said until you wake up so wake up fast and go to the gym and once you will know the secret the sceret of life so go to the gym work hark and do better things in life "
            }
            title={"My first blog"}
            publishedDate="1/1/2001"
          />
        </div>
      </div>
    </>
  );
};
