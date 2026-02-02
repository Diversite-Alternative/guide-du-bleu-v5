import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { 
  Search,
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
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { StatCard } from "@/components/ui/stat-card";
import logoDA from "@/assets/logo-diversite-alternative.png";
import heroIllustration from "@/assets/gdb-illustration.png";

const popularSearches = [
  { label: "Titre de séjour", query: "titre de séjour" },
  { label: "Logement CROUS", query: "logement crous" },
  { label: "Sécurité sociale", query: "sécurité sociale" },
  { label: "Compte bancaire", query: "ouvrir compte bancaire" },
  { label: "CAF", query: "caf apl aides" },
  { label: "Inscription université", query: "inscription université" },
];

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

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recherche?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleQuickSearch = (query: string) => {
    navigate(`/recherche?q=${encodeURIComponent(query)}`);
  };

  return (
    <Layout>
      {/* Hero Section - Google Style with Illustration */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Search Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
            >
              {/* Logo / Branding */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <h1 className="text-display-md md:text-display-lg lg:text-display-xl font-bold mb-4">
                  <span className="text-[#ED2939]">Guide</span>{" "}
                  <span className="text-foreground">du</span>{" "}
                  <span className="text-[#002395]">Bleu</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl">
                  Le moteur de recherche des étudiants primo-arrivants en France
                </p>
              </motion.div>

              {/* Search Bar */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSearch}
                className="relative mb-6"
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center bg-card border-2 border-border hover:border-primary/50 focus-within:border-primary focus-within:shadow-glow rounded-full transition-all duration-300">
                    <Search className="w-5 h-5 ml-5 text-muted-foreground" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Logement, titre de séjour, CAF..."
                      className="flex-1 px-4 py-4 bg-transparent text-base md:text-lg placeholder:text-muted-foreground/70 focus:outline-none"
                    />
                    <Button 
                      type="submit" 
                      variant="default" 
                      size="lg"
                      className="mr-2 rounded-full px-5"
                    >
                      Rechercher
                    </Button>
                  </div>
                </div>
              </motion.form>

              {/* Popular Searches */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8"
              >
                {popularSearches.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleQuickSearch(item.query)}
                    className="px-3 py-1.5 text-sm bg-accent hover:bg-primary/10 hover:text-primary rounded-full transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                ))}
              </motion.div>

              {/* Trust badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-muted-foreground mb-6"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>100% gratuit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span>+58 000 accompagnés</span>
                </div>
              </motion.div>

              {/* Partner & CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>En partenariat avec</span>
                  <img 
                    src={logoDA} 
                    alt="Diversité Alternative" 
                    className="h-8 object-contain"
                  />
                </div>
                <Button variant="outline" size="default" asChild className="rounded-full">
                  <a 
                    href="https://chatgpt.com/g/g-auIrE8E6l-assistant-guide-du-bleu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Assistant IA
                  </a>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 30, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-60" />
                <img 
                  src={heroIllustration} 
                  alt="Étudiants en France" 
                  className="relative rounded-2xl shadow-2xl max-w-md w-full object-cover"
                />
                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Votre guide complet</span>
                  </div>
                </motion.div>
              </div>
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

      {/* Features / Categories Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <SectionHeader
            badge="Explorer par thème"
            title="Tous nos guides pratiques"
            description="Des guides détaillés pour chaque étape de votre installation en France."
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

      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-accent/50">
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
