import { getBlogBySlug } from "@/lib/sanity";
import Image from "next/image";
import { notFound } from "next/navigation";
import SanityContent from "@/components/SanityContent";

export const revalidate = 60; // Revalidate the page every 60 seconds

interface BlogDetail {
  slug: string;
  title: string;
  image: string;
  content: any; // Using 'any' for PortableText content
  author: string;
  publishedAt: string;
  tags?: string[];
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  let blog: BlogDetail | null = null;
  
  try {
    blog = await getBlogBySlug(params.slug) as BlogDetail;
    
    // Ensure tags is always an array
    if (!blog.tags) {
      blog.tags = [];
    }
  } catch (error) {
    console.error(`Error fetching blog with slug "${params.slug}":`, error);
  }

  if (!blog) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <Image src={blog.image} alt={blog.title} width={800} height={400} className="w-full rounded-lg object-cover mb-6" />
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {blog.author} • {new Date(blog.publishedAt).toLocaleDateString()}
      </p>
      <SanityContent content={blog.content} />
      {blog.tags && blog.tags.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
          {blog.tags.map((tag: string) => (
            <span key={tag} className="text-xs bg-[#FFE4CC] text-[#FF9B62] px-3 py-1 rounded-full font-medium">
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
