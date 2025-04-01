import Image from "next/image";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/lib/data/blogs";

export default function BlogsPage() {
  return (
    <div className="bg-[#FFF8F3] min-h-screen">
      {/* Banner */}
      <div className="relative bg-[#FFD0B4] h-48 md:h-56 flex items-center justify-center overflow-hidden">
        <Image
          src="/static/images/hex-left.png"
          alt="Hex pattern top left"
          width={220}
          height={220}
          className="absolute top-0 left-0 object-contain opacity-70 -translate-x-8 -translate-y-8"
        />
        <Image
          src="/static/images/hex-right .png"
          alt="Hex pattern bottom right"
          width={220}
          height={220}
          className="absolute bottom-0 right-0 object-contain opacity-70 translate-x-8 translate-y-8"
        />
        <h1 className="text-2xl md:text-4xl font-bold uppercase text-black z-10">Blogs</h1>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 py-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>
    </div>
  );
}
