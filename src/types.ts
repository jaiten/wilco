export interface Project {
  id: string;
  title: string;
  category: "civil" | "landscape" | "sportsfields" | "parks" | "urban_spaces" | "buildings_structures" | "streetscapes_roads" | "environmental";
  categoryLabel: string;
  location: string;
  description: string;
  imageUrl: string;
  technicalSpecs?: string[];
  featured?: boolean;
  completionYear: string;
  client?: string;
  size?: string;
}

export interface Division {
  id: string;
  title: string;
  code: string;
  description: string;
  imageUrl: string;
  services: string[];
  features: string[];
}

export interface Office {
  id: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  role: string;
  coordinates: { x: number; y: number }; // Simulated map percentages
}

export interface WilcoCompanyLink {
  name: string;
  region: string;
  url: string;
}

export interface Job {
  id: string;
  title: string;
  department: "Management" | "Operations" | "Engineering" | "Safety";
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface ContactFormInput {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  office: string;
}

export interface QuoteFormInput {
  company: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  timeline: string;
  estimatedBudget: string;
  scopeDescription: string;
}
