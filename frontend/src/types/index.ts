import { PortableTextBlock } from '@portabletext/types'

export interface Doctor {
  name: string;
  slug: string;
  role: string;
  image: string;
  description: PortableTextBlock[];
  bio?: PortableTextBlock[];
} 