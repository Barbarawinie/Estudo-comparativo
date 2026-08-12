import {
  PricingRow,
  HighlightCard,
  OperatorDifferential,
  LocalNetworkOperator,
  PdfDocument
} from './types';

export const ARKOS_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 100" fill="none"><defs><linearGradient id="arkosGrad1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%230E6135"/><stop offset="100%" stop-color="%2310B981"/></linearGradient><linearGradient id="arkosGrad2" x1="0%" y1="100%" x2="100%" y2="0%"><stop offset="0%" stop-color="%23073B20"/><stop offset="100%" stop-color="%230E6135"/></linearGradient><linearGradient id="arkosGrad3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%2334D399"/><stop offset="100%" stop-color="%23059669"/></linearGradient></defs><g transform="translate(10, 12)"><path d="M 15 72 C 15 32, 38 12, 68 12 C 68 28, 48 42, 34 72 Z" fill="url(%23arkosGrad2)"/><path d="M 32 72 C 36 44, 56 22, 82 22 C 74 40, 54 54, 48 72 Z" fill="url(%23arkosGrad1)"/><path d="M 52 72 C 56 52, 70 34, 94 30 C 86 46, 68 58, 62 72 Z" fill="url(%23arkosGrad3)"/></g><text x="122" y="52" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="42" fill="%230E6135" letter-spacing="3">ARKOS</text><text x="124" y="74" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="15" fill="%2310B981" letter-spacing="5.5">BENEFÍCIOS</text></svg>`;

export const PLENA_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 80" fill="none"><defs><linearGradient id="plenaGrad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23DC2626"/><stop offset="100%" stop-color="%23991B1B"/></linearGradient></defs><g transform="translate(10, 12)"><path d="M28 8 C38 0, 52 10, 44 24 C56 20, 64 34, 52 44 C60 56, 44 64, 34 52 C28 64, 12 56, 20 42 C8 38, 12 20, 24 22 C16 10, 28 0, 28 8 Z" fill="url(%23plenaGrad)"/><circle cx="32" cy="32" r="8" fill="%23FFFFFF" opacity="0.9"/></g><text x="82" y="42" font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="30" fill="%23991B1B" letter-spacing="1">PLENA</text><text x="83" y="60" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="14" fill="%23DC2626" letter-spacing="3">SAÚDE</text></svg>`;

export const PORTO_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 32" width="138" height="32"><path fill-rule="evenodd" fill="%2300a1fc" d="m138 19.9c0 6.7-4.9 11.6-11.7 11.6c-6.9 0-11.7-4.9-11.7-11.6c0-6.6 4.8-11.5 11.7-11.5c6.8 0 11.7 4.9 11.7 11.5zm-5.5 0c0-4-2.5-6.8-6.2-6.8c-3.7 0-6.2 2.8-6.2 6.8c0 4.1 2.5 6.9 6.2 6.9c3.7 0 6.2-2.8 6.2-6.9z"/><path fill="%2300a1fc" d="m106.7 2v6.7h6.3v4.6h-6.3v9.5c0 2.2 1.2 3.4 3.3 3.4h3v4.9h-3.7c-4.8 0-8-2.8-8-7.8v-21.3z"/><path fill-rule="evenodd" fill="%2300a1fc" d="m83 19.9c0 6.7-4.9 11.6-11.7 11.6c-6.9 0-11.7-4.9-11.7-11.6c0-6.6 4.8-11.5 11.7-11.5c6.8 0 11.7 4.9 11.7 11.5zm-5.5 0c0-4-2.5-6.8-6.2-6.8c-3.7 0-6.2 2.8-6.2 6.8c0 4.1 2.5 6.9 6.2 6.9c3.7 0 6.2-2.8 6.2-6.9z"/><path fill-rule="evenodd" fill="%2300a1fc" d="m59.4 9.7c0 5.6-3.9 9.6-10.3 9.6h-6.6v11.8h-6v-31.1h12.6c6.4 0 10.3 4 10.3 9.7zm-5.7 0c0-2.5-1.4-4.8-4.9-4.8h-6.3v9.5h6.3c3.5 0 4.9-2.3 4.9-4.7z"/><path fill="%2300a1fc" d="m85.4 31.1v-14.5c0-5 3.2-7.9 8.1-7.9h5v5h-4.4c-2 0-3.2 1.1-3.2 3.4v14z"/><path fill-rule="evenodd" fill="%2300a1fc" d="m30.7 3.7v23.7c0 2.1-1.6 3.7-3.7 3.7h-23.4c-2 0-3.6-1.6-3.6-3.7v-23.7c0-2 1.6-3.7 3.6-3.7h23.4c2.1 0 3.7 1.7 3.7 3.7zm-22.5 16.2q-0.1 0-0.1 0.1c-0.4 3.7-1.5 6.3-2.6 7.9c-0.1 0.1 0.1 0.2 0.2 0.2c20.5-9.4 18.2-4.8 15.4-1.9c-0.2 0.2 0.1 0.4 0.3 0.3c14.2-11.6-0.3-11.8-13.2-6.6zm-1.1-11.7c0 0.1 0.1 0.1 0.1 0.1c10.5-2.1 15 0.3 16.6 1.8c0.2 0.1 0.3-0.1 0.3-0.2c-5.6-7-16.3-6.8-19.9-6.8c-0.1 0-0.2 0.2 0 0.3c1 0.7 2 2.2 2.9 4.8zm20.4 8.4c-2-8.7-13.8-8-19.6-5.9q-0.1 0-0.1 0.1c0.3 1.7 0.5 3.4 0.5 5.4q0 0.5 0 1.1c0 0 0 0.1 0.1 0.1c7.1-2.3 16.1-4 18.9-0.7c0 0.1 0.2 0.1 0.2-0.1z"/></svg>`;

