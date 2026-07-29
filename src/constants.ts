import type { AnalyticsMetric, WorkflowStep, PricingTier, Testimonial } from "./types";

export const BRAND = {
  name: "ApexLab",
  tagline: "Intelligence at the edge of possibility",
  description: "Deploy production-grade AI agents, automate complex workflows, and surface real-time analytics — all from a single, unified platform.",
  email: "hello@apexlab.io",
};

export const NAV_LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Analytics", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const HERO_TICKER = [
  "AI-powered analytics at scale",
  "Automate workflows in minutes",
  "Real-time data, real decisions",
  "Deploy smarter, faster, stronger",
];

export const METRICS: AnalyticsMetric[] = [
  { label: "Active Users", value: 12847, change: 12.5, prefix: "" },
  { label: "API Calls", value: 894320, change: 8.3, prefix: "" },
  { label: "Avg Response Time", value: 42, change: -15.2, suffix: "ms" },
  { label: "Accuracy Rate", value: 98.7, change: 1.1, suffix: "%" },
];

export const CHART_DATA = [
  { name: "Jan", value: 4000, prev: 3200, ai: 800 },
  { name: "Feb", value: 5200, prev: 4100, ai: 1200 },
  { name: "Mar", value: 6100, prev: 4800, ai: 1800 },
  { name: "Apr", value: 7800, prev: 5200, ai: 2400 },
  { name: "May", value: 9200, prev: 6100, ai: 3100 },
  { name: "Jun", value: 11500, prev: 7200, ai: 4200 },
  { name: "Jul", value: 13800, prev: 8500, ai: 5600 },
  { name: "Aug", value: 15200, prev: 9300, ai: 6400 },
  { name: "Sep", value: 17100, prev: 10200, ai: 7500 },
  { name: "Oct", value: 19400, prev: 11400, ai: 8900 },
  { name: "Nov", value: 22100, prev: 12800, ai: 10200 },
  { name: "Dec", value: 25600, prev: 14500, ai: 11800 },
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { id: "1", label: "Data Ingestion", icon: "Database", color: "from-emerald-500 to-teal-500" },
  { id: "2", label: "AI Processing", icon: "Cpu", color: "from-violet-500 to-purple-500" },
  { id: "3", label: "Analysis", icon: "ChartBar", color: "from-blue-500 to-cyan-500" },
  { id: "4", label: "Action", icon: "Lightning", color: "from-amber-500 to-orange-500" },
];

export const WORKFLOW_CONNECTIONS = [
  { from: "1", to: "2" },
  { from: "2", to: "3" },
  { from: "3", to: "4" },
];

export const FEATURES = [
  {
    title: "Real-Time Analytics",
    description: "Live dashboards with sub-second latency, custom metrics, and anomaly detection powered by AI.",
    icon: "ChartLine",
    gradient: "from-blue-600/20 to-cyan-600/20",
  },
  {
    title: "AI Workflow Builder",
    description: "Drag-and-drop pipeline editor with pre-built AI agents, connectors, and auto-scaling infrastructure.",
    icon: "Lightning",
    gradient: "from-violet-600/20 to-purple-600/20",
  },
  {
    title: "Smart Automation",
    description: "Trigger-based automations that learn from your data and optimize execution paths in real time.",
    icon: "Robot",
    gradient: "from-emerald-600/20 to-teal-600/20",
  },
  {
    title: "Predictive Insights",
    description: "ML-powered forecasting that identifies trends, flags anomalies, and recommends actions before issues arise.",
    icon: "Gauge",
    gradient: "from-amber-600/20 to-orange-600/20",
  },
  {
    title: "Enterprise Security",
    description: "SOC 2 Type II certified, end-to-end encryption, RBAC, and audit logging across all deployments.",
    icon: "Shield",
    gradient: "from-rose-600/20 to-pink-600/20",
  },
  {
    title: "API Ecosystem",
    description: "RESTful and GraphQL APIs with SDKs for Python, TypeScript, Go, and Rust. Fully documented and versioned.",
    icon: "Code",
    gradient: "from-sky-600/20 to-indigo-600/20",
  },
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    monthly: 49,
    yearly: 39,
    description: "For small teams getting started with AI analytics.",
    features: ["Up to 5 users", "10K API calls/month", "7-day data retention", "Basic analytics", "Email support"],
    highlighted: false,
    cta: "Start Free Trial",
  },
  {
    name: "Pro",
    monthly: 149,
    yearly: 119,
    description: "For growing teams needing advanced capabilities.",
    features: ["Up to 25 users", "100K API calls/month", "30-day data retention", "Advanced analytics + AI", "Custom workflows", "Priority support"],
    highlighted: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise",
    monthly: 499,
    yearly: 399,
    description: "For organizations at scale with custom needs.",
    features: ["Unlimited users", "Unlimited API calls", "Unlimited data retention", "Full AI suite + custom models", "Dedicated infrastructure", "24/7 support + SLA", "SSO + RBAC", "On-premise option"],
    highlighted: false,
    cta: "Contact Sales",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "VP of Engineering",
    company: "Orbital",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sarah",
    text: "ApexLab transformed how we handle data pipelines. Our team went from 3 hours of manual processing to fully automated in under two weeks.",
    rating: 5,
  },
  {
    name: "Marcus Rivera",
    role: "CTO",
    company: "NexGen AI",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Marcus",
    text: "The analytics dashboard alone is worth the price. We caught a critical anomaly 48 hours before it would have impacted our customers.",
    rating: 5,
  },
  {
    name: "Emily Okonkwo",
    role: "Head of Data",
    company: "Quantix Labs",
    avatar: "https://api.dicebear.com/9.x/avataaars/svg?seed=Emily",
    text: "We evaluated 12 platforms before choosing ApexLab. None of them came close to the accuracy and flexibility of their AI workflow builder.",
    rating: 5,
  },
];

export const LOGOS = [
  "https://cdn.simpleicons.org/google/888888",
  "https://cdn.simpleicons.org/microsoft/888888",
  "https://cdn.simpleicons.org/amazon/888888",
  "https://cdn.simpleicons.org/stripe/888888",
  "https://cdn.simpleicons.org/spotify/888888",
  "https://cdn.simpleicons.org/notion/888888",
];