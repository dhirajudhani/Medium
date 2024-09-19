interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <>
      <div className="pt-4 border-b border-slate-200 pb-4">
        <div>
          <div className="flex">
            <div className="flex justify-center items-center">
              <Avatar name={authorName} />
            </div>
            <div className="font-extraligh pl-2 mt-2 text-sm">{authorName}</div>
            <div className="pl-2 mt-2 font-thin text-sm text-slate-500">
              {publishedDate}
            </div>
          </div>
        </div>
        <div className="text-xl font-bold pt-2">{title}</div>
        <div className="text-md font-extralight">
          {content.slice(0, 100) + "..."}
        </div>
        <div className="text-slate-500 pt-4 text-sm font-thin">{`${Math.ceil(
          content.length / 100
        )} min read`}</div>
      </div>
    </>
  );
};

export function Avatar({ name, size = "small" }: { name: string, size?: "small" | "big" }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-600 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"}`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-gray-300`}>
        {name[0]}
    </span>
</div>
}