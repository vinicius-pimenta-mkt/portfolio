import { useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Users, BarChart3, MessageSquare, Zap, CheckCircle } from 'lucide-react';
// Assumindo que 'Button' é um componente válido no seu projeto
// Se 'Button' não for globalmente acessível, você pode precisar ajustar a importação
// ou definir o componente aqui se estiver usando um setup de arquivo único.
// Por clareza, mantive a importação original.
// import { Button } from './ui/button'; 

const Button = (props) => (
  <button {...props} className={`rounded-lg transition-colors duration-200 ${props.className}`}>
    {props.children}
  </button>
);


const ProjectDetail = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('overview');

  const features = [
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Gestão de Agendamentos",
      description: "Sistema completo para controle de horários, clientes e serviços"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cadastro de Clientes",
      description: "Base de dados organizada com histórico completo de atendimentos"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Relatórios Gerenciais",
      description: "Análises detalhadas de desempenho e faturamento"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Integração WhatsApp",
      description: "Automação completa via n8n para atendimento e agendamentos"
    }
  ];

  const techStack = [
    "React.js", "Node.js", "SQLite", "Express.js", "Tailwind CSS", "n8n", "WhatsApp API"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-amber-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              // Removido variant="ghost" para compatibilidade com o Button mock
              onClick={onBack}
              className="flex items-center space-x-2 text-amber-700 hover:text-amber-800 bg-transparent shadow-none"
            >
              <ArrowLeft size={20} />
              <span>Voltar ao Portfólio</span>
            </Button>
            <div className="flex items-center space-x-4">
              <a
                href="https://srmendesinterface.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ExternalLink size={16} />
                <span>Ver Sistema</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap size={16} />
            <span>Sistema Web + Automação</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Barbearia Sr. Mendes
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Sistema completo de gestão para barbearias com automação WhatsApp integrada via n8n, 
            proporcionando uma experiência moderna tanto para o proprietário quanto para os clientes.
          </p>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
              <div className="text-2xl font-bold text-amber-600">100%</div>
              <div className="text-sm text-gray-600">Automação</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
              <div className="text-2xl font-bold text-amber-600">24/7</div>
              <div className="text-sm text-gray-600">Atendimento</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-amber-100">
              <div className="text-2xl font-bold text-amber-600">+50%</div>
              <div className="text-sm text-gray-600">Eficiência</div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-amber-100">
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
                      ? 'bg-amber-600 text-white'
                      : 'text-gray-600 hover:text-amber-600'
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
                  O sistema da Barbearia Sr. Mendes foi desenvolvido para modernizar completamente 
                  a gestão de uma barbearia tradicional. Integrando tecnologias web modernas com 
                  automação WhatsApp, o sistema oferece uma experiência fluida tanto para o 
                  proprietário quanto para os clientes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Desafio</h3>
                  <p className="text-gray-600">
                    A barbearia precisava de um sistema moderno para gerenciar agendamentos, 
                    clientes e relatórios, além de automatizar o atendimento via WhatsApp 
                    para melhorar a experiência do cliente.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Solução</h3>
                  <p className="text-gray-600">
                    Desenvolvemos um sistema web completo com dashboard intuitivo e 
                    integração com n8n para automação WhatsApp, permitindo agendamentos 
                    automáticos e atendimento 24/7.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Tecnologias Utilizadas</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium"
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
                {features.map((feature, index) => (
                  <div key={index} className="flex space-x-4 p-6 bg-amber-50 rounded-lg">
                    <div className="flex-shrink-0 text-amber-600">
                      {feature.icon}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Automação WhatsApp</h2>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                  <h3 className="text-2xl font-semibold text-gray-900">Integração n8n</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Através do n8n, criamos uma automação completa que conecta o WhatsApp da barbearia 
                  ao sistema de gestão, permitindo:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900">Funcionalidades Automáticas:</h4>
                    <ul className="space-y-2">
                      {[
                        "Agendamento via WhatsApp",
                        "Confirmação automática de horários",
                        "Lembretes de agendamento",
                        "Cancelamento e reagendamento",
                        "Consulta de disponibilidade",
                        "Atendimento 24/7"
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-4">Fluxo de Automação</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <span>Cliente envia mensagem</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span>n8n processa a solicitação</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span>Sistema atualiza dados</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                        <span>Resposta automática enviada</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-4">Área para Screenshots do WhatsApp</h4>
                <div className="bg-white border-2 border-dashed border-amber-300 rounded-lg p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-amber-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">
                    Aqui você pode inserir prints da automação funcionando no WhatsApp
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> {/* GRUPO DA GALERIA INICIA AQUI */}
                {/* Dashboard Preview */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Dashboard Principal</h3>
                  <img src="/images/sistema_dashboard.png" alt="Dashboard do Sistema" 
                    className="w-full h-auto rounded-lg shadow-md" 
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Visualização do painel de controle com métricas em tempo real
                  </div>
                </div>

                {/* Login Screen */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Tela de Login</h3>
                  <img src="/images/sistema_login.png" alt="Tela de Login" 
                    className="w-full h-auto rounded-lg shadow-md"
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Interface de autenticação segura e intuitiva
                  </div>
                </div>

                {/* Appointments */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Gestão de Agendamentos</h3>
                  <img src="/images/sistema_agenda.png" alt="Agenda do sistema" 
                    className="w-full h-auto rounded-lg shadow-md"
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Agenda interativa para controle de horários
                  </div>
                </div>

                {/* Reports */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Relatório dos serviços</h3>
                  <img src="/images/sistema_relatorio_servicos.png" alt="Relatório dos serviços" 
                    className="w-full h-auto rounded-lg shadow-md" 
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Análises detalhadas dos serviços realizados
                  </div>
                </div>
                
                {/* Reports Ranking*/}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Ranking dos serviços</h3>
                  <img src="/images/sistema_ranking_servicos.png" alt="Ranking dos serviços" 
                    className="w-full h-auto rounded-lg shadow-md" 
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Ranking dos serviços mais realizados
                  </div>
                </div>
                
                {/* Reports financeiro */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Relatório de receitas</h3>
                  <img src="/images/sistema_relatorio_receita.png" alt="Relatório de receitas" 
                    className="w-full h-auto rounded-lg shadow-md" 
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Análises detalhadas de desempenho e faturamento
                  </div>
                </div>
                
                {/* Reports clients*/}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Relatório de clientes</h3>
                  <img src="/images/sistema_relatorio_clientes.png" alt="Relatório de clientes" 
                    className="w-full h-auto rounded-lg shadow-md" 
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Relatório e ranking dos clientes
                  </div>
                </div>
                
                {/* Clients */}
                <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg p-8 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Dados dos Clientes</h3>
                  <img src="/images/sistema_clientes.png" alt="Leads e clientes" 
                    className="w-full h-auto rounded-lg shadow-md" 
                    onError="this.onerror=null; this.src='https://placehold.co/600x400/CCCCCC/333333?text=Imagem';"
                  />
                  <div className="text-sm text-gray-600 mt-2">
                    Registro de dados dos clientes
                  </div>
                </div>
                
              </div> {/* GRUPO DA GALERIA FECHA AQUI */}

              <div className="text-center pt-8">
                <a
                  href="https://srmendesinterface.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                >
                  <ExternalLink size={20} />
                  <span>Acessar Sistema Completo</span>
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Login: adminmendes | Senha: mendesbarber01
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
