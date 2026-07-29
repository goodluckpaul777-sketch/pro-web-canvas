export interface AnalyticsMetric {
  label: string;
  value: number;
  change: number;
  prefix?: string;
  suffix?: string;
}

export interface WorkflowStep {
  id: string;
  label: string;
  icon: string;
  color: string;
}

export interface PricingTier {
  name: string;
  monthly: number;
  yearly: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
}

export interface LeadForm {
  name: string;
  email: string;
  company: string;
  message: string;
}