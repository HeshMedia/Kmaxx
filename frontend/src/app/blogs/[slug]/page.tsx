import { blogs } from "@/lib/data/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Image src={blog.image} alt={blog.title} width={800} height={400} className="w-full rounded-lg object-cover mb-6" />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {blog.author} • {new Date(blog.date).toLocaleDateString()}
      </p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.content }} />
      {blog.tags?.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {blog.tags.map((tag) => (
            <span key={tag} className="text-xs bg-orange-200 text-orange-800 px-2 py-1 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
