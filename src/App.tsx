import { useState, useEffect } from 'react';
import {
  ARKOS_LOGO_SVG,
  COOPERCITYSP_LOGO_SVG,
  PLENA_LOGO_SVG,
  PORTO_LOGO_SVG,
  SULAMERICA_LOGO_SVG,
  HIGHLIGHT_CARDS,
  PRICING_TABLE,
  TOTAL_PORTO,
  TOTAL_SULAMERICA,
  ORIGINAL_SULAMERICA,
  ECONOMY_SULAMERICA,
  OPERATOR_DIFFERENTIALS,
  LOCAL_NETWORK_OPERATORS,
  BOARD_DECISION_BOXES,
  PDF_DOCUMENTS
} from './data';
import { PdfDocument } from './types';

interface CustomLogos {
  arkos: string;
  coopercitysp: string;
  sulamerica: string;
  porto: string;
  plena: string;
}

const DEFAULT_LOGOS: CustomLogos = {
  arkos: ARKOS_LOGO_SVG,
  coopercitysp: COOPERCITYSP_LOGO_SVG,
  sulamerica: SULAMERICA_LOGO_SVG,
  porto: PORTO_LOGO_SVG,
  plena: PLENA_LOGO_SVG
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'all' | 'finance' | 'differentials' | 'network'>('all');
  const [selectedPdf, setSelectedPdf] = useState<PdfDocument | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  // Logo state loaded from localStorage or fallback to defaults
  const [logos, setLogos] = useState<CustomLogos>(() => {
    try {
      const saved = localStorage.getItem('arkos_custom_logos');
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_LOGOS, ...parsed };
      }
    } catch {
      // Fallback if parsing error
    }
    return DEFAULT_LOGOS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('arkos_custom_logos', JSON.stringify(logos));
    } catch {
      // Ignore quota errors
    }
  }, [logos]);

  const handleFileUpload = (key: keyof CustomLogos, file: File) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setLogos(prev => ({ ...prev, [key]: result }));
      }
    };
    reader.readAsDataURL(file);
  };

  const handleUrlChange = (key: keyof CustomLogos, url: string) => {
    setLogos(prev => ({ ...prev, [key]: url || DEFAULT_LOGOS[key] }));
  };

  const handleResetLogos = () => {
    setLogos(DEFAULT_LOGOS);
    try {
      localStorage.removeItem('arkos_custom_logos');
    } catch {
      // Ignore
    }
  };

  const filteredPricing = PRICING_TABLE.filter(row =>
    row.ageGroup.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#1A1A1A] font-sans antialiased selection:bg-[#10B981] selection:text-white pb-16">
      {/* SECTION 1: EXECUTIVE HEADER */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Header Left: Arkos Benefícios */}
            <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
              <div className="flex items-center gap-4">
                <img
                  src={logos.arkos}
                  alt="Arkos Benefícios"
                  className="h-20 sm:h-24 md:h-28 w-auto object-contain rounded-xl shadow-xs border border-slate-100"
                />
                <div className="hidden sm:block">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-[#0E6135]/10 text-[#0E6135] border border-[#0E6135]/20">
                    <i className="fa-solid fa-award mr-1.5 text-xs"></i>
                    Consultoria Especializada em Benefícios
                  </span>
                </div>
              </div>
            </div>

            {/* Header Right: Presentation Badge & Customizer */}
            <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
              <button
                onClick={() => setIsLogoModalOpen(true)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#0E6135]/10 hover:bg-[#0E6135]/20 text-[#0E6135] border border-[#0E6135]/20 transition-colors cursor-pointer"
                title="Gerenciar e enviar arquivos de logotipos oficiais"
              >
                <i className="fa-solid fa-images text-xs"></i>
                <span>Personalizar Logotipos</span>
              </button>
              <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                <i className="fa-solid fa-building-user mr-1.5 text-xs text-[#0E6135]"></i>
                Apresentação Comercial Executiva
              </span>
            </div>
          </div>

          {/* Main Title Banner */}
          <div className="mt-6 pt-5 border-t border-slate-100 text-center md:text-left flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                Estudo Comparativo de Planos de Saúde
              </h1>
            </div>

            <div className="flex items-center gap-2 self-center md:self-auto bg-slate-100 p-1.5 rounded-xl border border-slate-200">
              <span className="text-xs font-bold text-slate-600 px-2">Cliente:</span>
              <span className="bg-white px-3 py-1 rounded-lg text-xs font-black text-[#0E6135] shadow-xs border border-slate-200">
                COOPERCITYSP (Cooper City)
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        {/* SECTION 2: HUMANIZED HIGHLIGHT CARDS (3 TOP HIGHLIGHTS) */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HIGHLIGHT_CARDS.map(card => (
            <div
              key={card.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1.5 h-full bg-[#0E6135] group-hover:bg-[#10B981] transition-colors"></div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#0E6135]/10 flex items-center justify-center text-[#0E6135] text-xl group-hover:scale-105 transition-transform">
                    <i className={`fa-solid ${card.icon}`}></i>
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1A1A] leading-snug">
                    {card.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed pl-1">
                  {card.description}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-end text-xs font-semibold text-[#0E6135]">
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </div>
            </div>
          ))}
        </section>

        {/* INTERACTIVE TAB NAVIGATION */}
        <nav
          className="bg-white p-2 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap items-center justify-between gap-2 sticky top-[100px] z-20 backdrop-blur-md bg-white/95"
          aria-label="Navegação de abas"
        >
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            <button
              id="tab-all"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-[#0E6135] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-[#0E6135] fa-layer-group"></i>
              Visão Geral Completa
            </button>

            <button
              id="tab-financeira"
              onClick={() => setActiveTab('finance')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'finance'
                  ? 'bg-[#0E6135] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-chart-pie"></i>
              Tabela Financeira & Valores
            </button>

            <button
              id="tab-diferenciais"
              onClick={() => setActiveTab('differentials')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'differentials'
                  ? 'bg-[#0E6135] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-scale-balanced"></i>
              Diferenciais de Mercado
            </button>

            <button
              id="tab-rede"
              onClick={() => setActiveTab('network')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === 'network'
                  ? 'bg-[#0E6135] text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              }`}
            >
              <i className="fa-solid fa-hospital-user"></i>
              Rede Credenciada ZN
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 font-medium px-3">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            Apresentação Ativa
          </div>
        </nav>

        {/* SECTION 3: FINANCIAL DASHBOARD & PER CAPITA PRICING TABLE */}
        {(activeTab === 'all' || activeTab === 'finance') && (
          <section id="section-finance" className="space-y-6 scroll-mt-32">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#0E6135] bg-[#0E6135]/10 px-3 py-1 rounded-md">
                  Seção Financeira
                </span>
                <h2 className="text-2xl font-bold text-[#1A1A1A] mt-2">
                  Demonstrativo de Investimento Mensal e Tabela Per Capita
                </h2>
                <p className="text-sm text-slate-600">
                  Comparativo direto de investimento por faixa etária entre Porto Saúde e SulAmérica Saúde
                </p>
              </div>

              <div className="relative w-full md:w-64">
                <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input
                  type="text"
                  placeholder="Buscar faixa etária..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-white text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0E6135] shadow-2xs"
                />
              </div>
            </div>

            {/* Summary Metric Cards Above Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* PORTO SAÚDE Metric Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={logos.porto}
                      alt="Porto Saúde"
                      className="h-10 w-auto object-contain rounded-lg border border-slate-100 shadow-2xs"
                    />
                    <div>
                      <h3 className="text-base font-bold text-[#004080]">PORTO SAÚDE</h3>
                      <p className="text-xs text-slate-500 font-medium">Prata Pro - Regional 30% Copar</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                    Total Mensal (31 Vidas)
                  </span>
                  <div className="text-3xl font-black text-[#1A1A1A] tracking-tight">{TOTAL_PORTO}</div>
                  <p className="text-xs font-semibold text-slate-600 mt-2 flex items-center gap-1.5">
                    <i className="fa-solid fa-users text-[#004080]"></i>
                    Média por vida: R$ 286,89 / mês
                  </p>
                </div>
              </div>

              {/* SULAMÉRICA SAÚDE Metric Card */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={logos.sulamerica}
                      alt="SulAmérica Saúde"
                      className="h-10 w-auto object-contain rounded-lg border border-slate-100 shadow-2xs"
                    />
                    <div>
                      <h3 className="text-base font-bold text-[#E65100]">SULAMÉRICA SAÚDE</h3>
                      <p className="text-xs text-slate-500 font-medium">Direto Nacional - Enf 30% Copar</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-full border border-emerald-300 shadow-2xs">
                    <i className="fa-solid fa-tag mr-1"></i> -16% Negociado
                  </span>
                </div>

                <div className="bg-orange-50/60 rounded-xl p-4 border border-orange-100">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      Total Mensal (31 Vidas)
                    </span>
                    <span className="text-xs line-through text-slate-400 font-medium">
                      {ORIGINAL_SULAMERICA}
                    </span>
                  </div>
                  <div className="text-3xl font-black text-[#1A1A1A] tracking-tight">{TOTAL_SULAMERICA}</div>

                  <p className="text-xs font-semibold text-slate-600 mt-2 flex items-center gap-1.5">
                    <i className="fa-solid fa-users text-[#E65100]"></i>
                    Média por vida: R$ 289,80 / mês
                  </p>

                  <div className="mt-2 pt-2 border-t border-orange-200/60 flex flex-wrap items-center justify-between text-xs gap-2">
                    <span className="font-bold text-[#E65100] bg-orange-100/80 px-2.5 py-0.5 rounded-md">
                      Economia de {ECONOMY_SULAMERICA}
                    </span>
                    <span className="font-medium text-slate-600">Com Desconto de -16% Negociado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exact Table Breakdown */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <i className="fa-solid fa-[#0E6135] fa-table text-[#0E6135]"></i>
                  <h3 className="text-sm font-bold text-[#1A1A1A]">
                    Tabela Detalhada de Preços Per Capita por Faixa Etária
                  </h3>
                </div>
                <span className="text-xs text-slate-500 italic">
                  *Valores mensais unitários por vida contratada
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border-b border-slate-200">
                      <th className="py-3.5 px-6">Faixa Etária</th>
                      <th className="py-3.5 px-6 text-right bg-blue-50/50 text-[#004080]">
                        Porto Saúde - Prata Pro
                      </th>
                      <th className="py-3.5 px-6 text-right bg-orange-50/50 text-[#E65100]">
                        SulAmérica Saúde - Direto Nac. (-16%)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {filteredPricing.map((row, idx) => (
                      <tr
                        key={idx}
                        className="hover:bg-slate-50/80 transition-colors"
                      >
                        <td className="py-3.5 px-6 font-bold text-slate-800">
                          {row.ageGroup}
                        </td>
                        <td className="py-3.5 px-6 text-right font-semibold text-[#004080] bg-blue-50/20">
                          {row.portoPrice}
                        </td>
                        <td className="py-3.5 px-6 text-right font-semibold text-[#E65100] bg-orange-50/20">
                          {row.sulamericaPrice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-slate-900 text-white text-sm font-bold border-t-2 border-slate-900">
                      <td className="py-4 px-6 font-extrabold tracking-wide">
                        TOTAL MENSAL DA PROPOSTA (31 VIDAS)
                      </td>
                      <td className="py-4 px-6 text-right font-black text-blue-300 text-base">
                        {TOTAL_PORTO}
                      </td>
                      <td className="py-4 px-6 text-right font-black text-orange-300 text-base">
                        {TOTAL_SULAMERICA}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: KEY MARKET DIFFERENTIALS (PORTO VS SULAMÉRICA) */}
        {(activeTab === 'all' || activeTab === 'differentials') && (
          <section id="section-differentials" className="space-y-6 scroll-mt-32">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0E6135] bg-[#0E6135]/10 px-3 py-1 rounded-md">
                Estratégia & Valor Agregado
              </span>
              <h2 className="text-2xl font-bold text-[#1A1A1A] mt-2">
                Diferenciais Competitivos de Mercado
              </h2>
              <p className="text-sm text-slate-600">
                Análise comparativa das soluções exclusivas de cada operadora para a tomada de decisão da diretoria
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {OPERATOR_DIFFERENTIALS.map((op, idx) => {
                const opLogo = op.operator.toLowerCase().includes('porto') ? logos.porto : logos.sulamerica;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                  >
                    <div>
                      {/* Header Banner */}
                      <div
                        className="p-6 text-white"
                        style={{ backgroundColor: op.accentColor }}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <img
                            src={opLogo}
                            alt={op.logoAlt}
                            className="h-10 w-auto object-contain bg-white px-2.5 py-1 rounded-xl shadow-xs border border-slate-100"
                          />
                          <span className="text-xs font-extrabold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full border border-white/30">
                            {op.operator}
                          </span>
                        </div>
                        <h3 className="text-xl font-black">{op.planName}</h3>
                        <p className="text-xs font-semibold text-white/90 mt-1 flex items-center gap-1.5">
                          <i className="fa-solid fa-star text-amber-300"></i>
                          {op.highlightTag}
                        </p>
                      </div>

                      {/* Differentials List */}
                      <div className="p-6 space-y-5">
                        {op.differentials.map((diff, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-3">
                            <div className="w-7 h-7 rounded-lg bg-slate-100 flex items-center justify-center text-[#0E6135] font-bold text-xs shrink-0 mt-0.5 border border-slate-200">
                              {dIdx + 1}
                            </div>
                            <div>
                              <h4 className="text-sm font-bold text-[#1A1A1A]">
                                {diff.title}
                              </h4>
                              <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                                {diff.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span>Incluso na Negociação Comercial</span>
                      <i className="fa-solid fa-circle-check text-[#10B981]"></i>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 5: HOSPITAL NETWORK COMPARISON (LOCAL ZN VS HIGH-RENOWN EXPANSION) */}
        {(activeTab === 'all' || activeTab === 'network') && (
          <section id="section-network" className="space-y-6 scroll-mt-32">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0E6135] bg-[#0E6135]/10 px-3 py-1 rounded-md">
                Rede Credenciada & Cobertura
              </span>
              <h2 className="text-2xl font-black text-[#1A1A1A] mt-2">
                Rede Hospitalar e Laboratorial de Referência
              </h2>
              <p className="text-sm font-semibold text-slate-600 mt-1">
                Análise comparativa da estrutura hospitalar e centros de diagnóstico validados para os colaboradores da COOPERCITYSP
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {LOCAL_NETWORK_OPERATORS.map(op => {
                const opLogo = op.id === 'plena' ? logos.plena : op.id === 'porto' ? logos.porto : logos.sulamerica;
                return (
                  <div
                    key={op.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
                  >
                    <div className="p-6 space-y-5">
                      {/* Header */}
                      <div className="flex items-center justify-between gap-3 pb-4 border-b border-slate-100">
                        <img
                          src={opLogo}
                          alt={op.logoAlt}
                          className="h-10 w-auto object-contain rounded-lg border border-slate-100 shadow-2xs"
                        />
                        <span className={`px-3 py-1 rounded-full text-xs font-extrabold border ${op.badgeColor}`}>
                          {op.totalHospitals}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-base font-black text-[#1A1A1A]">
                          {op.operator} ({op.planName})
                        </h3>
                        <div className="mt-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                          <span className="font-extrabold text-slate-700 block text-[11px] uppercase tracking-wider mb-0.5">
                            • Perfil da Rede:
                          </span>
                          <span className="text-slate-800 font-semibold">
                            {op.networkProfile}
                          </span>
                        </div>
                      </div>

                      {/* Hospitals */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider flex items-center gap-1.5">
                          <i className="fa-solid fa-hospital text-[#0E6135]"></i>
                          • {op.hospitalsSectionTitle}:
                        </h4>
                        <ul className="space-y-3 text-xs">
                          {op.hospitals.map((h, hIdx) => (
                            <li key={hIdx} className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                              <span className="font-bold text-[#1A1A1A] block">
                                • {h.name}
                              </span>
                              {h.address && (
                                <span className="text-[#0E6135] font-medium block text-[11px] mt-0.5">
                                  <i className="fa-solid fa-location-dot mr-1"></i>
                                  {h.address}
                                </span>
                              )}
                              <span className="text-slate-600 block mt-1 leading-snug">
                                ({h.details})
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Diagnostics */}
                      <div className="pt-2">
                        <h4 className="text-xs font-extrabold text-slate-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                          <i className="fa-solid fa-microscope text-[#0E6135]"></i>
                          • Laboratórios na ZN:
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {op.diagnostics.map((diag, dIdx) => (
                            <span
                              key={dIdx}
                              className="bg-slate-100 text-slate-800 text-[11px] font-semibold px-2.5 py-1 rounded-lg border border-slate-200"
                            >
                              {diag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Attention Point (if any) */}
                      {op.attentionPoint && (
                        <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3 text-xs text-amber-900">
                          <span className="font-extrabold uppercase text-[11px] tracking-wide block mb-0.5 text-amber-950">
                            • Ponto de Atenção:
                          </span>
                          <p className="font-medium">{op.attentionPoint}</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 6: ADVISORY DECISION GUIDE FOR THE BOARD */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0E6135] flex items-center justify-center text-white text-lg">
              <i className="fa-solid fa-compass text-white"></i>
            </div>
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0E6135]">
                Recomendação da Consultoria
              </span>
              <h2 className="text-xl font-bold text-[#1A1A1A]">
                Guia Decisório para a Diretoria da COOPERCITYSP
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {BOARD_DECISION_BOXES.map(box => (
              <div
                key={box.id}
                className={`rounded-2xl p-6 border-2 ${box.color} flex flex-col justify-between space-y-4`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider ${box.badgeColor}`}>
                      {box.operator}
                    </span>
                    <i className={`fa-solid ${box.icon} text-xl text-slate-700`}></i>
                  </div>
                  <h3 className={`text-base font-bold ${box.textColor} leading-snug`}>
                    Escolha a {box.operator} se:
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed mt-2 font-medium">
                    {box.condition}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 text-xs font-semibold text-slate-600 flex items-center justify-between">
                  <span>Direcionamento Estratégico</span>
                  <i className="fa-solid fa-circle-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: NETWORK PDF DOWNLOAD CENTER */}
        <section className="space-y-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0E6135] bg-[#0E6135]/10 px-3 py-1 rounded-md">
              Documentação Oficial
            </span>
            <h2 className="text-2xl font-bold text-[#1A1A1A] mt-2">
              Central de Visualização de PDFs de Redes Credenciadas
            </h2>
            <p className="text-sm text-slate-600">
              Acesse e visualize a listagem hospitalar e diagnóstica completa de cada operadora
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PDF_DOCUMENTS.map(pdf => {
              const pdfLogo = pdf.id.includes('plena') ? logos.plena : pdf.id.includes('porto') ? logos.porto : logos.sulamerica;
              return (
                <div
                  key={pdf.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-between hover:border-[#0E6135] transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <img
                        src={pdfLogo}
                        alt={pdf.logoAlt}
                        className="h-8 w-auto object-contain rounded-lg border border-slate-100 shadow-2xs"
                      />
                      <i className="fa-solid fa-file-pdf text-red-600 text-2xl"></i>
                    </div>
                    <h3 className="text-sm font-bold text-[#1A1A1A] leading-snug">
                      {pdf.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2 text-xs text-slate-500">
                      <span><i className="fa-solid fa-file-lines mr-1 text-[#0E6135]"></i>{pdf.pages} Páginas</span>
                      <span><i className="fa-solid fa-hard-drive mr-1 text-[#0E6135]"></i>{pdf.fileSize}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedPdf(pdf)}
                    className="mt-6 w-full py-2.5 px-4 bg-slate-900 hover:bg-[#0E6135] text-white font-bold text-xs rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                  >
                    <i className="fa-solid fa-eye"></i>
                    Visualizar PDF
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 8: INSTITUTIONAL FOOTER */}
        <footer className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 text-center space-y-6">
          <div className="flex justify-center items-center gap-4 flex-wrap">
            <img
              src={logos.arkos}
              alt="Arkos Benefícios"
              className="h-14 sm:h-16 w-auto object-contain"
            />
            <span className="text-slate-300 font-light text-2xl">|</span>
            <img
              src={logos.coopercitysp}
              alt="COOPERCITYSP"
              className="h-14 sm:h-16 w-auto object-contain"
            />
          </div>

          <p className="text-sm font-medium text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A Arkos Benefícios atua na gestão contínua e estratégica da saúde corporativa da COOPERCITYSP.
          </p>

          <div className="pt-4 border-t border-slate-100 text-xs text-slate-400">
            © {new Date().getFullYear()} Arkos Benefícios. Todos os direitos reservados. Apresentação Comercial para a COOPERCITYSP.
          </div>
        </footer>
      </main>

      {/* PDF PREVIEW MODAL */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-file-pdf text-red-600 text-2xl"></i>
                <div>
                  <h3 className="font-bold text-base text-[#1A1A1A]">
                    {selectedPdf.title}
                  </h3>
                  <p className="text-xs text-slate-500">Documento Oficial - {selectedPdf.operator}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPdf(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="bg-slate-50 rounded-xl p-8 text-center border border-slate-200 space-y-3">
              <i className="fa-solid fa-file-circle-check text-4xl text-[#0E6135]"></i>
              <h4 className="font-bold text-slate-800 text-sm">Visor de Documento de Redes Credenciadas</h4>
              <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                O arquivo <strong className="text-slate-900">{selectedPdf.title}</strong> contém a relação integral de hospitais, prontos-socorros, maternidades e centros de diagnóstico credenciados.
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold rounded-lg text-slate-700">
                  Formato: PDF
                </span>
                <span className="px-3 py-1 bg-white border border-slate-200 text-xs font-semibold rounded-lg text-slate-700">
                  Tamanho: {selectedPdf.fileSize}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-end pt-2">
              <button
                onClick={() => setSelectedPdf(null)}
                className="px-6 py-2.5 bg-[#0E6135] hover:bg-[#073B20] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-xs"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* LOGO MANAGER MODAL */}
      {isLogoModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 space-y-6 shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0E6135]/10 flex items-center justify-center text-[#0E6135] text-lg">
                  <i className="fa-solid fa-images"></i>
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#1A1A1A]">
                    Gerenciador de Logotipos Finais
                  </h3>
                  <p className="text-xs text-slate-500">
                    Faça o upload dos arquivos originais (PNG, JPG, SVG) ou insira o link direto
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsLogoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-600 transition-colors cursor-pointer"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="space-y-4">
              {[
                { key: 'arkos' as const, label: 'Arkos Benefícios', brandColor: '#0E6135' },
                { key: 'sulamerica' as const, label: 'SulAmérica Saúde', brandColor: '#E65100' },
                { key: 'porto' as const, label: 'Porto Saúde / Porto Seguro', brandColor: '#004080' },
                { key: 'plena' as const, label: 'Plena Saúde', brandColor: '#0284C7' },
                { key: 'coopercitysp' as const, label: 'COOPERCITYSP (Cliente)', brandColor: '#1A1A1A' },
              ].map(item => (
                <div key={item.key} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800 uppercase tracking-wide flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.brandColor }}></span>
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Pré-visualização</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-36 h-14 bg-white rounded-lg border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-2xs">
                      <img
                        src={logos[item.key]}
                        alt={item.label}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <label className="px-3.5 py-1.5 bg-white border border-slate-300 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-700 cursor-pointer transition-colors shadow-2xs flex items-center gap-1.5">
                          <i className="fa-solid fa-upload text-[#0E6135]"></i>
                          Upload de Arquivo Anexo
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={e => {
                              const file = e.target.files?.[0];
                              if (file) handleFileUpload(item.key, file);
                            }}
                          />
                        </label>
                      </div>

                      <input
                        type="text"
                        placeholder="Ou cole o link direto da imagem (https://...)"
                        value={logos[item.key].startsWith('data:image/svg+xml') ? '' : logos[item.key]}
                        onChange={e => handleUrlChange(item.key, e.target.value)}
                        className="w-full text-xs px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#0E6135]"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handleResetLogos}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <i className="fa-solid fa-rotate-left"></i>
                Restaurar Imagens Padrão
              </button>

              <button
                onClick={() => setIsLogoModalOpen(false)}
                className="px-6 py-2.5 bg-[#0E6135] hover:bg-[#073B20] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                Salvar e Aplicar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
