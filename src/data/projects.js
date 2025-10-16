// Dados dos projetos para o portfólio UNV Tech
export const projects = {
  'barbearia-sr-mendes': {
    id: 'barbearia-sr-mendes',
    title: 'Barbearia Sr. Mendes',
    category: 'barbearia',
    type: 'Sistema Web + Automação',
    description: 'Sistema completo de gestão para barbearias com automação WhatsApp integrada via n8n, proporcionando uma experiência moderna tanto para o proprietário quanto para os clientes.',
    longDescription: 'O sistema da Barbearia Sr. Mendes foi desenvolvido para modernizar completamente a gestão de uma barbearia tradicional. Integrando tecnologias web modernas com automação WhatsApp, o sistema oferece uma experiência fluida tanto para o proprietário quanto para os clientes.',
    challenge: 'A barbearia precisava de um sistema moderno para gerenciar agendamentos, clientes e relatórios, além de automatizar o atendimento via WhatsApp para melhorar a experiência do cliente.',
    solution: 'Desenvolvemos um sistema web completo com dashboard intuitivo e integração com n8n para automação WhatsApp, permitindo agendamentos automáticos e atendimento 24/7.',
    liveUrl: 'https://srmendesinterface.vercel.app/',
    credentials: 'Login: adminmendes | Senha: mendesbarber01',
    stats: [
      { value: '100%', label: 'Automação' },
      { value: '24/7', label: 'Atendimento' },
      { value: '+50%', label: 'Eficiência' }
    ],
    techStack: [
      'React.js', 'Node.js', 'SQLite', 'Express.js', 'Tailwind CSS', 'n8n', 'WhatsApp API'
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Gestão de Agendamentos',
        description: 'Sistema completo para controle de horários, clientes e serviços'
      },
      {
        icon: 'users',
        title: 'Cadastro de Clientes',
        description: 'Base de dados organizada com histórico completo de atendimentos'
      },
      {
        icon: 'chart',
        title: 'Relatórios Gerenciais',
        description: 'Análises detalhadas de desempenho e faturamento'
      },
      {
        icon: 'message',
        title: 'Integração WhatsApp',
        description: 'Automação completa via n8n para atendimento e agendamentos'
      }
    ],
    automation: {
      title: 'Integração n8n',
      description: 'Através do n8n, criamos uma automação completa que conecta o WhatsApp da barbearia ao sistema de gestão, permitindo:',
      features: [
        'Agendamento via WhatsApp',
        'Confirmação automática de horários',
        'Lembretes de agendamento',
        'Cancelamento e reagendamento',
        'Consulta de disponibilidade',
        'Atendimento 24/7'
      ],
      workflow: [
        'Cliente envia mensagem',
        'n8n processa a solicitação',
        'Sistema atualiza dados',
        'Resposta automática enviada'
      ]
    },
    gallery: [
      {
        title: 'Dashboard Principal',
        description: 'Visualização do painel de controle com métricas em tempo real'
      },
      {
        title: 'Tela de Login',
        description: 'Interface de autenticação segura e intuitiva'
      },
      {
        title: 'Gestão de Agendamentos',
        description: 'Calendário interativo para controle de horários'
      },
      {
        title: 'Relatórios',
        description: 'Análises detalhadas de desempenho e faturamento'
      }
    ],
    // NOVO CAMPO DE IMAGEM DE CAPA
    imageCoverSrc: '/images/sistema_dashboard.png' 
  }
};

