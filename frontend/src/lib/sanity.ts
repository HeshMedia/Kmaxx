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
  // Add token if available in environment (for preview mode or private datasets)
  token: process.env.SANITY_API_TOKEN,
  // Ensure consistent handling between environments
  perspective: 'published',
})

// Make queries to fetch content data
export async function getDoctors() {
  return client.fetch(`*[_type == "doctors"] | order(order asc) {
    _id,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    role,
    description,
    order
  }`)
}

// Department queries
export async function getDepartments() {
  try {
    const result = await client.fetch(`*[_type == "department"] | order(order asc) {
      _id,
      name,
      "slug": slug.current,
      iconName,
      order
    }`)
    return result || []
  } catch (error) {
    console.error("Error fetching departments:", error)
    return []
  }
}

export async function getNavbarDepartments() {
  try {
    const result = await client.fetch(`*[_type == "department" && (showInNavbar == true || showInNavbar == null)] | order(order asc) {
      _id,
      name,
      "slug": slug.current
    }`)
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
    return result
  } catch (error) {
    console.error(`Error fetching department with slug ${slug}:`, error)
    return null
  }
}

// Hero section query
export async function getHero() {
  try {
    const result = await client.fetch(`*[_type == "hero"][0] {
      heading,
      description,
      "backgroundImage": backgroundImage.asset->url,
      "mainImage": mainImage.asset->url,
      buttonText
    }`)
    return result
  } catch (error) {
    console.error("Error fetching hero data:", error)
    return null
  }
}

// Home About section query
export async function getHomeAbout() {
  try {
    const result = await client.fetch(`*[_type == "homeAbout"][0] {
      title,
      description
    }`)
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
  return client.fetch(`*[_type == "doctors" && slug.current == $slug][0] {
    name,
    "slug": slug.current,
    "image": image.asset->url,
    role,
    description,
    bio
  }`, { slug })
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
  const result = await client.fetch(`
    *[_type == "gallery"] | order(order asc) {
      _id,
      title,
      description,
      order,
      "imageUrl": image.asset->url
    }
  `);
  
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
  const result = await client.fetch(`
    *[_type == "news"] | order(order asc) {
      _id,
      title,
      publishedAt,
      order,
      "imageUrl": image.asset->url
    }
  `);
  
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