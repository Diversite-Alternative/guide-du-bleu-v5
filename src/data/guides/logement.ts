import { Home, Search, FileText, CheckCircle, AlertCircle, Euro } from 'lucide-react';
import type { GuideContent } from './types';

export const logementGuide: GuideContent = {
  id: 'logement',
  slug: 'logement',
  title: 'Trouver un logement étudiant',
  description: 'Résidences CROUS, colocation, appartement privé : toutes les options pour vous loger.',
  category: 'Logement',
  icon: Home,
  readTime: '12 min',
  lastUpdated: '2024-12-28',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'types-logement',
      title: 'Types de logement',
      icon: Home,
    },
    {
      id: 'crous',
      title: 'Résidences CROUS',
      icon: CheckCircle,
    },
    {
      id: 'recherche',
      title: 'Rechercher un logement',
      icon: Search,
    },
    {
      id: 'documents',
      title: 'Dossier de location',
      icon: FileText,
    },
    {
      id: 'aides',
      title: 'Aides au logement (APL)',
      icon: Euro,
    },
    {
      id: 'erreurs-courantes',
      title: 'Erreurs à éviter',
      icon: AlertCircle,
    },
    {
      id: 'faq',
      title: 'Questions fréquentes',
    },
  ],
  relatedGuides: ['titre-sejour', 'securite-sociale'],
};
