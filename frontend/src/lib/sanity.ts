// This file contains only server-side code
import { createClient } from 'next-sanity'
import { sanityConfig } from './sanity-config'

// Create a client with credentials for fetching data (server-side only)
export const client = createClient({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
  apiVersion: sanityConfig.apiVersion,
  useCdn: sanityConfig.useCdn,
  // Don't use stega in server components to reduce payload size
  stega: false,
})

// Make queries to fetch content data
export async function getDoctors() {
  console.log("Fetching doctors...");
  try {
    console.log("Sanity config:", JSON.stringify({
      projectId: sanityConfig.projectId,
      dataset: sanityConfig.dataset,
      apiVersion: sanityConfig.apiVersion,
    }));
    
    const query = `*[_type == "doctors"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      role,
      description,
      order
    }`;
    
    console.log("Doctor query:", query);
    const result = await client.fetch(query);
    console.log("Doctors fetch result:", JSON.stringify(result).substring(0, 200) + "...");
    console.log("Number of doctors found:", result ? result.length : 0);
    
    return result;
  } catch (error) {
    console.error("Error fetching doctors:", error);
    throw error; // Re-throw to make the error visible in the UI
  }
}

// Department queries
export async function getDepartments() {
  console.log("Fetching departments...")
  try {
    const result = await client.fetch(`*[_type == "department"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      iconName,
      order
    }`)
    console.log("Departments result:", result)
    return result || []
  } catch (error) {
    console.error("Error fetching departments:", error)
    return []
  }
}

export async function getNavbarDepartments() {
  console.log("Fetching navbar departments...")
  try {
    const result = await client.fetch(`*[_type == "department" && (showInNavbar == true || showInNavbar == null)] | order(order asc) {
      _id,
      name,
      "slug": slug.current
    }`)
    console.log("Navbar departments result:", result)
    return result || []
  } catch (error) {
    console.error("Error fetching navbar departments:", error)
    return []
  }
}

export async function getDepartmentBySlug(slug: string) {
  try {
    const result = await client.fetch(`*[_type == "department" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      intro,
      "image": image.asset->url,
      sections[] {
        title,
        listItems
      },
      conclusionText,
      doctors[]-> | order(order asc) {
        _id,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        role,
        description,
        order
      }
    }`, { slug })
    console.log("Department by slug result:", result)
    return result
  } catch (error) {
    console.error(`Error fetching department with slug ${slug}:`, error)
    return null
  }
}

// Hero section query
export async function getHero() {
  console.log("Fetching hero data...")
  try {
    const result = await client.fetch(`*[_type == "hero"][0] {
      heading,
      description,
      "backgroundImage": backgroundImage.asset->url,
      "mainImage": mainImage.asset->url,
      buttonText
    }`)
    console.log("Hero result:", result)
    return result
  } catch (error) {
    console.error("Error fetching hero data:", error)
    return null
  }
}

// Home About section query
export async function getHomeAbout() {
  console.log("Fetching home about data...")
  try {
    const result = await client.fetch(`*[_type == "homeAbout"][0] {
      title,
      description
    }`)
    console.log("Home about result:", result)
    return result
  } catch (error) {
    console.error("Error fetching home about data:", error)
    return null
  }
}

// About Page query
export async function getAboutPage() {
  return client.fetch(`*[_type == "aboutPage"][0] {
    mission,
    mainDescription,
    sections[] {
      title,
      listItems
    },
    conclusionText,
    gallery[] {
      "url": asset->url,
      alt
    }
  }`)
}

export async function getDoctorBySlug(slug: string) {
  console.log(`Fetching doctor with slug: ${slug}...`);
  try {
    const query = `*[_type == "doctors" && slug.current == $slug][0] {
      name,
      "slug": slug.current,
      "image": image.asset->url,
      role,
      description,
      bio
    }`;
    
    console.log("Doctor by slug query:", query);
    console.log("Query parameters:", { slug });
    
    const result = await client.fetch(query, { slug });
    console.log("Doctor result:", result ? "Found doctor" : "No doctor found");
    
    return result;
  } catch (error) {
    console.error(`Error fetching doctor with slug ${slug}:`, error);
    throw error;
  }
}

// Blog related queries
export async function getBlogs() {
  return client.fetch(`*[_type == "blogs"] | order(publishedAt desc) {
    title,
    "slug": slug.current,
    "image": image.asset->url,
    "excerpt": array::join(string::split(pt::text(content[0...1]), "")[0..200], "") + "...",
    author,
    publishedAt,
    tags
  }`)
}

export async function getBlogBySlug(slug: string) {
  return client.fetch(`*[_type == "blogs" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    "image": image.asset->url,
    content,
    author,
    publishedAt,
    tags[]
  }`, { slug })
}

// Gallery related queries
export async function getGalleryItems() {
  console.log("Fetching gallery items...");
  const result = await client.fetch(`
    *[_type == "gallery"] | order(order asc) {
      _id,
      title,
      description,
      order,
      "imageUrl": image.asset->url
    }
  `);
  console.log("Gallery API response:", result);
  
  // Ensure we have a valid array even if only one item is returned
  const items = Array.isArray(result) ? result : result ? [result] : [];
  
  return items.map((item: { _id: string; title?: string; description?: string; imageUrl?: string; order?: number }) => ({
    _id: item._id,
    title: item.title || "Untitled",
    description: item.description || "",
    image: item.imageUrl || "/static/images/placeholder.jpg",
    order: item.order || 0
  }));
}

// News related queries
export async function getNewsItems() {
  console.log("Fetching news items...");
  const result = await client.fetch(`
    *[_type == "news"] | order(order asc) {
      _id,
      title,
      publishedAt,
      order,
      "imageUrl": image.asset->url
    }
  `);
  console.log("News API response:", result);
  
  // Ensure we have a valid array even if only one item is returned
  const items = Array.isArray(result) ? result : result ? [result] : [];
  
  return items.map((item: { _id: string; title?: string; imageUrl?: string; publishedAt?: string; order?: number }) => ({
    _id: item._id,
    title: item.title || "Untitled News",
    image: item.imageUrl || "/static/images/placeholder.jpg",
    publishedAt: item.publishedAt,
    order: item.order || 0
  }));
} 