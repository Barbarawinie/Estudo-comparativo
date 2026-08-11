export interface PricingRow {
  ageGroup: string;
  portoPrice: string;
  sulamericaPrice: string;
  portoValue: number;
  sulamericaValue: number;
}

export interface HighlightCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PlanDifferential {
  title: string;
  description: string;
}

export interface OperatorDifferential {
  operator: string;
  planName: string;
  highlightTag: string;
  logoAlt: string;
  logoUrl: string;
  differentials: PlanDifferential[];
  accentColor: string;
}

export interface HospitalInfo {
  name: string;
  address?: string;
  details: string;
}

export interface LocalNetworkOperator {
  id: string;
  operator: string;
  planName: string;
  networkProfile: string;
  logoAlt: string;
  logoUrl: string;
  totalHospitals: string;
  badgeColor: string;
  hospitalsSectionTitle: string;
  hospitals: HospitalInfo[];
  diagnostics: string[];
  attentionPoint?: string;
}

export interface PdfDocument {
  id: string;
  title: string;
  operator: string;
  logoAlt: string;
  logoUrl: string;
  fileSize: string;
  pages: number;
}

export interface CustomLogos {
  arkos: string;
  coopercitysp: string;
  sulamerica: string;
  porto: string;
  plena: string;
}
