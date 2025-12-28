import { useState } from 'react';
import { Search } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { SearchBar } from './SearchBar';

export const SearchDialog = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Search className="w-5 h-5" />
                    <span className="sr-only">Rechercher</span>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>Rechercher</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                    <SearchBar />
                </div>
            </DialogContent>
        </Dialog>
    );
};
