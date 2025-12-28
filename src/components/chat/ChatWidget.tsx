import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);

  useEffect(() => {
    // Show teaser after 20 seconds or 40% scroll
    const timer = setTimeout(() => setShowTeaser(true), 20000);
    
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40) setShowTeaser(true);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Teaser bubble */}
      <AnimatePresence>
        {showTeaser && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 max-w-xs"
          >
            <div className="bg-card rounded-xl shadow-card-hover p-4 relative">
              <button 
                onClick={() => setShowTeaser(false)}
                className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20"
              >
                <X className="w-3 h-3" />
              </button>
              <p className="text-sm font-body text-foreground mb-3">
                👋 Besoin d'aide ? Notre assistant peut répondre à vos questions !
              </p>
              <Button size="sm" variant="hero" onClick={() => setIsOpen(true)} className="w-full">
                Discuter maintenant
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card rounded-2xl shadow-2xl overflow-hidden border border-border"
          >
            {/* Header */}
            <div className="bg-hero-gradient text-primary-foreground p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Assistant GDB</h3>
                  <p className="text-xs opacity-80">Disponible 24/7</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-primary-foreground/10 rounded-lg">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Discuter avec l'assistant</h4>
              <p className="text-muted-foreground text-sm font-body mb-6">
                Notre assistant IA peut répondre à toutes vos questions sur la vie étudiante en France.
              </p>
              <Button variant="hero" className="w-full" asChild>
                <a 
                  href="https://chatgpt.com/g/g-auIrE8E6l-assistant-guide-du-bleu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Ouvrir le chat
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                💡 Ce chatbot peut faire des erreurs.{" "}
                <a href="/confidentialite" className="underline">Politique de confidentialité</a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl flex items-center justify-center animate-pulse-glow"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </motion.button>
    </>
  );
};
