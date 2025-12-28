import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Search, MessageCircle, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const faqCategories = [
  {
    id: "arrivee",
    title: "Arrivée en France",
    questions: [
      {
        question: "Quelles sont les premières démarches à faire en arrivant en France ?",
        answer: "Dès votre arrivée, les étapes prioritaires sont : 1) Valider votre visa VLS-TS en ligne, 2) Trouver un logement, 3) Ouvrir un compte bancaire, 4) S'inscrire à la sécurité sociale (Ameli.fr), 5) Finaliser votre inscription universitaire. Notre guide détaillé vous accompagne pas à pas.",
      },
      {
        question: "Combien de temps ai-je pour valider mon visa VLS-TS ?",
        answer: "Vous avez 3 mois après votre entrée en France pour valider votre visa VLS-TS. Cette validation se fait en ligne sur le site de l'OFII et coûte 60€ (tarif 2024). C'est une étape obligatoire pour pouvoir demander un titre de séjour par la suite.",
      },
      {
        question: "Dois-je prendre rendez-vous à la préfecture dès mon arrivée ?",
        answer: "Non, pas immédiatement. Si vous avez un visa VLS-TS valant titre de séjour, vous devez d'abord le valider en ligne. Vous n'aurez besoin de vous rendre à la préfecture que pour le renouvellement, généralement 2 à 3 mois avant l'expiration de votre titre.",
      },
    ],
  },
  {
    id: "logement",
    title: "Logement",
    questions: [
      {
        question: "Comment trouver un logement étudiant en France ?",
        answer: "Plusieurs options s'offrent à vous : les résidences CROUS (demande via trouverunlogement.lescrous.fr), les résidences privées étudiantes, la colocation, ou le logement chez un particulier. Pour les étudiants internationaux, les résidences sont souvent plus accessibles car elles ne demandent pas toujours de garant français.",
      },
      {
        question: "Ai-je besoin d'un garant pour louer un appartement ?",
        answer: "Généralement oui. Si vous n'avez pas de garant en France, vous pouvez utiliser la garantie Visale (gratuite, fournie par Action Logement) qui se porte caution pour vous. C'est une solution très utilisée par les étudiants internationaux.",
      },
      {
        question: "Qu'est-ce que l'APL et comment en bénéficier ?",
        answer: "L'APL (Aide Personnalisée au Logement) est une aide de la CAF qui réduit votre loyer. La plupart des étudiants y ont droit, quelle que soit leur nationalité. Faites votre demande sur caf.fr dès que vous avez signé votre bail.",
      },
    ],
  },
  {
    id: "sante",
    title: "Santé & Sécurité sociale",
    questions: [
      {
        question: "Comment m'inscrire à la sécurité sociale française ?",
        answer: "L'inscription se fait sur ameli.fr. Vous aurez besoin de votre attestation d'inscription universitaire, d'un justificatif d'identité et d'un RIB. Le traitement peut prendre 1 à 2 mois. En attendant, conservez votre attestation de droits.",
      },
      {
        question: "Ai-je besoin d'une mutuelle en plus de la sécurité sociale ?",
        answer: "La sécurité sociale rembourse environ 70% des frais médicaux. Une mutuelle étudiante (complémentaire santé) peut couvrir le reste. Certaines mutuelles sont gratuites pour les étudiants boursiers ou à faibles revenus.",
      },
      {
        question: "Comment trouver un médecin traitant ?",
        answer: "Vous pouvez chercher un médecin sur Doctolib ou Ameli.fr. Une fois choisi, déclarez-le comme votre médecin traitant auprès de la sécurité sociale pour bénéficier d'un meilleur remboursement.",
      },
    ],
  },
  {
    id: "banque",
    title: "Banque & Finances",
    questions: [
      {
        question: "Comment ouvrir un compte bancaire en France ?",
        answer: "La plupart des banques demandent : une pièce d'identité, un justificatif de domicile, et une attestation d'inscription. Certaines banques en ligne (comme N26, Revolut) sont plus accessibles pour commencer. Les banques traditionnelles proposent souvent des offres étudiantes gratuites.",
      },
      {
        question: "Quelles aides financières puis-je obtenir en tant qu'étudiant étranger ?",
        answer: "Vous pouvez bénéficier de l'APL (aide au logement), des bourses sur critères sociaux (sous conditions), des aides d'urgence du CROUS, et parfois de bourses de votre pays d'origine. Consultez le CROUS de votre académie pour plus d'informations.",
      },
    ],
  },
  {
    id: "travail",
    title: "Travail étudiant",
    questions: [
      {
        question: "Ai-je le droit de travailler en France avec un visa étudiant ?",
        answer: "Oui, les étudiants non-européens peuvent travailler jusqu'à 964 heures par an (soit environ 20h par semaine). Aucune autorisation supplémentaire n'est nécessaire. Attention : cette limite est stricte et son dépassement peut entraîner des complications pour le renouvellement de votre titre de séjour.",
      },
      {
        question: "Comment trouver un job étudiant ?",
        answer: "Consultez les offres sur Indeed, Studentjob, les sites des CROUS, ou les panneaux d'affichage de votre université. Les secteurs qui recrutent le plus : restauration, commerce, babysitting, cours particuliers.",
      },
    ],
  },
];

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleItem = (id: string) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredCategories = faqCategories
    .map((category) => ({
      ...category,
      questions: category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.questions.length > 0);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-accent/50 to-background">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQ
            </span>
            <h1 className="text-display-md md:text-display-lg font-bold mb-6">
              Questions fréquentes
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed mb-8">
              Retrouvez les réponses aux questions les plus posées par les étudiants 
              internationaux en France.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher une question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-base"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl">
          {filteredCategories.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Aucun résultat pour "{searchQuery}"
              </p>
              <Button variant="outline" onClick={() => setSearchQuery("")}>
                Effacer la recherche
              </Button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-xl font-semibold mb-4 text-primary">
                    {category.title}
                  </h2>
                  <div className="space-y-3">
                    {category.questions.map((item, index) => {
                      const itemId = `${category.id}-${index}`;
                      const isOpen = openItems.includes(itemId);
                      
                      return (
                        <div
                          key={itemId}
                          className="border border-border rounded-xl overflow-hidden bg-card"
                        >
                          <button
                            onClick={() => toggleItem(itemId)}
                            className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
                          >
                            <span className="font-medium pr-4">{item.question}</span>
                            <ChevronDown
                              className={cn(
                                "w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-200",
                                isOpen && "rotate-180"
                              )}
                            />
                          </button>
                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                <div className="px-5 pb-5 text-muted-foreground font-body leading-relaxed">
                                  {item.answer}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
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
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-display-sm font-bold mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-muted-foreground font-body mb-8">
              Notre assistant IA est disponible 24h/24 pour répondre à toutes vos questions.
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

export default FAQPage;
