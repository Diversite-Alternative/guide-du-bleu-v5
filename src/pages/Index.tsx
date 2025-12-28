import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Home as HomeIcon, 
  FileText, 
  CreditCard, 
  Shield, 
  Users, 
  ArrowRight,
  CheckCircle,
  MessageCircle,
  Sparkles,
  GraduationCap,
  MapPin
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { StatCard } from "@/components/ui/stat-card";
import heroImage from "@/assets/hero-student-france.jpg";

const features = [
  {
    icon: HomeIcon,
    title: "Logement",
    description: "Trouvez votre logement étudiant : résidences CROUS, colocation, ou appartement privé.",
  },
  {
    icon: FileText,
    title: "Titre de séjour",
    description: "Toutes les démarches pour obtenir et renouveler votre titre de séjour étudiant.",
  },
  {
    icon: Shield,
    title: "Sécurité sociale",
    description: "Inscrivez-vous à la sécurité sociale étudiante et accédez aux soins en France.",
  },
  {
    icon: CreditCard,
    title: "Banque & Finances",
    description: "Ouvrez un compte bancaire et gérez vos finances en tant qu'étudiant international.",
  },
  {
    icon: BookOpen,
    title: "Scolarité",
    description: "Inscription universitaire, équivalences de diplômes et vie étudiante.",
  },
  {
    icon: Users,
    title: "Vie quotidienne",
    description: "Transport, téléphonie, courses : tout pour vous intégrer rapidement.",
  },
];

const stats = [
  { value: "58 000+", label: "Étudiants accompagnés" },
  { value: "15+", label: "Guides pratiques" },
  { value: "100%", label: "Gratuit" },
  { value: "24/7", label: "Assistant IA disponible" },
];

const testimonials = [
  {
    quote: "Grâce au Guide du Bleu, j'ai pu m'installer en France sans stress. Toutes les démarches étaient expliquées clairement !",
    author: "Sarah M.",
    role: "Étudiante en Master, Paris",
    rating: 5,
  },
  {
    quote: "Le chatbot m'a vraiment aidé à comprendre les démarches pour mon titre de séjour. Indispensable !",
    author: "Ahmed K.",
    role: "Étudiant en Licence, Lyon",
    rating: 5,
  },
  {
    quote: "Un guide complet et à jour. J'aurais aimé l'avoir quand je suis arrivée il y a 3 ans.",
    author: "Maria L.",
    role: "Doctorante, Toulouse",
    rating: 5,
  },
];

const steps = [
  {
    step: "01",
    title: "Consultez nos guides",
    description: "Des guides étape par étape pour chaque démarche administrative.",
  },
  {
    step: "02",
    title: "Posez vos questions",
    description: "Notre assistant IA répond à toutes vos questions 24h/24.",
  },
  {
    step: "03",
    title: "Réussissez votre arrivée",
    description: "Installez-vous sereinement et concentrez-vous sur vos études.",
  },
];

const Home = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
                <Sparkles className="w-4 h-4" />
                Le guide de référence pour les étudiants étrangers
              </span>
              
              <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-bold mb-6">
                Bienvenue{" "}
                <span className="text-gradient-primary">en France</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed mb-8 max-w-xl">
                Votre guide complet pour réussir votre arrivée et vos études en France. 
                Logement, titre de séjour, sécurité sociale — tout est expliqué, étape par étape.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/guides">
                    Commencer maintenant
                    <ArrowRight className="w-5 h-5 ml-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a 
                    href="https://chatgpt.com/g/g-auIrE8E6l-assistant-guide-du-bleu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5 mr-1" />
                    Discuter avec GDB
                  </a>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>100% gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Mis à jour régulièrement</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  <span>Par des étudiants, pour des étudiants</span>
                </div>
              </div>
            </motion.div>

            {/* Right: Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Étudiant international arrivant en France" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>
              
              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 md:-left-12 bg-card p-4 rounded-xl shadow-card-hover"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <p className="font-semibold">+58 000</p>
                    <p className="text-sm text-muted-foreground">étudiants accompagnés</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.label} 
                {...stat} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            badge="Nos guides"
            title="Tout ce dont vous avez besoin"
            description="Des guides pratiques et détaillés pour chaque étape de votre installation en France."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title} 
                {...feature} 
                delay={index * 0.1} 
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="default" size="lg" asChild>
              <Link to="/guides">
                Voir tous les guides
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 md:py-32 bg-accent/50">
        <div className="container">
          <SectionHeader
            badge="Comment ça marche"
            title="3 étapes simples"
            description="Suivez notre méthode pour une arrivée en France réussie."
          />
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground font-body">{item.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 right-0 w-1/3 border-t-2 border-dashed border-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            badge="Témoignages"
            title="Ils nous font confiance"
            description="Découvrez ce que les étudiants disent du Guide du Bleu."
          />
          
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={testimonial.author} 
                {...testimonial} 
                delay={index * 0.1} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-hero-gradient text-primary-foreground">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-display-sm md:text-display-md font-bold mb-6">
              Prêt à commencer votre aventure ?
            </h2>
            <p className="text-xl text-primary-foreground/80 font-body mb-10">
              Rejoignez des milliers d'étudiants qui ont réussi leur installation en France grâce au Guide du Bleu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="hero-outline" 
                size="xl"
                className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link to="/guides">
                  Explorer les guides
                </Link>
              </Button>
              <Button 
                variant="secondary" 
                size="xl" 
                asChild
              >
                <Link to="/contact">
                  Nous contacter
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
