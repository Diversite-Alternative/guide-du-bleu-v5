import { useState, useEffect } from 'react';
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Layout } from '@/components/layout/Layout';
import type { GuideContent } from '@/data/guides';
import { allGuides } from '@/data/guides';

interface GuideLayoutProps {
    guide: GuideContent;
    children: React.ReactNode;
}

export const GuideLayout = ({ guide, children }: GuideLayoutProps) => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    // Détection du scroll pour la sidebar sticky
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Intersection Observer pour la navigation active
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-100px 0px -80% 0px' }
        );

        guide.sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [guide.sections]);

    const handleSectionClick = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    const Icon = guide.icon;

    // Récupérer les guides connexes
    const relatedGuidesData = guide.relatedGuides
        .map(slug => allGuides.find(g => g.slug === slug))
        .filter((guide): guide is GuideContent => guide !== undefined);

    return (
        <Layout>
            {/* Hero compact */}
            <section className="pt-32 pb-8 md:pt-40 md:pb-12 bg-gradient-to-b from-primary/5 to-background">
                <div className="container">
                    <Link to="/guides" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Retour aux guides
                    </Link>

                    <div className="flex items-start gap-6">
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                            <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                            <span className="inline-block px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-3">
                                {guide.category}
                            </span>
                            <h1 className="text-display-sm md:text-display-md font-bold mb-4">
                                {guide.title}
                            </h1>
                            <p className="text-lg text-muted-foreground mb-6 max-w-3xl">
                                {guide.description}
                            </p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{guide.readTime} de lecture</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    <span>Mis à jour le {new Date(guide.lastUpdated).toLocaleDateString('fr-FR')}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contenu avec sidebar */}
            <section className="py-12 md:py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                        {/* Sidebar */}
                        <aside className="lg:col-span-3">
                            <div className={`lg:sticky transition-all duration-300 ${isScrolled ? 'top-24' : 'top-32'}`}>
                                <Card className="p-4">
                                    <h3 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wide">
                                        Sommaire
                                    </h3>
                                    <nav className="space-y-1">
                                        {guide.sections.map((section) => {
                                            const SectionIcon = section.icon;
                                            const isActive = activeSection === section.id;

                                            return (
                                                <button
                                                    key={section.id}
                                                    onClick={() => handleSectionClick(section.id)}
                                                    className={`w-full text-left px-3 py-2 rounded-lg transition-all flex items-center gap-2 group ${isActive
                                                        ? 'bg-primary text-primary-foreground font-medium'
                                                        : 'hover:bg-accent text-muted-foreground hover:text-foreground'
                                                        }`}
                                                >
                                                    {SectionIcon && (
                                                        <SectionIcon className={`w-4 h-4 shrink-0 ${isActive ? 'text-primary-foreground' : 'text-muted-foreground'}`} />
                                                    )}
                                                    <span className="text-sm flex-1">{section.title}</span>
                                                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                                                </button>
                                            );
                                        })}
                                    </nav>

                                    {/* Actions */}
                                    <div className="mt-6 pt-6 border-t space-y-2">
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            <Bookmark className="w-4 h-4 mr-2" />
                                            Enregistrer
                                        </Button>
                                        <Button variant="outline" size="sm" className="w-full justify-start">
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Partager
                                        </Button>
                                    </div>
                                </Card>
                            </div>
                        </aside>

                        {/* Contenu principal */}
                        <main className="lg:col-span-9">
                            <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-p:text-muted-foreground prose-p:leading-relaxed prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-foreground prose-ul:text-muted-foreground prose-li:text-muted-foreground">
                                {children}
                            </article>

                            {/* Guides connexes */}
                            {relatedGuidesData.length > 0 && (
                                <div className="mt-16 pt-12 border-t">
                                    <h3 className="font-semibold text-xl mb-6">Guides connexes</h3>
                                    <div className="grid md:grid-cols-3 gap-4">
                                        {relatedGuidesData.map((relatedGuide) => {
                                            const RelatedIcon = relatedGuide.icon;
                                            return (
                                                <Card key={relatedGuide.slug} hover className="p-4">
                                                    <Link to={`/guides/${relatedGuide.slug}`} className="block group">
                                                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                                                            <RelatedIcon className="w-5 h-5 text-primary" />
                                                        </div>
                                                        <h4 className="font-medium mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                                                            {relatedGuide.title}
                                                        </h4>
                                                        <span className="text-sm text-primary flex items-center gap-1">
                                                            Lire le guide
                                                            <ChevronRight className="w-4 h-4" />
                                                        </span>
                                                    </Link>
                                                </Card>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </main>
                    </div>
                </div>
            </section>
        </Layout>
    );
};