// Templates para novos projetos
export const projectTemplates = {
  ecommerce: {
    id: 'template-ecommerce',
    title: 'E-commerce Moderno',
    category: 'ecommerce',
    type: 'Loja Virtual + Automação',
    description: 'Plataforma completa de e-commerce com integração WhatsApp para vendas e suporte automatizado.',
    longDescription: 'Sistema completo de e-commerce desenvolvido com tecnologias modernas, incluindo catálogo de produtos, carrinho de compras, processamento de pagamentos e automação de vendas via WhatsApp.',
    challenge: 'Criar uma loja virtual moderna que integre vendas online com atendimento personalizado via WhatsApp.',
    solution: 'Desenvolvemos uma plataforma robusta com interface intuitiva e automação completa de vendas e suporte.',
    liveUrl: '#',
    credentials: 'Fale Conosco',
    stats: [
      { value: '300%', label: 'Aumento Vendas' },
      { value: '24/7', label: 'Suporte' },
      { value: '95%', label: 'Satisfação' }
    ],
    techStack: [
      'Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'n8n', 'WhatsApp Business API'
    ],
    features: [
      {
        icon: 'globe',
        title: 'Catálogo Online',
        description: 'Vitrine digital com produtos organizados por categorias'
      },
      {
        icon: 'smartphone',
        title: 'Vendas via WhatsApp',
        description: 'Automação completa do processo de vendas pelo WhatsApp'
      },
      {
        icon: 'chart',
        title: 'Dashboard de Vendas',
        description: 'Relatórios completos de vendas e performance'
      },
      {
        icon: 'users',
        title: 'CRM Integrado',
        description: 'Gestão completa de clientes e histórico de compras'
      }
    ],
    automation: {
      title: 'Automação de Vendas',
      description: 'Sistema automatizado que conecta sua loja ao WhatsApp para vendas e suporte:',
      features: [
        'Catálogo automático no WhatsApp',
        'Processamento de pedidos',
        'Cálculo de frete automático',
        'Confirmação de pagamento',
        'Rastreamento de entregas',
        'Suporte pós-venda'
      ],
      workflow: [
        'Cliente visualiza produtos',
        'Pedido processado automaticamente',
        'Pagamento confirmado',
        'Entrega rastreada'
      ]
    },
    gallery: [
      {
        title: 'Loja Online',
        description: 'Interface moderna e responsiva para navegação'
      },
      {
        title: 'Carrinho de Compras',
        description: 'Processo simplificado de checkout'
      },
      {
        title: 'Dashboard Admin',
        description: 'Painel completo para gestão da loja'
      },
      {
        title: 'Integração WhatsApp',
        description: 'Vendas automatizadas via WhatsApp'
      }
    ],
    // NOVO CAMPO DE IMAGEM DE CAPA
    imageCoverSrc: 'https://placehold.co/400x192/4F46E5/FFFFFF?text=E-commerce+Template'
  },

  restaurante: {
    id: 'template-restaurante',
    title: 'Sistema para Restaurante',
    category: 'restaurante',
    type: 'Delivery + Automação',
    description: 'Plataforma completa para restaurantes com delivery automatizado via WhatsApp e gestão de pedidos.',
    longDescription: 'Sistema desenvolvido especificamente para restaurantes, incluindo cardápio digital, sistema de pedidos, integração com delivery e automação completa via WhatsApp.',
    challenge: 'Modernizar o atendimento de restaurantes com sistema de delivery eficiente e automação de pedidos.',
    solution: 'Criamos uma plataforma integrada que conecta cardápio digital, pedidos e entrega com automação WhatsApp.',
    liveUrl: '#',
    credentials: 'Fale Conosco',
    stats: [
      { value: '200%', label: 'Mais Pedidos' },
      { value: '15min', label: 'Tempo Médio' },
      { value: '98%', label: 'Precisão' }
    ],
    techStack: [
      'React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'n8n', 'WhatsApp API'
    ],
    features: [
      {
        icon: 'smartphone',
        title: 'Cardápio Digital',
        description: 'Menu interativo com fotos e descrições detalhadas'
      },
      {
        icon: 'message',
        title: 'Pedidos via WhatsApp',
        description: 'Sistema automatizado de pedidos pelo WhatsApp'
      },
      {
        icon: 'chart',
        title: 'Gestão de Pedidos',
        description: 'Controle em tempo real de todos os pedidos'
      },
      {
        icon: 'users',
        title: 'Base de Clientes',
        description: 'Histórico completo de pedidos e preferências'
      }
    ],
    automation: {
      title: 'Automação de Delivery',
      description: 'Sistema que automatiza todo o processo de pedidos via WhatsApp:',
      features: [
        'Cardápio automático no WhatsApp',
        'Cálculo de taxa de entrega',
        'Confirmação de pedidos',
        'Tempo estimado de entrega',
        'Notificações de status',
        'Avaliação pós-entrega'
      ],
      workflow: [
        'Cliente acessa cardápio',
        'Pedido processado',
        'Cozinha recebe pedido',
        'Entrega rastreada'
      ]
    },
    gallery: [
      {
        title: 'Cardápio Digital',
        description: 'Interface atrativa com fotos dos pratos'
      },
      {
        title: 'Sistema de Pedidos',
        description: 'Gestão eficiente de todos os pedidos'
      },
      {
        title: 'Dashboard Cozinha',
        description: 'Painel para controle da produção'
      },
      {
        title: 'Delivery Tracking',
        description: 'Rastreamento em tempo real das entregas'
      }
    ],
    // NOVO CAMPO DE IMAGEM DE CAPA
    imageCoverSrc: 'https://placehold.co/400x192/DC2626/FFFFFF?text=Restaurante+Template'
  },

  saude: {
    id: 'template-saude',
    title: 'Sistema para Clínicas',
    category: 'saude',
    type: 'Gestão Médica + Automação',
    description: 'Sistema completo para clínicas e consultórios com agendamento automatizado e gestão de pacientes.',
    longDescription: 'Plataforma desenvolvida para profissionais da saúde, incluindo agendamento de consultas, prontuário eletrônico, lembretes automáticos e integração WhatsApp.',
    challenge: 'Digitalizar e automatizar processos de clínicas para melhorar atendimento e reduzir faltas.',
    solution: 'Sistema integrado com automação WhatsApp para lembretes, confirmações e reagendamentos automáticos.',
    liveUrl: '#',
    credentials: 'Fale Conosco',
    stats: [
      { value: '80%', label: 'Menos Faltas' },
      { value: '24/7', label: 'Agendamento' },
      { value: '100%', label: 'Digital' }
    ],
    techStack: [
      'React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Tailwind CSS', 'n8n', 'WhatsApp API'
    ],
    features: [
      {
        icon: 'calendar',
        title: 'Agendamento Online',
        description: 'Sistema completo de agendamento com disponibilidade em tempo real'
      },
      {
        icon: 'users',
        title: 'Gestão de Pacientes',
        description: 'Prontuário eletrônico e histórico completo de consultas'
      },
      {
        icon: 'message',
        title: 'Lembretes Automáticos',
        description: 'Confirmações e lembretes via WhatsApp'
      },
      {
        icon: 'chart',
        title: 'Relatórios Médicos',
        description: 'Análises de atendimento e performance da clínica'
      }
    ],
    automation: {
      title: 'Automação Médica',
      description: 'Sistema que automatiza comunicação com pacientes via WhatsApp:',
      features: [
        'Confirmação de consultas',
        'Lembretes automáticos',
        'Reagendamento via WhatsApp',
        'Envio de resultados',
        'Pesquisa de satisfação',
        'Campanhas de saúde'
      ],
      workflow: [
        'Paciente agenda consulta',
        'Sistema envia confirmação',
        'Lembrete automático enviado',
        'Consulta realizada'
      ]
    },
    gallery: [
      {
        title: 'Agendamento Online',
        description: 'Interface simples para marcação de consultas'
      },
      {
        title: 'Prontuário Digital',
        description: 'Histórico completo do paciente'
      },
      {
        title: 'Dashboard Médico',
        description: 'Visão geral da agenda e pacientes'
      },
      {
        title: 'Automação WhatsApp',
        description: 'Comunicação automatizada com pacientes'
      }
    ],
    // NOVO CAMPO DE IMAGEM DE CAPA
    imageCoverSrc: 'https://placehold.co/400x192/10B981/FFFFFF?text=Saude+Template'
  }
};

// Função para obter projeto por ID
export const getProjectById = (id) => {
  return projects[id] || projectTemplates[id];
};

// Função para obter todos os projetos ativos
export const getActiveProjects = () => {
  return Object.values(projects);
};

// Função para obter templates de exemplo
export const getProjectTemplates = () => {
  return Object.values(projectTemplates);
};
