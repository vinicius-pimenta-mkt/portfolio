import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import {unvTechLogo} from '../assets/unv_tech_logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={unvTechLogo} 
              alt="UNV Tech Logo" 
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">UNV Tech</span>
              <span className="text-xs text-gray-600 hidden sm:block">Soluções Tecnológicas</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              Início
            </a>
            <a href="#projects" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              Projetos
            </a>
            <a href="#automation" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              Automação
            </a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors duration-200">
              Contato
            </a>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white"
              size="sm"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Início
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Projetos
              </a>
              <a
                href="#automation"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Automação
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contato
              </a>
              <div className="px-3 py-2">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                  size="sm"
                >
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

