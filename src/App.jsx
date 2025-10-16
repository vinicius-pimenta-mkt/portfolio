import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProjectDetail from './components/ProjectDetail'
import ProjectTemplate from './components/ProjectTemplate'
// Importando getProjectById, getActiveProjects, getProjectTemplates
import { getProjectById, getActiveProjects, getProjectTemplates } from './data/projects'
import { MessageSquare, Zap, CheckCircle, ArrowRight, Smartphone, Globe, Database } from 'lucide-react'
import './App.css'

function App() {
  // A lógica de getActiveProjectsWithImages é desnecessária, pois o imageCoverSrc está agora em data/projects.jsx
  // Apenas chamamos a função original:
  // const activeProjects = getActiveProjects(); 
  
  const [currentView, setCurrentView] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Removendo o alerta, pois é uma prática ruim em apps React
  const handleViewProject = (projectId) => {
    setSelectedProjectId(projectId);
    if (projectId === 'barbearia-sr-mendes') {
      setCurrentView('project-detail');
    } else {
      // Para templates, usar console.log ou modal customizado (melhor que alert)
      console.log(`Template "${projectId}" - Entre em contato conosco para personalizar!`);
    }
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProjectId(null);
  };

  if (currentView === 'project-detail') {
    return <ProjectDetail onBack={handleBackToHome} />;
  }

  // Usando a função original agora que o dado está corrigido na fonte
  const activeProjects = getActiveProjects();
  const templates = getProjectTemplates();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-8">
              <img 
                src="/unv_tech_logo.png" 
                alt="UNV Tech Logo" 
                className="h-40 w-40 mx-auto mb-6 rounded-full shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              UNV <span className="glowing-border-text">TECH</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Soluções Tecnológicas e Automações
            </p>
            <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
              Desenvolvemos sistemas web modernos e automações inteligentes 
              para transformar e otimizar processos empresariais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Ver Projetos
              </button>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Fale Conosco
              </button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Nossos Projetos
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Conheça algumas das soluções que desenvolvemos para nossos clientes
              </p>
            </div>
            
            {/* Active Projects (COM IMAGEM DE CAPA) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {activeProjects.map((project) => (
                <div key={project.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  
                  {/* NOVO: Imagem de Capa do Projeto (Substitui o gradiente) */}
                  <div className="h-48 rounded-lg mb-4 overflow-hidden">
                    {project.imageCoverSrc ? (
                      <img 
                        src={project.imageCoverSrc} // Usando o novo campo
                        alt={`Capa do Projeto ${project.title}`} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        // Fallback: caso a imagem não carregue, mostra um placeholder
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x192/CCCCCC/333333?text=IMAGEM+CAPA'; }}
                      />
                    ) : (
                      // Fallback visual se não houver imageCoverSrc
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-amber-100 to-amber-200">
                        <span className="text-amber-600 font-semibold">{project.title}</span>
                      </div>
                    )}
                  </div>
                  {/* FIM DO BLOCO DE IMAGEM */}

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description.substring(0, 100)}...
                  </p>
                  <button 
                    onClick={() => handleViewProject(project.id)}
                    className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1"
                  >
                    <span>Ver Detalhes</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}

              {/* Template Cards - AGORA COM IMAGEM DE CAPA TAMBÉM */}
              {templates.slice(0, 2).map((template) => {
                const colorMap = {
                  ecommerce: 'from-blue-100 to-blue-200 text-blue-600',
                  restaurante: 'from-red-100 to-red-200 text-red-600',
                  saude: 'from-green-100 to-green-200 text-green-600',
                  educacao: 'from-purple-100 to-purple-200 text-purple-600'
                };
                const colors = colorMap[template.category] || 'from-gray-100 to-gray-200 text-gray-600';
                
                return (
                  <div key={template.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    
                    {/* Imagem de Capa do Template */}
                    <div className="h-48 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={template.imageCoverSrc} 
                        alt={`Capa do Template ${template.title}`} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x192/9CA3AF/FFFFFF?text=TEMPLATE+CAPA'; }}
                      />
                    </div>
                    {/* Fim da Imagem de Capa do Template */}

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {template.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {template.description.substring(0, 100)}...
                    </p>
                    <button 
                      onClick={() => handleViewProject(template.id)}
                      className="text-green-600 hover:text-green-700 font-semibold flex items-center space-x-1"
                    >
                      <span>Ver Template</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Ver Mais Templates */}
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Automações para diversos segmentos: E-commerce, Restaurantes, Clínicas, Advocacia e muito mais.
              </p>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced Automation Section */}
        <section id="automation" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Automação WhatsApp
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Integrações inteligentes que conectam seus sistemas ao WhatsApp
              </p>
            </div>

            {/* Automation Features */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Atendimento 24/7</h3>
                    <p className="text-gray-600">
                      Seus clientes podem interagir com seu negócio a qualquer hora, 
                      com respostas automáticas inteligentes e encaminhamento quando necessário.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Integração n8n</h3>
                    <p className="text-gray-600">
                      Utilizamos n8n para criar fluxos de automação personalizados que 
                      conectam WhatsApp aos seus sistemas internos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sincronização de Dados</h3>
                    <p className="text-gray-600">
                      Todas as interações são sincronizadas automaticamente com seu 
                      sistema de gestão, mantendo dados sempre atualizados.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Funcionalidades Disponíveis</h3>
                <div className="space-y-4">
                  {[
                    'Agendamento automático de serviços',
                    'Catálogo de produtos interativo',
                    'Processamento de pedidos',
                    'Confirmações e lembretes',
                    'Suporte ao cliente automatizado',
                    'Pesquisas de satisfação',
                    'Campanhas de marketing',
                    'Relatórios de interações'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Use Cases */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-amber-50 rounded-xl">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-amber-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Barbearias & Salões</h4>
                <p className="text-gray-600">
                  Agendamento automático, lembretes de consulta e gestão de clientes via WhatsApp.
                </p>
              </div>

              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">E-commerce</h4>
                <p className="text-gray-600">
                  Catálogo automático, processamento de pedidos e suporte ao cliente integrado.
                </p>
              </div>

              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Restaurantes</h4>
                <p className="text-gray-600">
                  Cardápio digital, pedidos automáticos e rastreamento de delivery via WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Vamos Conversar?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Entre em contato conosco para discutir seu próximo projeto e descobrir 
                como podemos automatizar e modernizar seu negócio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Iniciar Conversa
                </button>
                <button className="border border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
