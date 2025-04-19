// import { notFound } from "next/navigation";
import Image from "next/image";
import blogsData from "@/app/data/blogs.json";

interface BlogPageProps {
  params: {
    id: string;
  };
}

const BlogPage = async ({ params }: BlogPageProps) => {
  //   const res = await fetch(`https://your-api.com/blogs/${params.id}`, {
  //     cache: "no-store", // optional: disables caching for fresh data
  //   });

  //   if (!res.ok) return notFound();

  //   const blog = await res.json();

  const blog = blogsData.find((b) => b.id === params.id);

  if (!blog) {
    return <div className="text-center p-10">Blog not found</div>;
  }

  return (
    <div className="p-10 max-w-full mx-auto">
      <div className="w-full border-2">
        <Image
          src={blog.image}
          alt={blog.title}
          width={300}
          height={300}
          className="w-[70%] h-[70vh] rounded-lg"
        />
      </div>
      <div className="flex">
        <div className="border-2 w-[70%] ">
          <h1 className="text-3xl text-black font-bold mb-4">{blog.title}</h1>
          <p className="text-black mt-4">{blog.description}</p>
          <p className="mt-8 text-sm text-gray-500">
            Category: {blog.category}
          </p>
        </div>
        <div className="border-1 w-[30%]">hello</div>
      </div>
    </div>
  );
};

export default BlogPage;
