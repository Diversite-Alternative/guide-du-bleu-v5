import { LucideIcon } from 'lucide-react';

export interface GuideSection {
  id: string;
  title: string;
  icon?: LucideIcon;
}

export interface GuideContent {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  readTime: string;
  lastUpdated: string;
  sections: GuideSection[];
  relatedGuides: string[];
}
