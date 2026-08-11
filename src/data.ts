import {
  PricingRow,
  HighlightCard,
  OperatorDifferential,
  LocalNetworkOperator,
  PdfDocument
} from './types';

export const ARKOS_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 60' width='280' height='60'><g transform='translate(5, 10)'><path d='M20 0 C8 0 0 10 0 22 L8 22 C8 14 13 8 20 8 C27 8 32 14 32 22 L40 22 C40 10 32 0 20 0 Z' fill='%230E6135'/><path d='M20 12 C15 12 11 16 11 22 L17 22 C17 19 18 16 20 16 C22 16 23 19 23 22 L29 22 C29 16 25 12 20 12 Z' fill='%2310B981'/><circle cx='20' cy='32' r='4' fill='%230E6135'/></g><text x='58' y='32' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='900' font-size='24' fill='%230E6135' letter-spacing='0.5'>ARKOS</text><text x='58' y='46' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='700' font-size='10' fill='%2310B981' letter-spacing='3'>BENEFÍCIOS</text></svg>`;

export const COOPERCITYSP_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 280 60' width='280' height='60'><g transform='translate(5, 8)'><path d='M22 2 L40 10 L40 26 C40 36 22 44 22 44 C22 44 4 36 4 26 L4 10 Z' fill='%230E6135'/><path d='M22 6 L36 13 L36 25 C36 33 22 40 22 40 C22 40 8 33 8 25 L8 13 Z' fill='%230B4F2A'/><path d='M22 12 L25 19 L32 19 L26 23 L28 30 L22 26 L16 30 L18 23 L12 19 L19 19 Z' fill='%23F59E0B'/></g><text x='54' y='32' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='900' font-size='20' fill='%230E6135' letter-spacing='0.5'>COOPERCITYSP</text><text x='54' y='46' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='700' font-size='9.5' fill='%23475569' letter-spacing='1.5'>COOPERATIVA MUNICIPAL DE SP</text></svg>`;

export const PLENA_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60' width='240' height='60'><g transform='translate(6, 10)'><path d='M18 4 C28 4 34 12 34 22 C34 32 20 38 18 40 C16 38 2 32 2 22 C2 12 8 4 18 4 Z' fill='%2300529C'/><path d='M18 9 C24 9 29 15 29 22 C29 29 19 33 18 35 C17 33 7 29 7 22 C7 15 12 9 18 9 Z' fill='%2300A8E8'/><path d='M18 14 C21 14 24 18 24 22 C24 26 18 29 18 29 C18 29 12 26 12 22 C12 18 15 14 18 14 Z' fill='%2310B981'/></g><text x='46' y='32' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='900' font-size='22' fill='%2300529C'>Plena</text><text x='108' y='32' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='700' font-size='22' fill='%2300A8E8'>Saúde</text><text x='46' y='46' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='800' font-size='9.5' fill='%230284C7' letter-spacing='2'>BLUE 600 • ZONA NORTE</text></svg>`;

export const PORTO_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 240 60' width='240' height='60'><g transform='translate(6, 12)'><rect x='0' y='6' width='24' height='24' rx='6' fill='%2300A3E0'/><path d='M8 18 L12 22 L18 12' stroke='%23FFFFFF' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' fill='none'/></g><text x='38' y='34' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='900' font-size='26' fill='%23001E62' letter-spacing='-0.5'>porto</text><text x='112' y='34' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='500' font-size='26' fill='%2300A3E0' letter-spacing='-0.5'>saúde</text><text x='38' y='48' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='700' font-size='9' fill='%2364748B' letter-spacing='2'>LINHA PRO • EMPRESARIAL</text></svg>`;

export const SULAMERICA_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 260 60' width='260' height='60'><g transform='translate(6, 10)'><path d='M2 18 C10 6, 26 6, 32 14 C22 12, 10 18, 6 26 Z' fill='%23FF6500'/><path d='M34 18 C26 30, 10 30, 4 22 C14 24, 26 18, 30 10 Z' fill='%230033A0'/></g><text x='46' y='32' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='900' font-size='22' fill='%230033A0'>Sul</text><text x='84' y='32' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='600' font-size='22' fill='%230033A0'>América</text><text x='46' y='46' font-family='Plus Jakarta Sans, system-ui, sans-serif' font-weight='800' font-size='10' fill='%23FF6500' letter-spacing='2.5'>SAÚDE • DIRETO NACIONAL</text></svg>`;

