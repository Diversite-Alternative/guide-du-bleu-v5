// Export des types
export * from './types';

// Export de tous les guides
export { titreSejourGuide } from './titre-sejour';
export { securiteSocialeGuide } from './securite-sociale';
export { logementGuide } from './logement';

// Liste complète des guides
import { titreSejourGuide } from './titre-sejour';
import { securiteSocialeGuide } from './securite-sociale';
import { logementGuide } from './logement';
import type { GuideContent } from './types';

export const allGuides: GuideContent[] = [
  titreSejourGuide,
  securiteSocialeGuide,
  logementGuide,
];

export const getGuideBySlug = (slug: string): GuideContent | undefined => {
  return allGuides.find(guide => guide.slug === slug);
};
