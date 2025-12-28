import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Guides from "./pages/Guides";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { ChatWidget } from "./components/chat/ChatWidget";
import TitreSejourGuide from "./pages/guides/TitreSejourGuide";
import SecuriteSocialeGuide from "./pages/guides/SecuriteSocialeGuide";
import LogementGuide from "./pages/guides/LogementGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/titre-sejour" element={<TitreSejourGuide />} />
          <Route path="/guides/securite-sociale" element={<SecuriteSocialeGuide />} />
          <Route path="/guides/logement" element={<LogementGuide />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatWidget />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