export const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    id: '1',
    title: 'Transição Segura',
    description: 'Gestão e transição contínua sem prejuízo de atendimento aos colaboradores da COOPERCITYSP.',
    icon: 'fa-user-shield'
  },
  {
    id: '2',
    title: 'Saúde Ocupacional Integrada',
    description: 'Opção de inclusão de SST, exames admissionais/periódicos e PCMSO/PGR direto no contrato.',
    icon: 'fa-briefcase-medical'
  },
  {
    id: '3',
    title: 'Condição Comercial Conquistada',
    description: 'Negociação de até -16% de redução comercial aplicada sobre a tabela padrão.',
    icon: 'fa-tags'
  }
];

export const PRICING_TABLE: PricingRow[] = [
  { ageGroup: '0 a 18 anos', portoPrice: 'R$ 187,25', sulamericaPrice: 'R$ 166,16', portoValue: 187.25, sulamericaValue: 166.16 },
  { ageGroup: '19 a 23 anos', portoPrice: 'R$ 227,08', sulamericaPrice: 'R$ 207,70', portoValue: 227.08, sulamericaValue: 207.70 },
  { ageGroup: '24 a 28 anos', portoPrice: 'R$ 273,93', sulamericaPrice: 'R$ 257,54', portoValue: 273.93, sulamericaValue: 257.54 },
  { ageGroup: '29 a 33 anos', portoPrice: 'R$ 313,60', sulamericaPrice: 'R$ 285,87', portoValue: 313.60, sulamericaValue: 285.87 },
  { ageGroup: '34 a 38 anos', portoPrice: 'R$ 339,79', sulamericaPrice: 'R$ 305,89', portoValue: 339.79, sulamericaValue: 305.89 },
  { ageGroup: '39 a 43 anos', portoPrice: 'R$ 350,92', sulamericaPrice: 'R$ 354,82', portoValue: 350.92, sulamericaValue: 354.82 },
  { ageGroup: '44 a 48 anos', portoPrice: 'R$ 419,18', sulamericaPrice: 'R$ 424,16', portoValue: 419.18, sulamericaValue: 424.16 },
  { ageGroup: '49 a 53 anos', portoPrice: 'R$ 451,26', sulamericaPrice: 'R$ 497,11', portoValue: 451.26, sulamericaValue: 497.11 },
  { ageGroup: '54 a 58 anos', portoPrice: 'R$ 557,57', sulamericaPrice: 'R$ 591,81', portoValue: 557.57, sulamericaValue: 591.81 },
  { ageGroup: '59+ anos', portoPrice: 'R$ 937,23', sulamericaPrice: 'R$ 996,91', portoValue: 937.23, sulamericaValue: 996.91 }
];

export const TOTAL_PORTO = 'R$ 10.902,03';
export const TOTAL_SULAMERICA = 'R$ 11.012,28';
export const ORIGINAL_SULAMERICA = 'R$ 13.109,86';
export const ECONOMY_SULAMERICA = 'R$ 2.097,58/mês';

