import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowRight,
  ArrowUpRight,
  ChartBar,
  ChartLine,
  Check,
  CirclesFour,
  Clock,
  Lightning,
  CurrencyDollar,
  Rocket,
  Star,
  Code,
  Terminal,
  Sparkle,
  SquaresFour,
  Gauge,
  Percent,
  Cube,
  Cpu,
  Database,
  Globe,
  Play,
  Pause,
  Sliders,
  Envelope,
  Users,
  Calendar,
  X,
  Plus,
  CaretDown,
  MagnifyingGlass,
  Bell,
  Sun,
  Moon,
  Robot,
  Shield
} from "@phosphor-icons/react";
import { BRAND, NAV_LINKS, HERO_TICKER, METRICS, CHART_DATA, WORKFLOW_STEPS, WORKFLOW_CONNECTIONS, FEATURES, PRICING_TIERS, TESTIMONIALS, LOGOS } from "../constants";

// ─── Theme Toggle ───────────────────────────────────────────────────────
function ThemeToggle({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className="relative h-8 w-16 rounded-full bg-zinc-800 dark:bg-zinc-700 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <motion.div
        className="absolute top-1 left-1 h-6 w-6 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center"
        animate={{ x: dark ? 32 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {dark ? <Moon size={14} weight="fill" className="text-blue-400" /> : <Sun size={14} weight="fill" className="text-amber-500" />}
      </motion.div>
    </button>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────
function Navbar({ dark, onToggle }: { dark: boolean; onToggle: () => void }) {
  const { scrollY } = useScroll();
  const bg = useTransform(scrollY, [0, 80], ["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]);
  const blur = useTransform(scrollY, [0, 80], [0, 16]);

  return (
    <motion.header
      style={{ background: bg, backdropFilter: `blur(${blur}px)` }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#" className="flex items-center gap-2 text-lg font-bold tracking-tight text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-400 text-sm font-black text-black">
            A
          </span>
          {BRAND.name}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <ThemeToggle dark={dark} onToggle={onToggle} />
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-200 sm:inline-flex"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </motion.header>
  );
}

// ─── Aurora Blob Background ─────────────────────────────────────────────
function AuroraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] animate-pulse rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] animate-pulse rounded-full bg-violet-500/10 blur-[120px] delay-1000" />
      <div className="absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-blue-500/5 blur-[100px] delay-500" />
    </div>
  );
}

// ─── Hero Section ───────────────────────────────────────────────────────
function HeroSection() {
  const [tickerIdx, setTickerIdx] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setTickerIdx((i) => (i + 1) % HERO_TICKER.length), 2500);
    return () => clearInterval(iv);
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-4 pt-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-zinc-400">
          <Sparkle size={14} weight="fill" className="text-emerald-400" />
          Now in Public Beta
        </div>
        <h1 className="mb-4 text-4xl font-black tracking-tighter text-white md:text-7xl">
          Build Smarter
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
            with AI at Scale
          </span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
          {BRAND.description}
        </p>
        <div className="mb-4 flex items-center justify-center gap-2">
          <AnimatePresence mode="wait">
            <motion.span
              key={tickerIdx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-xs text-emerald-400/80"
            >
              <Lightning size={12} weight="fill" className="mr-1 inline" />
              {HERO_TICKER[tickerIdx]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#analytics"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200 active:scale-[0.98]"
          >
            See Live Demo
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition-all hover:border-white/20 hover:text-white active:scale-[0.98]"
          >
            View Pricing
            <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

      {/* Logo Wall */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-16 w-full max-w-4xl"
      >
        <p className="mb-6 text-center text-xs uppercase tracking-widest text-zinc-600">Trusted by leading teams</p>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50">
          {LOGOS.map((src, i) => (
            <img key={i} src={src} alt="" className="h-6" />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ─── Features Section ───────────────────────────────────────────────────
function FeaturesSection() {
  return (
    <section id="platform" className="relative px-4 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Everything you need to scale
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            From real-time analytics to AI-powered automation, ApexLab gives you the tools to move faster.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-6 transition-all hover:border-white/10 hover:bg-white/[0.04]"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${f.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                  {f.icon === "ChartLine" && <ChartLine size={20} className="text-emerald-400" />}
                  {f.icon === "Lightning" && <Lightning size={20} className="text-violet-400" />}
                  {f.icon === "Robot" && <Robot size={20} className="text-emerald-400" />}
                  {f.icon === "Gauge" && <Gauge size={20} className="text-amber-400" />}
                  {f.icon === "Shield" && <Shield size={20} className="text-rose-400" />}
                  {f.icon === "Code" && <Code size={20} className="text-sky-400" />}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{f.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-400">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Live Analytics Demo ─────────────────────────────────────────────────
function AnalyticsDemo() {
  const [activeTab, setActiveTab] = useState<"revenue" | "users" | "ai">("revenue");
  const data = CHART_DATA;

  const maxVal = Math.max(...data.map((d) => d.value));
  const getHeight = (v: number) => (v / maxVal) * 100;

  return (
    <section id="analytics" className="relative px-4 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Live Analytics Dashboard
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Real-time metrics and AI-powered insights at your fingertips.
          </p>
        </motion.div>

        {/* Quick Metrics */}
        <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
          {METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-4"
            >
              <p className="mb-1 text-xs text-zinc-500">{m.label}</p>
              <p className="text-2xl font-bold text-white">
                {m.prefix}{m.value.toLocaleString()}{m.suffix}
              </p>
              <span className={`inline-flex items-center gap-1 text-xs ${m.change >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                {m.change >= 0 ? "+" : ""}{m.change}%
              </span>
            </motion.div>
          ))}
        </div>

        {/* Chart */}
        <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-6">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex gap-2">
              {(["revenue", "users", "ai"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-all ${
                    activeTab === tab ? "bg-white text-zinc-900" : "bg-white/5 text-zinc-400 hover:text-white"
                  }`}
                >
                  {tab === "revenue" ? "Revenue" : tab === "users" ? "Users" : "AI Usage"}
                </button>
              ))}
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Current
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                <span className="h-2 w-2 rounded-full bg-zinc-600" />
                Previous
              </div>
            </div>
          </div>

          <div className="flex h-48 items-end gap-1.5 md:h-64">
            {data.map((d, i) => (
              <div key={d.name} className="flex flex-1 flex-col items-center justify-end gap-0.5">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${getHeight(d.value)}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full rounded-t bg-gradient-to-t from-emerald-500/80 to-emerald-400/40"
                  style={{ minHeight: 4 }}
                />
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${getHeight(d.prev)}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full rounded-t bg-zinc-600/40"
                  style={{ minHeight: 4 }}
                />
                <span className="mt-1 text-[10px] text-zinc-600">{d.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Workflow Builder Simulator ─────────────────────────────────────────
function WorkflowBuilder() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveStep((s) => (s + 1) % WORKFLOW_STEPS.length);
      }, 1200);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const handlePlay = () => setIsPlaying((p) => !p);

  return (
    <section className="relative px-4 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            AI Workflow Builder
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Visually design, connect, and deploy AI pipelines in minutes.
          </p>
        </motion.div>

        <div className="relative rounded-2xl border border-white/5 bg-white/[0.02] p-8">
          {/* Play button */}
          <button
            onClick={handlePlay}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:bg-white/10 active:scale-[0.95]"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} />}
          </button>

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {WORKFLOW_STEPS.map((step, i) => {
              const isActive = i === activeStep;
              const isDone = i < activeStep;
              const conn = WORKFLOW_CONNECTIONS.find((c) => c.from === step.id);

              return (
                <div key={step.id} className="flex flex-1 flex-col items-center">
                  <motion.div
                    animate={{
                      scale: isActive ? 1.1 : 1,
                      borderColor: isActive ? "rgba(52,211,153,0.5)" : isDone ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.1)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className={`relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-2xl border-2 bg-white/[0.03] transition-all ${
                      isActive ? "shadow-lg shadow-emerald-500/20" : ""
                    }`}
                    onClick={() => { setActiveStep(i); setIsPlaying(false); }}
                  >
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-${isActive ? 20 : 5}`} />
                    {step.icon === "Database" && <Database size={28} className={`relative z-10 ${isActive ? "text-emerald-300" : "text-zinc-500"}`} weight={isActive ? "fill" : "regular"} />}
                    {step.icon === "Cpu" && <Cpu size={28} className={`relative z-10 ${isActive ? "text-violet-300" : "text-zinc-500"}`} weight={isActive ? "fill" : "regular"} />}
                    {step.icon === "ChartBar" && <ChartBar size={28} className={`relative z-10 ${isActive ? "text-cyan-300" : "text-zinc-500"}`} weight={isActive ? "fill" : "regular"} />}
                    {step.icon === "Lightning" && <Lightning size={28} className={`relative z-10 ${isActive ? "text-amber-300" : "text-zinc-500"}`} weight={isActive ? "fill" : "regular"} />}
                  </motion.div>
                  <p className={`mt-3 text-xs font-medium ${isActive ? "text-emerald-300" : "text-zinc-500"}`}>{step.label}</p>
                  {conn && (
                    <motion.div
                      animate={{ opacity: isDone ? 1 : 0.2 }}
                      className="mt-1 text-zinc-600"
                    >
                      <CaretDown size={14} />
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── ROI Calculator ─────────────────────────────────────────────────────
function RoiCalculator() {
  const [employees, setEmployees] = useState(50);
  const [salary, setSalary] = useState(75000);
  const [efficiency, setEfficiency] = useState(20);

  const hoursSaved = employees * 2080 * (efficiency / 100);
  const costSavings = hoursSaved * (salary / 2080);
  const productivityGain = Math.round((efficiency / 100) * 100);

  return (
    <section className="relative px-4 py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            ROI Calculator
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            See how much your team could save with ApexLab automation.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6 rounded-2xl border border-white/5 bg-white/[0.02] p-6">
            <div>
              <label className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                <span>Team Size</span>
                <span className="font-mono text-white">{employees}</span>
              </label>
              <input
                type="range"
                min={5}
                max={500}
                step={5}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                <span>Avg Salary ($)</span>
                <span className="font-mono text-white">${salary.toLocaleString()}</span>
              </label>
              <input
                type="range"
                min={30000}
                max={200000}
                step={5000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
            <div>
              <label className="mb-2 flex items-center justify-between text-sm text-zinc-400">
                <span>Efficiency Gain (%)</span>
                <span className="font-mono text-white">{efficiency}%</span>
              </label>
              <input
                type="range"
                min={5}
                max={50}
                step={5}
                value={efficiency}
                onChange={(e) => setEfficiency(Number(e.target.value))}
                className="w-full accent-emerald-500"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center gap-6 rounded-2xl border border-white/5 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 p-6">
            <div>
              <p className="text-xs text-zinc-500">Hours Saved / Year</p>
              <p className="text-3xl font-bold text-white">{Math.round(hoursSaved).toLocaleString()}h</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">Cost Savings / Year</p>
              <p className="text-3xl font-bold text-emerald-400">${Math.round(costSavings).toLocaleString()}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500">Productivity Gain</p>
              <p className="text-3xl font-bold text-cyan-400">+{productivityGain}%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ───────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Trusted by industry leaders
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            Hear from the teams already transforming their workflows with ApexLab.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/5 bg-white/[0.02] p-6"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} weight="fill" className="text-amber-400" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-zinc-300">{t.text}</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full bg-zinc-700" />
                <div>
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing Section ────────────────────────────────────────────────────
function PricingSection() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative px-4 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto max-w-xl text-zinc-400">
            No hidden fees. Scale as you grow.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <span className={`text-sm ${annual ? "text-zinc-400" : "text-white"}`}>Monthly</span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative h-7 w-12 rounded-full transition-colors ${annual ? "bg-emerald-500" : "bg-zinc-700"}`}
          >
            <motion.div
              animate={{ x: annual ? 22 : 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-1 h-5 w-5 rounded-full bg-white"
            />
          </button>
          <span className={`text-sm ${annual ? "text-white" : "text-zinc-400"}`}>
            Annual <span className="text-emerald-400">Save 20%</span>
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PRICING_TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-2xl border p-6 transition-all ${
                tier.highlighted
                  ? "border-emerald-500/30 bg-gradient-to-b from-emerald-500/5 to-transparent"
                  : "border-white/5 bg-white/[0.02]"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-0.5 text-xs font-semibold text-black">
                  Most Popular
                </div>
              )}
              <h3 className="mb-2 text-lg font-bold text-white">{tier.name}</h3>
              <p className="mb-4 text-xs text-zinc-500">{tier.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-black text-white">${annual ? tier.yearly : tier.monthly}</span>
                <span className="ml-1 text-sm text-zinc-500">/month</span>
              </div>
              <ul className="mb-6 space-y-2">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-zinc-400">
                    <Check size={14} weight="bold" className="mt-0.5 shrink-0 text-emerald-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all active:scale-[0.98] ${
                  tier.highlighted
                    ? "bg-white text-zinc-900 hover:bg-zinc-200"
                    : "border border-white/10 text-zinc-300 hover:border-white/20 hover:text-white"
                }`}
              >
                {tier.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Lead Capture Modal ─────────────────────────────────────────────────
function LeadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Name and email are required.");
      return;
    }
    const existing = JSON.parse(localStorage.getItem("apexlab_leads") || "[]");
    localStorage.setItem("apexlab_leads", JSON.stringify([...existing, { ...form, date: new Date().toISOString() }]));
    setSubmitted(true);
    toast.success("Thanks! We will be in touch soon.");
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", message: "" });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-60 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-white"
            >
              <X size={16} />
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check size={32} weight="bold" className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white">You are on the list!</h3>
                <p className="mt-2 text-sm text-zinc-400">We will reach out shortly.</p>
              </div>
            ) : (
              <>
                <div className="mb-2 flex items-center gap-2">
                  <Rocket size={20} weight="fill" className="text-emerald-400" />
                  <h3 className="text-lg font-bold text-white">Get Early Access</h3>
                </div>
                <p className="mb-6 text-sm text-zinc-400">Be the first to try ApexLab. No spam, ever.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    placeholder="Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-emerald-500/50"
                  />
                  <input
                    placeholder="Email *"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-emerald-500/50"
                  />
                  <input
                    placeholder="Company"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-emerald-500/50"
                  />
                  <textarea
                    placeholder="Message (optional)"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none focus:border-emerald-500/50"
                  />
                  <button
                    type="submit"
                    className="w-full rounded-full bg-white py-2.5 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200 active:scale-[0.98]"
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── Contact / Footer Section ───────────────────────────────────────────
function ContactSection({ onOpenLead }: { onOpenLead: () => void }) {
  return (
    <section id="contact" className="relative px-4 py-32">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">
            Ready to transform your workflow?
          </h2>
          <p className="mb-8 text-zinc-400">
            Join thousands of teams already using ApexLab to ship faster, automate smarter, and scale without limits.
          </p>
          <button
            onClick={onOpenLead}
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-200 active:scale-[0.98]"
          >
            Get Early Access
            <Rocket size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </button>
        </motion.div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl border-t border-white/5 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-emerald-400 to-cyan-400 text-xs font-black text-black">A</span>
            {BRAND.name} &mdash; {new Date().getFullYear()}
          </div>
          <div className="flex items-center gap-4 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400">Privacy</a>
            <a href="#" className="hover:text-zinc-400">Terms</a>
            <a href="#" className="hover:text-zinc-400">Security</a>
            <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1 hover:text-zinc-400">
              <Envelope size={12} />
              {BRAND.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Main App Assembly ──────────────────────────────────────────────────
export default function MainApp() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("apexlab_theme");
    return saved ? saved === "dark" : true;
  });
  const [leadOpen, setLeadOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("apexlab_theme", dark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="relative min-h-screen bg-zinc-950 text-white antialiased selection:bg-emerald-500/30">
      <AuroraBackground />
      <Navbar dark={dark} onToggle={() => setDark((d) => !d)} />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AnalyticsDemo />
        <WorkflowBuilder />
        <RoiCalculator />
        <TestimonialsSection />
        <PricingSection />
        <ContactSection onOpenLead={() => setLeadOpen(true)} />
      </main>
      <LeadModal open={leadOpen} onClose={() => setLeadOpen(false)} />
    </div>
  );
}