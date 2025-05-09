
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OnboardingPage from "./pages/OnboardingPage";
import ClientDashboard from "./pages/ClientDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/ServicesPage";
import ProfessionalsPage from "./pages/ProfessionalsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/cliente" element={<ClientDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/profissionais" element={<ProfessionalsPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
