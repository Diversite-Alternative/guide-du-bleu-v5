import { FileText, Calendar, MapPin, CheckCircle, AlertCircle, Users, ExternalLink } from 'lucide-react';
import type { GuideContent } from './types';

export const titreSejourGuide: GuideContent = {
  id: 'titre-sejour',
  slug: 'titre-sejour',
  title: 'Obtenir et renouveler son titre de séjour',
  description: 'Toutes les étapes pour obtenir et renouveler votre titre de séjour étudiant en France.',
  category: 'Administratif',
  icon: FileText,
  readTime: '15 min',
  lastUpdated: '2024-12-28',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'vls-ts',
      title: 'Validation du VLS-TS',
      icon: CheckCircle,
    },
    {
      id: 'documents',
      title: 'Documents nécessaires',
      icon: FileText,
    },
    {
      id: 'etapes',
      title: 'Étapes détaillées',
      icon: Calendar,
    },
    {
      id: 'renouvellement',
      title: 'Renouvellement',
      icon: Calendar,
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
  relatedGuides: ['securite-sociale', 'logement'],
};