export const OPERATOR_DIFFERENTIALS: OperatorDifferential[] = [
  {
    operator: 'PORTO SAÚDE',
    planName: 'Prata Pro - Regional',
    highlightTag: 'Solução de Gestão Ocupacional & SST',
    logoAlt: 'Porto Saúde',
    logoUrl: PORTO_LOGO_SVG,
    accentColor: '#004080',
    differentials: [
      {
        title: 'Saúde Ocupacional & SST Incluso',
        description: 'Gestão de SST, exames admissionais/periódicos, PCMSO, PGR e eSocial inclusos no valor.'
      },
      {
        title: 'Telemedicina 24h & Programas de Saúde Preventiva',
        description: 'Atendimento médico online instantâneo sem deslocamento e acompanhamento preventivo completo para os colaboradores.'
      },
      {
        title: 'Seguro de Vida & Odonto Incluso',
        description: 'Capital R$ 30.000 Morte/Invalidez, R$ 5.000 Aux. Funeral + Porto Odonto Bronze 10 Nacional.'
      }
    ]
  },
  {
    operator: 'SULAMÉRICA SAÚDE',
    planName: 'Direto Nacional',
    highlightTag: 'Livre Atendimento e Cobertura em Todo o Brasil',
    logoAlt: 'SulAmérica Saúde',
    logoUrl: SULAMERICA_LOGO_SVG,
    accentColor: '#E65100',
    differentials: [
      {
        title: 'Abrangência Geográfica Nacional',
        description: 'Cobertura integral no Brasil, ideal para colaboradores e motoristas que viajam fora de SP.'
      },
      {
        title: 'Reembolso Médico Modular',
        description: 'Reembolso modular para consultas de emergência, ex: R$ 90,00 fora da rede.'
      },
      {
        title: 'Seguro de Vida & Odonto Integrado',
        description: 'Seguro de vida corporativo e plano Odonto Mais inclusos no contrato sem custo extra.'
      }
    ]
  }
];

export const LOCAL_NETWORK_OPERATORS: LocalNetworkOperator[] = [
  {
    id: 'plena',
    operator: 'Plena Saúde',
    planName: 'Blue 600 - Plano Atual',
    networkProfile: 'Básica e Limitada (14 Hospitais)',
    logoAlt: 'Plena Saúde',
    logoUrl: PLENA_LOGO_SVG,
    totalHospitals: '14 Hospitais',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    hospitalsSectionTitle: 'Cobertura Local na Zona Norte',
    hospitals: [
      {
        name: 'Hospital Previna (Taipas)',
        address: 'Av. Raimundo Pereira de Magalhães, 12367',
        details: 'PS 24h, Internação e Especialidades - Rede Própria'
      },
      {
        name: 'Hospital Presidente (Tucuruvi)',
        address: 'Av. Nova Cantareira, 2398',
        details: 'PS Geral e Internação'
      },
      {
        name: 'Hospital HSANP (Santana)',
        address: 'R. Voluntários da Pátria, 4301',
        details: 'PS, Internação e Maternidade'
      }
    ],
    diagnostics: ['Lavoisier', 'Mello Centro de Diagnóstico', 'Labi Exames'],
    attentionPoint: 'Sem acesso a hospitais de grande porte de São Paulo.'
  },
  {
    id: 'porto',
    operator: 'Porto Saúde',
    planName: 'Linha Pro - Prata Pro',
    networkProfile: 'Rede Expandida de Alta Qualidade (31 Hospitais)',
    logoAlt: 'Porto Saúde',
    logoUrl: PORTO_LOGO_SVG,
    totalHospitals: '31 Hospitais',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    hospitalsSectionTitle: 'Cobertura na Zona Norte & Hospitais Próximos de Renome',
    hospitals: [
      {
        name: 'Hospital São Camilo (Santana)',
        details: 'Referência em Alta Complexidade na ZN, PS 24h Adulto/Pediátrico e Cardiologia'
      },
      {
        name: 'Hospital Nipo-Brasileiro (Parque Novo Mundo)',
        details: 'Referência em Maternidade, Cirurgias e PS na Região'
      },
      {
        name: 'Hospital HSANP (Santana)',
        address: 'R. Voluntários da Pátria, 4301',
        details: 'PS, Internação e Ortopedia'
      },
      {
        name: 'Hospital Oswaldo Cruz (Unidade Paulista)',
        details: 'Hospital de Altíssimo Renome incluso no Prata Pro'
      },
      {
        name: 'Hospital Casa de Saúde Santa Rita (Centro/Próximo)',
        details: 'PS e Internação Geral'
      }
    ],
    diagnostics: ['A+', 'Blume', 'CDB', 'Femme (Saúde da Mulher)', 'Hermes Pardini', 'Lavoisier']
  },
  {
    id: 'sulamerica',
    operator: 'SulAmérica Saúde',
    planName: 'Direto Nacional - Exato',
    networkProfile: 'Ampla Rede Credenciada + Atendimento e Emergência Nacional (+50 Hospitais)',
    logoAlt: 'SulAmérica Saúde',
    logoUrl: SULAMERICA_LOGO_SVG,
    totalHospitals: '+50 Hospitais',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    hospitalsSectionTitle: 'Cobertura na Zona Norte & Hospitais Próximos de Renome',
    hospitals: [
      {
        name: 'Hospital HSANP (Santana)',
        address: 'R. Voluntários da Pátria, 4301',
        details: 'PS 24h, Internação Geral e Maternidade na ZN'
      },
      {
        name: 'Hospital Ipiranga Arujá (Região Próxima / Rota)',
        details: 'PS e Internação'
      },
      {
        name: 'Hospital de Clínicas Caieiras (Região Próxima / Rota ZN)',
        details: 'PS e Internação Geral'
      },
      {
        name: 'Hospital Bosque da Saúde (Ipiranga)',
        details: 'Referência em Internações'
      }
    ],
    diagnostics: ['Delboni Auriemo', 'CDB', 'Crya', 'Femme', 'Lavoisier']
  }
];

