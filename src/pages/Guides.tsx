import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Home, 
  FileText, 
  CreditCard, 
  Shield, 
  Users,
  Briefcase,
  Train,
  ArrowRight,
  Clock,
  CheckCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const guides = [
  {
    id: "logement",
    icon: Home,
    title: "Trouver un logement",
    description: "Résidences CROUS, colocation, appartement privé : toutes les options pour vous loger.",
    readTime: "12 min",
    topics: ["CROUS", "Garant", "Caution", "APL"],
    color: "primary",
  },
  {
    id: "titre-sejour",
    icon: FileText,
    title: "Titre de séjour",
    description: "Les démarches pour obtenir et renouveler votre titre de séjour étudiant.",
    readTime: "15 min",
    topics: ["VLS-TS", "Préfecture", "OFII", "Renouvellement"],
    color: "secondary",
  },
  {
    id: "securite-sociale",
    icon: Shield,
    title: "Sécurité sociale",
    description: "Inscription à la sécurité sociale et accès aux soins en France.",
    readTime: "8 min",
    topics: ["Ameli", "Carte Vitale", "Mutuelle", "Médecin"],
    color: "success",
  },
  {
    id: "banque",
    icon: CreditCard,
    title: "Banque & Finances",
    description: "Ouvrir un compte bancaire et gérer vos finances en tant qu'étudiant.",
    readTime: "10 min",
    topics: ["Compte", "RIB", "Carte", "Bourses"],
    color: "warning",
  },
  {
    id: "scolarite",
    icon: BookOpen,
    title: "Scolarité",
    description: "Inscription universitaire, équivalences et vie étudiante en France.",
    readTime: "14 min",
    topics: ["Inscription", "Parcoursup", "CVEC", "Diplômes"],
    color: "primary",
  },
  {
    id: "transport",
    icon: Train,
    title: "Transport",
    description: "Se déplacer en France : métro, bus, train et réductions étudiantes.",
    readTime: "6 min",
    topics: ["Navigo", "TGV", "Vélo", "Réductions"],
    color: "accent",
  },
  {
    id: "travail",
    icon: Briefcase,
    title: "Travail étudiant",
    description: "Travailler pendant vos études : droits, limites et conseils.",
    readTime: "9 min",
    topics: ["20h/semaine", "Stage", "Alternance", "Impôts"],
    color: "secondary",
  },
  {
    id: "vie-quotidienne",
    icon: Users,
    title: "Vie quotidienne",
    description: "Téléphonie, courses, loisirs : s'intégrer dans la vie française.",
    readTime: "7 min",
    topics: ["Forfait", "Supermarché", "Associations", "Culture"],
    color: "primary",
  },
];

const categories = [
  { id: "all", label: "Tous les guides" },
  { id: "administratif", label: "Administratif" },
  { id: "logement", label: "Logement" },
  { id: "finance", label: "Finances" },
  { id: "quotidien", label: "Vie quotidienne" },
];

const GuidesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-accent/50 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Guides pratiques
            </span>
            <h1 className="text-display-md md:text-display-lg font-bold mb-6">
              Tous nos guides pour réussir en France
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Des guides complets, étape par étape, rédigés par des étudiants qui sont passés par là. 
              Tout ce que vous devez savoir pour votre arrivée et votre vie en France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {guides.map((guide, index) => {
              const Icon = guide.icon;
              return (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card hover variant="default" className="h-full flex flex-col">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{guide.title}</CardTitle>
                      <CardDescription>{guide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {guide.topics.map((topic) => (
                          <span
                            key={topic}
                            className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs font-medium"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{guide.readTime}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/guides/${guide.id}`}>
                          Lire
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-display-sm font-bold mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Notre assistant IA peut répondre à toutes vos questions sur la vie étudiante en France.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a 
                href="https://chatgpt.com/g/g-auIrE8E6l-assistant-guide-du-bleu" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Discuter avec l'assistant
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GuidesPage;
