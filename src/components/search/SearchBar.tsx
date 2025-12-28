import { useState, useEffect, useRef, useCallback } from 'react';
import { Search, X, FileText, MessageCircle, File } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchIndex, type SearchResult } from '@/lib/searchIndex';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const searchRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();

    // Recherche
    useEffect(() => {
        if (query.length < 2) {
            setResults([]);
            return;
        }

        const searchResults = searchIndex.search(query);
        setResults(searchResults.slice(0, 8)); // Limite à 8 résultats
        setSelectedIndex(0);
    }, [query]);

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

    const handleSelectResult = useCallback((item: SearchResult['item']) => {
        navigate(item.url);
        setIsOpen(false);
        setQuery('');
        setResults([]);
    }, [navigate]);

    const getIcon = (type: string) => {
        switch (type) {
            case 'guide':
                return FileText;
            case 'faq':
                return MessageCircle;
            default:
                return File;
        }
    };

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

    // Raccourci clavier Cmd/Ctrl + K
    useEffect(() => {
        const handleShortcut = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
                inputRef.current?.focus();
            }
        };

        document.addEventListener('keydown', handleShortcut);
        return () => document.removeEventListener('keydown', handleShortcut);
    }, []);

    return (
        <div ref={searchRef} className="relative w-full">
            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
                <Input
                    ref={inputRef}
                    type="text"
                    placeholder="Rechercher... (⌘K)"
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    className="pl-10 pr-10 h-10"
                />
                {query && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                            setQuery('');
                            setResults([]);
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0"
                    >
                        <X className="w-4 h-4" />
                    </Button>
                )}
            </div>

            {/* Résultats */}
            <AnimatePresence>
                {isOpen && results.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-2 w-full z-50"
                    >
                        <Card className="p-2 max-h-[400px] overflow-y-auto shadow-lg">
                            {results.map((result, index) => {
                                const Icon = getIcon(result.item.type);
                                const isSelected = index === selectedIndex;

                                return (
                                    <button
                                        key={result.item.id}
                                        onClick={() => handleSelectResult(result.item)}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`w-full text-left p-3 rounded-lg transition-colors ${isSelected ? 'bg-accent' : 'hover:bg-accent/50'
                                            }`}
                                    >
                                        <div className="flex items-start gap-3">
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                                                <Icon className="w-4 h-4 text-primary" />
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

                {isOpen && query.length >= 2 && results.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full mt-2 w-full z-50"
                    >
                        <Card className="p-6 text-center shadow-lg">
                            <p className="text-muted-foreground text-sm">
                                Aucun résultat pour "<span className="font-medium">{query}</span>"
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
    );
};
