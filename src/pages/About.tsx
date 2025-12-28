import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  ArrowRight,
  Users,
  BookOpen,
  MessageCircle,
  Heart,
  Globe,
  Lightbulb
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Solidarité",
    description: "Créé par des étudiants pour des étudiants, dans un esprit d'entraide.",
  },
  {
    icon: BookOpen,
    title: "Accessibilité",
    description: "Des contenus gratuits, clairs et accessibles à tous.",
  },
  {
    icon: Globe,
    title: "Diversité",
    description: "Nous célébrons la richesse des parcours et des cultures.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Des outils modernes comme notre assistant IA pour vous aider.",
  },
];

const team = [
  {
    name: "L'équipe Diversité Alternative",
    role: "Association fondatrice",
    description: "Une association qui œuvre pour l'inclusion et l'accompagnement des étudiants internationaux en France.",
  },
];

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Notre mission
            </span>
            <h1 className="text-display-md md:text-display-lg font-bold mb-6">
              À propos du Guide du Bleu
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Le Guide du Bleu est né d'une conviction simple : aucun étudiant ne devrait 
              se sentir perdu en arrivant dans un nouveau pays. Nous sommes là pour vous 
              accompagner dans chaque étape de votre aventure française.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-display-sm font-bold mb-6">Notre histoire</h2>
              <div className="space-y-4 text-muted-foreground font-body leading-relaxed">
                <p>
                  Comme plus de 58 000 étudiants chaque année, nous sommes arrivés en France 
                  avec un visa en poche et beaucoup de questions en tête.
                </p>
                <p>
                  Face au labyrinthe administratif français, nous avons décidé de créer 
                  le guide que nous aurions aimé avoir : clair, complet et pratique.
                </p>
                <p>
                  Aujourd'hui, le Guide du Bleu est porté par{" "}
                  <a 
                    href="https://diversitealternative.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline font-semibold"
                  >
                    Diversité Alternative
                  </a>
                  , une association engagée pour l'inclusion des étudiants internationaux.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-6xl font-bold text-primary mb-4">58 000+</p>
                  <p className="text-xl text-muted-foreground">
                    étudiants internationaux accompagnés chaque année
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="container">
          <SectionHeader
            badge="Nos valeurs"
            title="Ce qui nous guide"
            description="Nos principes pour vous offrir le meilleur accompagnement possible."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card variant="default" className="h-full text-center p-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-muted-foreground font-body text-sm">{value.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-display-sm font-bold mb-4">
              Envie de contribuer ?
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Le Guide du Bleu est un projet collaboratif. Si vous souhaitez partager 
              votre expérience ou nous aider à améliorer nos contenus, contactez-nous !
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" asChild>
                <Link to="/contact">
                  Nous contacter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://diversitealternative.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Découvrir Diversité Alternative
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
