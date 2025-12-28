import { Shield, FileText, CheckCircle, CreditCard } from 'lucide-react';
import type { GuideContent } from './types';

export const securiteSocialeGuide: GuideContent = {
  id: 'securite-sociale',
  slug: 'securite-sociale',
  title: 'S\'inscrire à la sécurité sociale',
  description: 'Inscription à la sécurité sociale et accès aux soins en France.',
  category: 'Santé',
  icon: Shield,
  readTime: '10 min',
  lastUpdated: '2024-12-28',
  sections: [
    {
      id: 'introduction',
      title: 'Introduction',
    },
    {
      id: 'inscription',
      title: 'Inscription sur Ameli',
      icon: CheckCircle,
    },
    {
      id: 'documents',
      title: 'Documents nécessaires',
      icon: FileText,
    },
    {
      id: 'carte-vitale',
      title: 'Obtenir sa carte Vitale',
      icon: CreditCard,
    },
    {
      id: 'mutuelle',
      title: 'Choisir une mutuelle',
      icon: Shield,
    },
    {
      id: 'medecin-traitant',
      title: 'Déclarer un médecin traitant',
    },
    {
      id: 'faq',
      title: 'Questions fréquentes',
    },
  ],
  relatedGuides: ['titre-sejour', 'logement'],
};
