import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Search, X, FileText, MessageCircle, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { searchIndex, type SearchResult } from '@/lib/searchIndex';

interface GoogleBleuSearchProps {
  /** Afficher le logo "Guide du Bleu" */
  showLogo?: boolean;
  /** Afficher la description sous le logo */
  showDescription?: boolean;
  /** Afficher les recherches populaires */
  showPopularSearches?: boolean;
  /** Liste personnalisée de recherches populaires */
  popularSearches?: Array<{ label: string; query: string }>;
  /** Placeholder du champ de recherche */
  placeholder?: string;
  /** Nombre maximum de résultats à afficher */
  maxResults?: number;
  /** Alignement du contenu (center ou left) */
  align?: 'center' | 'left';
  /** Classes CSS additionnelles pour le conteneur */
  className?: string;
}

const defaultPopularSearches = [
  { label: "Titre de séjour", query: "titre de séjour" },
  { label: "Logement CROUS", query: "logement crous" },
  { label: "Sécurité sociale", query: "sécurité sociale" },
  { label: "Compte bancaire", query: "ouvrir compte bancaire" },
  { label: "CAF", query: "caf apl aides" },
  { label: "Inscription université", query: "inscription université" },
];

export const GoogleBleuSearch = ({
  showLogo = true,
  showDescription = true,
  showPopularSearches = true,
  popularSearches = defaultPopularSearches,
  placeholder = "Logement, titre de séjour, CAF...",
  maxResults = 6,
  align = 'center',
  className = '',
}: GoogleBleuSearchProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const alignClasses = align === 'center' 
    ? 'text-center items-center' 
    : 'text-left items-start';

  const handleSelectResult = useCallback((item: SearchResult['item']) => {
    navigate(item.url);
    setIsOpen(false);
    setSearchQuery('');
    setResults([]);
  }, [navigate]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'guide':
        return FileText;
      case 'faq':
        return MessageCircle;
      default:
        return BookOpen;
    }
  };

  // Recherche avec Fuse.js
  useEffect(() => {
    if (searchQuery.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchResults = searchIndex.search(searchQuery);
    setResults(searchResults.slice(0, maxResults));
    setSelectedIndex(0);
    setIsOpen(true);
  }, [searchQuery, maxResults]);

  // Fermer en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || results.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % results.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
      } else if (e.key === 'Enter' && results[selectedIndex]) {
        e.preventDefault();
        handleSelectResult(results[selectedIndex].item);
      } else if (e.key === 'Escape') {
        setIsOpen(false);
        inputRef.current?.blur();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, handleSelectResult]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/recherche?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
    }
  };

  const handleQuickSearch = (query: string) => {
    navigate(`/recherche?q=${encodeURIComponent(query)}`);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className={`flex flex-col ${alignClasses}`}>
        {/* Logo / Branding */}
        {showLogo && (
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
            {showDescription && (
              <p className="text-lg md:text-xl text-muted-foreground font-body max-w-xl">
                Le moteur de recherche des étudiants primo-arrivants en France
              </p>
            )}
          </motion.div>
        )}

        {/* Search Bar */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSearch}
          className="relative mb-6 w-full max-w-3xl"
        >
          <div ref={searchRef} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
            <div className="relative flex items-center bg-card border-2 border-border hover:border-primary/50 focus-within:border-primary focus-within:shadow-glow rounded-full transition-all duration-300">
              <Search className="w-5 h-5 ml-5 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchQuery.length >= 2 && setIsOpen(true)}
                placeholder={placeholder}
                className="flex-1 px-4 py-4 bg-transparent text-base md:text-lg placeholder:text-muted-foreground/70 focus:outline-none"
              />
              {searchQuery && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchQuery('');
                    setResults([]);
                    setIsOpen(false);
                  }}
                  className="mr-2 h-8 w-8 p-0 rounded-full"
                >
                  <X className="w-4 h-4" />
                </Button>
              )}
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="mr-2 rounded-full px-5"
              >
                Rechercher
              </Button>
            </div>

            {/* Résultats de recherche */}
            <AnimatePresence>
              {isOpen && results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-3 w-full z-50"
                >
                  <Card className="p-2 max-h-[400px] overflow-y-auto shadow-2xl border-2">
                    {results.map((result, index) => {
                      const Icon = getIcon(result.item.type);
                      const isSelected = index === selectedIndex;

                      return (
                        <button
                          key={result.item.id}
                          onClick={() => handleSelectResult(result.item)}
                          onMouseEnter={() => setSelectedIndex(index)}
                          className={`w-full text-left p-3 rounded-lg transition-colors ${
                            isSelected ? 'bg-accent' : 'hover:bg-accent/50'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                              <Icon className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-medium text-sm truncate">
                                  {result.item.title}
                                </h4>
                                <span className="text-xs text-muted-foreground shrink-0 px-2 py-0.5 rounded-md bg-muted">
                                  {result.item.category}
                                </span>
                              </div>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {result.item.description}
                              </p>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </Card>
                </motion.div>
              )}

              {isOpen && searchQuery.length >= 2 && results.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full mt-3 w-full z-50"
                >
                  <Card className="p-6 text-center shadow-2xl border-2">
                    <p className="text-muted-foreground text-sm">
                      Aucun résultat pour "<span className="font-medium">{searchQuery}</span>"
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Essayez avec d'autres mots-clés ou{" "}
                      <a
                        href="https://chatgpt.com/g/g-auIrE8E6l-assistant-guide-du-bleu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        posez votre question à l'assistant IA
                      </a>
                    </p>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.form>

        {/* Popular Searches */}
        {showPopularSearches && popularSearches.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`flex flex-wrap ${align === 'center' ? 'justify-center' : 'justify-start'} gap-2 mb-8 max-w-3xl w-full`}
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
        )}
      </div>
    </div>
  );
};
