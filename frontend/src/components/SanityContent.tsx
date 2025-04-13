'use client'

import { PortableText } from '@portabletext/react'
import { cn } from '@/lib/utils'

interface SanityContentProps {
  content: any; // Using 'any' for PortableText content
  className?: string;
}

export default function SanityContent({ content, className }: SanityContentProps) {
  return (
    <div className={cn("prose max-w-none", className)}>
      <PortableText value={content} />
    </div>
  )
} 