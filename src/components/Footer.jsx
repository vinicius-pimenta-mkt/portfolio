import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/unv_tech_logo.png"  
                alt="UNV Tech Logo" 
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h3 className="text-xl font-bold">UNV TECH</h3>
                <p className="text-gray-400 text-sm">Soluções Tecnológicas e Automações</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Desenvolvemos soluções tecnológicas inovadoras e automações inteligentes 
              para otimizar processos e impulsionar o crescimento do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-green-400 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#automation" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Automação
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-green-400 transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-green-400" />
                <span className="text-gray-300 text-sm">contato@unvgroup.tech</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-green-400" />
                <span className="text-gray-300 text-sm">(28) 99963-5004</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-green-400 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  Belo Horizonte, MG<br />
                  Brasil
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 UNV Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

