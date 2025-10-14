import { useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, BarChart3, MessageSquare, Zap, CheckCircle, Globe, Smartphone, Database, Code } from 'lucide-react';

const ProjectTemplate = ({ project, onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Configurações de cores baseadas no tipo de projeto
  const colorSchemes = {
    barbearia: {
      primary: 'amber',
      secondary: 'orange',
      gradient: 'from-amber-50 to-orange-50',
      cardBg: 'from-amber-100 to-orange-100',
      accent: 'amber-600',
      hover: 'amber-700',
      border: 'amber-200',
      text: 'amber-700',
      textHover: 'amber-800'
    },
    ecommerce: {
      primary: 'blue',
      secondary: 'indigo',
      gradient: 'from-blue-50 to-indigo-50',
      cardBg: 'from-blue-100 to-indigo-100',
      accent: 'blue-600',
      hover: 'blue-700',
      border: 'blue-200',
      text: 'blue-700',
      textHover: 'blue-800'
    },
    restaurante: {
      primary: 'red',
      secondary: 'rose',
      gradient: 'from-red-50 to-rose-50',
      cardBg: 'from-red-100 to-rose-100',
      accent: 'red-600',
      hover: 'red-700',
      border: 'red-200',
      text: 'red-700',
      textHover: 'red-800'
    },
    saude: {
      primary: 'green',
      secondary: 'emerald',
      gradient: 'from-green-50 to-emerald-50',
      cardBg: 'from-green-100 to-emerald-100',
      accent: 'green-600',
      hover: 'green-700',
      border: 'green-200',
      text: 'green-700',
      textHover: 'green-800'
    },
    educacao: {
      primary: 'purple',
      secondary: 'violet',
      gradient: 'from-purple-50 to-violet-50',
      cardBg: 'from-purple-100 to-violet-100',
      accent: 'purple-600',
      hover: 'purple-700',
      border: 'purple-200',
      text: 'purple-700',
      textHover: 'purple-800'
    }
  };

  const colors = colorSchemes[project.category] || colorSchemes.barbearia;

  const getFeatureIcon = (iconName) => {
    const icons = {
      calendar: <Calendar className="w-6 h-6" />,
      users: <Users className="w-6 h-6" />,
      chart: <BarChart3 className="w-6 h-6" />,
      message: <MessageSquare className="w-6 h-6" />,
      globe: <Globe className="w-6 h-6" />,
      smartphone: <Smartphone className="w-6 h-6" />,
      database: <Database className="w-6 h-6" />,
      code: <Code className="w-6 h-6" />
    };
    return icons[iconName] || <Zap className="w-6 h-6" />;
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.gradient}`}>
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className={`flex items-center space-x-2 text-${colors.text} hover:text-${colors.textHover} px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200`}
            >
              <ArrowLeft size={20} />
              <span>Voltar ao Portfólio</span>
            </button>
            <div className="flex items-center space-x-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-2 bg-${colors.accent} hover:bg-${colors.hover} text-white px-4 py-2 rounded-lg transition-colors duration-200`}
                >
                  <ExternalLink size={16} />
                  <span>Ver Sistema</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center space-x-2 bg-${colors.primary}-100 text-${colors.text} px-4 py-2 rounded-full text-sm font-medium mb-4`}>
            <Zap size={16} />
            <span>{project.type}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {project.description}
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {project.stats.map((stat, index) => (
              <div key={index} className={`bg-white rounded-lg p-4 shadow-sm border border-${colors.border}`}>
                <div className={`text-2xl font-bold text-${colors.accent}`}>{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className={`bg-white rounded-lg p-1 shadow-sm border border-${colors.border}`}>
            <div className="flex space-x-1">
              {[
                { id: 'overview', label: 'Visão Geral' },
                { id: 'features', label: 'Funcionalidades' },
                { id: 'automation', label: 'Automação' },
                { id: 'gallery', label: 'Galeria' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                    activeTab === tab.id
                      ? `bg-${colors.accent} text-white`
                      : `text-gray-600 hover:text-${colors.accent}`
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Sobre o Projeto</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Desafio</h3>
                  <p className="text-gray-600">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solução</h3>
                  <p className="text-gray-600">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className={`bg-${colors.primary}-100 text-${colors.text} px-3 py-1 rounded-full text-sm font-medium`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Funcionalidades Principais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.features.map((feature, index) => (
                  <div key={index} className={`flex space-x-4 p-6 bg-${colors.primary}-50 rounded-lg`}>
                    <div className={`flex-shrink-0 text-${colors.accent}`}>
                      {getFeatureIcon(feature.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'automation' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Automação e Integrações</h2>
              
              {project.automation ? (
                <div className={`bg-gradient-to-r from-${colors.primary}-50 to-${colors.secondary}-50 p-8 rounded-lg`}>
                  <div className="flex items-center space-x-3 mb-6">
                    <MessageSquare className={`w-8 h-8 text-${colors.accent}`} />
                    <h3 className="text-2xl font-semibold text-gray-900">{project.automation.title}</h3>
                  </div>
                  <p className="text-lg text-gray-600 mb-6">
                    {project.automation.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-gray-900">Funcionalidades Automáticas:</h4>
                      <ul className="space-y-2">
                        {project.automation.features.map((item, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className={`w-4 h-4 text-${colors.accent}`} />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-gray-900 mb-4">Fluxo de Automação</h4>
                      <div className="space-y-3 text-sm">
                        {project.automation.workflow.map((step, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${colors.accent} rounded-full`}></div>
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">
                    Este projeto não possui automações específicas configuradas.
                  </p>
                </div>
              )}

              {/* Área para Screenshots */}
              <div className={`bg-${colors.primary}-50 p-6 rounded-lg`}>
                <h4 className="font-semibold text-gray-900 mb-4">Área para Screenshots da Automação</h4>
                <div className={`bg-white border-2 border-dashed border-${colors.primary}-300 rounded-lg p-8 text-center`}>
                  <MessageSquare className={`w-12 h-12 text-${colors.primary}-400 mx-auto mb-4`} />
                  <p className="text-gray-600 mb-2">
                    Aqui você pode inserir prints da automação funcionando
                  </p>
                  <p className="text-sm text-gray-500">
                    Arraste e solte as imagens ou clique para fazer upload
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Galeria do Sistema</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.gallery.map((item, index) => (
                  <div key={index} className={`bg-gradient-to-br ${colors.cardBg} rounded-lg p-8 text-center`}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{item.title}</h3>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-sm text-gray-600">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {project.liveUrl && (
                <div className="text-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 bg-${colors.accent} hover:bg-${colors.hover} text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200`}
                  >
                    <ExternalLink size={20} />
                    <span>Acessar Sistema Completo</span>
                  </a>
                  {project.credentials && (
                    <p className="text-sm text-gray-500 mt-2">
                      {project.credentials}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectTemplate;

