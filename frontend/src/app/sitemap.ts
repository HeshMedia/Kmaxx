import { getDoctors, getDepartments, getBlogs } from '@/lib/sanity'
import { MetadataRoute } from 'next'

// Define types for Sanity data
interface Doctor {
  slug: string;
}

interface Department {
  slug: string;
}

interface Blog {
  slug: string;
  publishedAt: string;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base URL for the site
  const baseUrl = 'https://kmaxx.in'
  
  // Get the current date for lastModified
  const currentDate = new Date()
  
  // Static routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/doctors`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic routes for doctors from Sanity
  const doctors = await getDoctors()
  const doctorRoutes = doctors.map((doctor: Doctor) => ({
    url: `${baseUrl}/doctors/${doctor.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic routes for departments from Sanity
  const departments = await getDepartments()
  const departmentRoutes = departments.map((department: Department) => ({
    url: `${baseUrl}/departments/${department.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Dynamic routes for blogs from Sanity
  const blogs = await getBlogs()
  const blogRoutes = blogs.map((blog: Blog) => ({
    url: `${baseUrl}/blogs/${blog.slug}`,
    lastModified: new Date(blog.publishedAt) || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  // Combine all routes
  return [...staticRoutes, ...doctorRoutes, ...departmentRoutes, ...blogRoutes]
} 