export const SULAMERICA_LOGO_SVG = `data:image/svg+xml;utf8,<svg width="500" height="128" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="m359.98 7.4325c46.113-9.5702 104.47 18.641 138.19 8.5393 2.1809-0.65017 2.76 0.42875-0.52268 1.723-11.797 4.6502-31.922 3.7469-64.158 0.45995-66.609-6.7912-71.554 7.0089-107.08 17.284-27.836 8.0668-43.968 7.7635-43.968 7.7635s2.8584-1.4804 4.3701-2.4003c0.11134-0.069 42.946-27.092 73.174-33.369" fill="%23ff5000"/><path d="m2.7575 17.805c-3.5399 1.1416 20.972 16.336 81.113 6.1411 39.508-6.6951 88.879-18.603 123.64 8.3533 44.048 34.166 80.911 7.4562 80.731 7.6109 0 0-6.9982 1.909-41.892-0.93261-51.175-4.1589-59.063-48.43-111.84-37.141-23.954 5.1396-33.039 9.3966-50.228 14.292-47.077 13.369-69.517 4.8969-80.934 1.7187-0.23413-0.073705-0.50606-0.067433-0.58964-0.042341" fill="%23ff8c00"/><path d="m441.45 109.95h8.464c-1.0684 5.3444-6.9063 17.457-24.407 17.457-18.559 0-25.534-15.841-25.534-27.908 0-18.164 12.546-28.518 25.708-28.518 7.2764 0 13.754 2.4567 18.381 7.3141 3.2327 3.4019 4.8072 8.74 4.8072 8.74l-13.2 0.02509s-1.9069-4.8029-9.3254-4.8029c-5.8274 0-14.164 2.4255-14.164 16.638 0 3.7532 1.2754 16.853 13.986 16.853 2.3272 0 5.2232-0.0957 8.071-2.4108 2.8709-2.3209 2.4108-3.4082 7.2137-3.3873m-47.101-42.052h-14.243v-3.9853c0-1.8213 0.67966-3.3958 2.0366-4.7068 1.3612-1.3068 2.9816-1.9654 4.8823-1.9654h7.3246zm-66.324-10.649-9.4719 9.4594s-0.89905 1.0684-3.0026 1.0684h-6.3647l5.3109-7.9915c0.7256-0.96381 1.0036-1.5284 1.6163-1.9236 0.70051-0.46638 1.2064-0.6127 2.415-0.6127zm-164.81 0.11762c-3.8808 0-6.601 0.79868-8.1629 4.8823-0.65456 1.8296-22.963 64.514-22.963 64.514h14.578l5.1144-14.363 26.921-0.0298 5.081 14.379h14.737l-24.83-69.383zm-7.036 42.724 9.1228-25.545 7.82 21.996 1.2483 3.5651zm-43.026-35.496c0.0157-2.5196 0.7256-7.2764 6.7892-7.2556h7.4438l-0.0157 69.442h-14.218zm-6.604 7.8554v29.727c0 15.266-6.4881 25.158-23.084 25.158-16.286 0-23.475-9.5534-23.475-24.154l0.04234-30.672 14.051-0.05175 0.02509 31.993c0 8.0146 4.2467 10.21 8.7505 10.21 4.391 0 10.03-2.4861 10.03-10.271l-0.0392-24.997c0-1.8756 0.50386-3.5672 1.7752-4.9179 1.2651-1.3403 3.3999-2.0743 5.7605-2.0241zm237.34 54.232-0.0172-23.59c0-0.67322-0.50182-9.0035 1.2128-14.275 5.7082-17.714 28.761-16.299 28.75-16.324l-0.0314 13.763s-15.816-1.1813-15.816 9.8588l-0.0486 30.546zm-16.006-16.662 9.8691 0.0173c-1.5346 5.706-4.7839 10.225-9.0955 13.223-4.1777 2.9126-9.4928 4.2508-16.052 4.2508-7.5796 0-13.116-2.9084-17.735-7.8159-4.554-4.8489-6.7955-11.738-6.7955-20.332 0-8.7024 1.8713-15.028 6.2665-19.87 4.5101-4.943 10.804-8.3052 18.749-8.3052 7.3495 0 13.733 2.5615 18.254 7.5421 5.1583 5.704 7.0296 11.768 7.1969 21.164 0.0157 0.61254-0.0894 2.946-0.0894 3.0338l-38.093-0.0204c0.59388 7.6277 5.7522 13.052 13.415 13.052 6.5717 0 7.8702-2.204 10.381-4.4893 0.84259-0.75901 1.7752-1.449 3.7281-1.449m-27.324-16.33 24.462 0.05175c0-5.5201-4.483-11.379-11.837-11.379-7.2034 0-12.058 5.3737-12.625 11.327m-50.587 33.017h-13.825v-33.547c0-3.1573-0.82173-5.7605-2.7538-7.2095-1.9363-1.449-4.1066-2.1746-6.5132-2.1746-2.4047 0-4.5374 0.7256-6.413 2.1746-1.8713 1.449-2.9545 4.0522-2.9545 7.2095l0.0314 33.585-14.028-0.0157-0.0204-31.882c0-8.9575 2.944-15.028 7.4102-18.427 4.2196-3.2012 9.7354-5.0162 15.473-5.288 3.0757 0 5.6267 0.29906 8.7505 1.24 4.2843 1.2963 8.2382 5.568 8.2382 5.568s4.4077-6.6721 15.722-6.6721c5.8776 0 10.641 1.6372 15.243 5.152 4.6064 3.5148 8.669 9.2669 8.669 18.486l-0.0157 31.834-6.9837-0.0157c-1.9927 0-4.0083-0.59169-5.2734-1.8568-1.2692-1.2483-1.9174-2.8541-1.9174-4.83v-26.887c0-3.1573-1.1291-5.6686-3.0674-7.1154-1.9403-1.4575-4.115-2.1704-6.5132-2.1704-2.3982 0-4.5729 0.7129-6.5174 2.1704-1.9425 1.4468-2.7412 3.9581-2.7412 7.1154v2.7643zm144.34 0.0157h-14.275l0.0157-47.364c0-1.9027 0.50809-3.7532 1.8671-5.1269 1.3697-1.3549 3.0988-1.8086 5.3193-1.8086h7.0967zm105.64-38.154c0-4.805-1.9927-10.137-5.9885-12.811-3.8578-2.5196-8.6354-4.5751-16.368-4.5751-6.8896 0-11.985 1.9802-16.054 5.2337-3.632 2.9001-5.4658 5.978-6.2226 10.772l13.524 0.01568c0.33653-1.4595 2.0449-4.805 8.8258-4.805 3.1259 0 8.7129 10.37 8.7129 5.2942 0 2.7977-3.1093 4.4808-9.173 5.2754l-5.844 0.94719c-5.244 0.78818-8.3701 1.794-11.768 4.5059-3.2368 2.5907-5.8964 6.0721-5.8964 11.676 0 6.0115 2.6449 10.632 6.3732 13.229 3.7176 2.6054 9.0767 4.69 19.812 3.8808 2.6702-0.20277 5.911-1.173 8.2989-2.5573 0.43486 0.69 1.4282 2.3209 3.586 2.3209h8.2214zm-24.512 28.372c-1.8232 0-5.0266-0.71714-6.6407-2.2875-1.2274-1.2127-1.932-2.944-1.932-4.4808 0-1.4573 0.40977-3.3727 1.5953-4.5937 1.3341-1.3822 2.7078-1.7689 5.244-2.3106l4.7402-0.86141c4.0794-0.7485 6.3982-1.2483 8.2214-2.7307v5.4385c0 3.7364 1.2568 11.826-11.228 11.826m-475.45-12.526 13.637 0.03137c0.8531 4.4328 1.93 5.8693 4.3094 7.5356 2.9106 2.07 5.5243 2.7936 10.565 2.7454 10.421-0.1333 11.686-5.8796 11.663-7.9853-0.18614-14.187-38.76-5.0433-39.851-29.936-0.26769-6.2436 2.4401-11.866 6.8331-15.485 4.391-3.4897 9.4385-6.4401 17.913-6.5279 7.9497-0.10193 14.024 1.585 18.599 4.8112 5.3799 3.793 9.3548 10.53 9.6852 16.899l-7.8369 0.02039c-3.151 0-5.3256-1.2881-6.3521-3.6131-0.56251-1.2756-1.4763-2.62-2.8667-3.6216-2.3272-1.6726-6.1621-2.739-10.883-2.739-11.149 0-13.675 10.386-8.4683 13.564 12.451 7.5838 36.087 4.9284 37.495 24.882 0.31364 4.3679-1.4909 22.513-25.622 22.513-8.8823 0-15.103-2.2228-19.569-5.861-4.8845-3.634-8.6753-9.6433-9.2503-17.233" fill="%23001e64"/></svg>`;

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
  { ageGroup: '0 a 18 anos', plenaPrice: 'R$ 139,99', portoPrice: 'R$ 187,25', sulamericaPrice: 'R$ 166,16', plenaValue: 139.99, portoValue: 187.25, sulamericaValue: 166.16 },
  { ageGroup: '19 a 23 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 227,08', sulamericaPrice: 'R$ 207,70', plenaValue: 163.99, portoValue: 227.08, sulamericaValue: 207.70 },
  { ageGroup: '24 a 28 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 273,93', sulamericaPrice: 'R$ 257,54', plenaValue: 163.99, portoValue: 273.93, sulamericaValue: 257.54 },
  { ageGroup: '29 a 33 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 313,60', sulamericaPrice: 'R$ 285,87', plenaValue: 163.99, portoValue: 313.60, sulamericaValue: 285.87 },
  { ageGroup: '34 a 38 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 339,79', sulamericaPrice: 'R$ 305,89', plenaValue: 163.99, portoValue: 339.79, sulamericaValue: 305.89 },
  { ageGroup: '39 a 43 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 350,92', sulamericaPrice: 'R$ 354,82', plenaValue: 183.99, portoValue: 350.92, sulamericaValue: 354.82 },
  { ageGroup: '44 a 48 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 419,18', sulamericaPrice: 'R$ 424,16', plenaValue: 183.99, portoValue: 419.18, sulamericaValue: 424.16 },
  { ageGroup: '49 a 53 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 451,26', sulamericaPrice: 'R$ 497,11', plenaValue: 183.99, portoValue: 451.26, sulamericaValue: 497.11 },
  { ageGroup: '54 a 58 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 557,57', sulamericaPrice: 'R$ 591,81', plenaValue: 183.99, portoValue: 557.57, sulamericaValue: 591.81 },
  { ageGroup: '59+ anos', plenaPrice: 'R$ 463,99', portoPrice: 'R$ 937,23', sulamericaPrice: 'R$ 996,91', plenaValue: 463.99, portoValue: 937.23, sulamericaValue: 996.91 }
];

export const TOTAL_PLENA = 'R$ 9.343,55';
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
