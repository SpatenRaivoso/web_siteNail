
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-serif font-semibold text-beauty-darkGray">Beauty<span className="text-beauty-nude">Nail</span></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/servicos" className="text-beauty-darkGray hover:text-beauty-nude transition-colors">
            Serviços
          </Link>
          <Link to="/profissionais" className="text-beauty-darkGray hover:text-beauty-nude transition-colors">
            Profissionais
          </Link>
          <Link to="/sobre" className="text-beauty-darkGray hover:text-beauty-nude transition-colors">
            Sobre
          </Link>
          <Link to="/contato" className="text-beauty-darkGray hover:text-beauty-nude transition-colors">
            Contato
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-beauty-nude text-beauty-darkGray hover:bg-beauty-nude/10">
                Entrar
              </Button>
            </Link>
            <Link to="/onboarding">
              <Button className="bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                Agendar
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-beauty-darkGray"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 z-50 bg-white shadow-md p-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/servicos" 
              className="text-beauty-darkGray hover:text-beauty-nude transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/profissionais" 
              className="text-beauty-darkGray hover:text-beauty-nude transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Profissionais
            </Link>
            <Link 
              to="/sobre" 
              className="text-beauty-darkGray hover:text-beauty-nude transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/contato" 
              className="text-beauty-darkGray hover:text-beauty-nude transition-colors px-4 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <div className="flex flex-col space-y-2 mt-2 px-4">
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full border-beauty-nude text-beauty-darkGray hover:bg-beauty-nude/10">
                  Entrar
                </Button>
              </Link>
              <Link 
                to="/onboarding"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-beauty-pink hover:bg-beauty-nude text-beauty-darkGray">
                  Agendar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
