import { getGalleryItems, getNewsItems, getDepartments } from "@/lib/sanity";
import { News } from "@/components/news";
import { Departments } from "@/components/departments";
import { client } from "@/lib/sanity";

export const revalidate = 60; 

interface SanityItem {
  _id: string;
  _type: string;
  [key: string]: any;
}

interface GalleryItem {
  _id: string;
  title: string;
  image: string;
  description: string;
  order?: number;
}

interface NewsItem {
  _id: string;
  title?: string;
  image: string;
  publishedAt?: string;
  order?: number;
}

export async function DepartmentsSection() {
  try {
    const departments = await getDepartments();
    return <Departments departmentData={departments} />;
  } catch (error) {
    console.error("Error in DepartmentsSection:", error);
    // Return the component with no data - it will use fallback data
    return <Departments />;
  }
}

export async function NewsAndGallerySection() {
  try {
    const testResult = await client.fetch(`*[_type in ["gallery", "news"]][0...10]`) as SanityItem[];
    
    if (testResult?.length > 0) {
      const galleryCount = testResult.filter(item => item._type === 'gallery').length;
      const newsCount = testResult.filter(item => item._type === 'news').length;
    }
  } catch (error) {
    console.error("Error testing Sanity connection:", error);
  }

  let galleryItems: GalleryItem[] = [];
  let newsItems: NewsItem[] = [];
  
  try {
    galleryItems = await getGalleryItems() as GalleryItem[];
    if (galleryItems?.length > 0) {
      galleryItems.forEach((item, i) => {
        console.log(`Gallery item ${i}:`, {
          id: item._id,
          title: item.title,
          hasImage: !!item.image,
          imageUrl: item.image,
          hasDescription: !!item.description
        });
      });
    }
  } catch (error) {
    console.error("Error fetching gallery items:", error);
  }
  
  try {
    newsItems = await getNewsItems() as NewsItem[];
    if (newsItems?.length > 0) {
      newsItems.forEach((item, i) => {
        console.log(`News item ${i}:`, {
          id: item._id,
          title: item.title,
          hasImage: !!item.image,
          imageUrl: item.image
        });
      });
    }
  } catch (error) {
    console.error("Error fetching news items:", error);
  }

  const safeGalleryItems = Array.isArray(galleryItems) ? galleryItems : galleryItems ? [galleryItems] : [];
  const safeNewsItems = Array.isArray(newsItems) ? newsItems : newsItems ? [newsItems] : [];

  return (
    <News newsItems={safeNewsItems} galleryItems={safeGalleryItems} />
  );
} 