import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FileCheck, 
  Users, 
  MessageCircle, 
  BookOpen,
  GraduationCap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
  {
    icon: BookOpen,
    title: "Guides pratiques",
    description: "Des guides complets et à jour pour chaque étape de votre installation en France.",
    features: [
      "15+ guides thématiques",
      "Mis à jour régulièrement",
      "Étapes détaillées",
      "100% gratuit",
    ],
    cta: "Voir les guides",
    href: "/guides",
    highlight: true,
  },
  {
    icon: MessageCircle,
    title: "Assistant IA",
    description: "Un chatbot intelligent pour répondre à toutes vos questions 24h/24.",
    features: [
      "Disponible 24/7",
      "Réponses instantanées",
      "Recommandations personnalisées",
      "Basé sur nos guides",
    ],
    cta: "Discuter maintenant",
    href: "https://chatgpt.com/g/g-auIrE8E6l-assistant-guide-du-bleu",
    external: true,
    highlight: false,
  },
  {
    icon: Users,
    title: "Communauté",
    description: "Rejoignez une communauté d'étudiants internationaux qui s'entraident.",
    features: [
      "Échange d'expériences",
      "Conseils pratiques",
      "Réseau d'entraide",
      "Événements",
    ],
    cta: "Rejoindre",
    href: "https://diversitealternative.org/",
    external: true,
    highlight: false,
  },
];

const benefits = [
  {
    title: "Gratuit et accessible",
    description: "Tous nos contenus sont gratuits et accessibles à tous les étudiants.",
  },
  {
    title: "Par des étudiants",
    description: "Rédigé par des étudiants qui ont vécu les mêmes démarches.",
  },
  {
    title: "À jour",
    description: "Nos guides sont régulièrement mis à jour avec les dernières informations.",
  },
  {
    title: "Complet",
    description: "Du visa au titre de séjour, tout est couvert pour votre arrivée.",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-secondary/5 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              Nos services
            </span>
            <h1 className="text-display-md md:text-display-lg font-bold mb-6">
              Comment pouvons-nous vous aider ?
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed">
              Découvrez nos outils gratuits pour faciliter votre arrivée et votre vie en France.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card 
                    variant={service.highlight ? "gradient" : "default"} 
                    className="h-full flex flex-col"
                  >
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                        service.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"
                      }`}>
                        <Icon className={`w-7 h-7 ${service.highlight ? "" : "text-primary"}`} />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-3 mb-6">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-success shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div className="p-6 pt-0">
                      <Button 
                        variant={service.highlight ? "hero" : "outline"} 
                        className="w-full"
                        asChild
                      >
                        {service.external ? (
                          <a href={service.href} target="_blank" rel="noopener noreferrer">
                            {service.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </a>
                        ) : (
                          <Link to={service.href}>
                            {service.cta}
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        )}
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-24 bg-accent/50">
        <div className="container">
          <SectionHeader
            badge="Pourquoi nous choisir"
            title="Des ressources de confiance"
            description="Ce qui fait la différence du Guide du Bleu."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground font-body text-sm">{benefit.description}</p>
              </motion.div>
            ))}
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
            <GraduationCap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-display-sm font-bold mb-4">
              Prêt à commencer ?
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Explorez nos guides ou discutez avec notre assistant pour obtenir 
              des réponses personnalisées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/guides">
                  Explorer les guides
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a 
                  href="https://chatgpt.com/g/g-auIrE8E6l-assistant-guide-du-bleu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Discuter avec GDB
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