export const BOARD_DECISION_BOXES = [
  {
    id: 'sulamerica',
    operator: 'SulAmérica Saúde',
    color: 'border-orange-500 bg-orange-50/50',
    textColor: 'text-orange-950',
    badgeColor: 'bg-orange-600 text-white',
    icon: 'fa-globe-americas',
    condition: 'A cooperativa precisar de abrangência nacional para colaboradores e motoristas que viajam e necessitam de atendimento médico emergencial ou eletivo fora do Estado de SP.'
  },
  {
    id: 'porto',
    operator: 'Porto Saúde',
    color: 'border-emerald-600 bg-emerald-50/50',
    textColor: 'text-emerald-950',
    badgeColor: 'bg-emerald-700 text-white',
    icon: 'fa-notes-medical',
    condition: 'A prioridade for terceirizar e incluir a Gestão de Saúde Ocupacional (SST e exames) diretamente no contrato do plano de saúde, com atuação focada no Estado de SP.'
  }
];

export const PDF_DOCUMENTS: PdfDocument[] = [
  {
    id: 'plena-pdf',
    title: 'Rede Completa - Plena Saúde Blue 600',
    operator: 'Plena Saúde',
    logoAlt: 'Plena Saúde',
    logoUrl: PLENA_LOGO_SVG,
    fileSize: '1.8 MB',
    pages: 12
  },
  {
    id: 'porto-pdf',
    title: 'Rede Completa - Porto Seguro Linha Pro',
    operator: 'Porto Saúde',
    logoAlt: 'Porto Saúde',
    logoUrl: PORTO_LOGO_SVG,
    fileSize: '3.2 MB',
    pages: 24
  },
  {
    id: 'sulamerica-pdf',
    title: 'Rede Completa - SulAmérica Direto Nacional',
    operator: 'SulAmérica Saúde',
    logoAlt: 'SulAmérica Saúde',
    logoUrl: SULAMERICA_LOGO_SVG,
    fileSize: '2.9 MB',
    pages: 28
  }
];
