import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ blog }: any) {
  return (
    <Link href={`/blogs/${blog.slug}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden">
        <Image src={blog.image} alt={blog.title} width={400} height={200} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-1">{blog.title}</h2>
          <p className="text-gray-600 text-sm line-clamp-2">{blog.excerpt}</p>
          <div className="text-xs text-gray-500 mt-2">
            By {blog.author} • {new Date(blog.date).toLocaleDateString()}
          </div>
        </div>
      </div>
    </Link>
  );
}
