import {
  PricingRow,
  HighlightCard,
  OperatorDifferential,
  LocalNetworkOperator,
  PdfDocument
} from './types';

function encodeSvg(svg: string): string {
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.trim())}`;
}

export const ARKOS_LOGO_SVG = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 70" width="340" height="70">
  <defs>
    <linearGradient id="arkosGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0E6135" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
  </defs>
  <g transform="translate(10, 8)">
    <path d="M 27 2 C 12 2 0 14 0 29 C 0 44 12 56 27 56 C 42 56 54 44 54 29 C 54 14 42 2 27 2 Z M 27 12 C 36 12 44 20 44 29 C 44 38 36 46 27 46 C 18 46 10 38 10 29 C 10 20 18 12 27 12 Z" fill="url(#arkosGrad)"/>
    <path d="M 27 18 L 37 36 L 17 36 Z" fill="#0E6135"/>
    <circle cx="27" cy="29" r="4.5" fill="#10B981"/>
  </g>
  <text x="76" y="38" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#0E6135" letter-spacing="1">ARKOS</text>
  <text x="76" y="54" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="11" fill="#10B981" letter-spacing="3.5">BENEFÍCIOS</text>
</svg>`);

export const COOPERCITYSP_LOGO_SVG = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 70" width="320" height="70">
  <g transform="translate(8, 8)">
    <path d="M 28 2 L 52 12 L 52 34 C 52 46 28 54 28 54 C 28 54 4 46 4 34 L 4 12 Z" fill="#0E6135"/>
    <path d="M 28 7 L 46 15 L 46 32 C 46 41 28 48 28 48 C 28 48 10 41 10 32 L 10 15 Z" fill="#0B4F2A"/>
    <polygon points="28,15 32,23 40,23 33,28 36,36 28,31 20,36 23,28 16,23 24,23" fill="#F59E0B"/>
  </g>
  <text x="70" y="36" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="22" fill="#0E6135" letter-spacing="0.5">COOPERCITYSP</text>
  <text x="70" y="52" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="700" font-size="10" fill="#475569" letter-spacing="1.2">COOPERATIVA MUNICIPAL DE SP</text>
</svg>`);

export const PLENA_LOGO_SVG = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 70" width="290" height="70">
  <g transform="translate(8, 10)">
    <path d="M 22 4 C 34 4 42 14 42 26 C 42 38 24 46 22 48 C 20 46 2 38 2 26 C 2 14 10 4 22 4 Z" fill="#00529C"/>
    <path d="M 22 9 C 30 9 36 17 36 26 C 36 34 24 40 22 42 C 20 40 8 34 8 26 C 8 17 14 9 22 9 Z" fill="#00A8E8"/>
    <path d="M 22 16 C 26 16 30 21 30 26 C 30 31 22 35 22 35 C 22 35 14 31 14 26 C 14 21 18 16 22 16 Z" fill="#10B981"/>
  </g>
  <text x="58" y="39" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="26" fill="#00529C">Plena</text>
  <text x="132" y="39" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="700" font-size="26" fill="#00A8E8">Saúde</text>
  <text x="58" y="55" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="10" fill="#0284C7" letter-spacing="2">BLUE 600 • ZONA NORTE</text>
</svg>`);

export const PORTO_LOGO_SVG = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 70" width="280" height="70">
  <g transform="translate(8, 11)">
    <rect x="0" y="0" width="46" height="46" rx="12" fill="#00A3E0"/>
    <path d="M 13 23 L 20 30 L 33 15" stroke="#FFFFFF" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </g>
  <text x="66" y="42" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="32" fill="#001E62" letter-spacing="-1">porto</text>
  <text x="150" y="42" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="500" font-size="32" fill="#00A3E0" letter-spacing="-1">saúde</text>
  <text x="66" y="58" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="10" fill="#64748B" letter-spacing="2">LINHA PRO • EMPRESARIAL</text>
</svg>`);

export const SULAMERICA_LOGO_SVG = encodeSvg(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 70" width="310" height="70">
  <g transform="translate(8, 12)">
    <path d="M 2 22 C 12 6, 34 6, 42 16 C 28 14, 14 22, 8 34 Z" fill="#FF6500"/>
    <path d="M 44 22 C 34 38, 12 38, 4 28 C 18 30, 32 22, 38 10 Z" fill="#0033A0"/>
  </g>
  <text x="62" y="39" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="900" font-size="28" fill="#0033A0">Sul</text>
  <text x="110" y="39" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="600" font-size="28" fill="#0033A0">América</text>
  <text x="62" y="56" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-weight="800" font-size="11" fill="#FF6500" letter-spacing="2.5">SAÚDE • DIRETO NACIONAL</text>
</svg>`);

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
