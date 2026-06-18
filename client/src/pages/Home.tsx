/**
 * ORTO ONE — Clínica Odontológica
 * Design: Modernidade Humanizada — versão editorial assimétrica
 * Motivos: diagonal cuts, circle-number badge, tooth-plus-1 symbol
 * Paleta: Azul-teal + Dourado + Creme
 * Tipografia: Playfair Display (títulos) + DM Sans (corpo)
 * Voz: "O paciente é o número 1" — local, humano, direto
 */

import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Clock,
  Star,
  Instagram,
  Facebook,
  Menu,
  X,
  CheckCircle2,
  Award,
  Heart,
  Smile,
  Shield,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";

// ─── Asset URLs ──────────────────────────────────────────────────────────────
const HERO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663773031200/jqVxXr7UFfC2kxGoXgJykX/ortoone-hero-4ktUak224ZUnf6tDGksG7i.webp";
const SMILE_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663773031200/jqVxXr7UFfC2kxGoXgJykX/ortoone-smile-AVCFb9vTzh2xMY7L5cGXGt.webp";
const TEAM_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663773031200/jqVxXr7UFfC2kxGoXgJykX/ortoone-team-LTNQQQPpw9QmcL2XmG7TZD.webp";
const LOGO_IMG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663773031200/jqVxXr7UFfC2kxGoXgJykX/ortoone-logo-8vTSFiEQJEyXPD9AYEswZA.webp";

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.10 }
    );
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ─── Signature: Circle Number Badge ──────────────────────────────────────────
function NumberBadge({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-16 h-16 rounded-full border-2 border-[oklch(0.78_0.12_85)] flex items-center justify-center mb-2"
        style={{ background: "oklch(0.42 0.12 210 / 0.08)" }}
      >
        <span
          className="text-xl font-bold text-[oklch(0.42_0.12_210)]"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {n}
        </span>
      </div>
      <span className="text-xs text-[oklch(0.55_0.01_250)] text-center leading-tight max-w-[80px]">
        {label}
      </span>
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Serviços", href: "#servicos" },
    { label: "Avaliações", href: "#avaliacoes" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/96 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="Orto One" className="w-9 h-9 object-contain" />
            <div>
              <span
                className={`font-bold text-lg tracking-tight block transition-colors ${
                  scrolled ? "text-[oklch(0.22_0.01_250)]" : "text-white"
                }`}
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Orto One
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.2em] transition-colors ${
                  scrolled ? "text-[oklch(0.55_0.01_250)]" : "text-white/60"
                }`}
              >
                Clínica Odontológica
              </span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-[oklch(0.78_0.12_85)] ${
                  scrolled ? "text-[oklch(0.40_0.01_250)]" : "text-white/85"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5591984259232"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-semibold bg-[oklch(0.42_0.12_210)] text-white hover:bg-[oklch(0.35_0.12_210)] transition-all duration-200 shadow-md active:scale-[0.97]"
            >
              Agendar Consulta
            </a>
          </nav>

          <button
            className={`md:hidden p-2 ${scrolled ? "text-[oklch(0.22_0.01_250)]" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[oklch(0.90_0.01_210)] px-4 py-4 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 px-3 rounded-lg text-sm font-medium text-[oklch(0.35_0.01_250)] hover:bg-[oklch(0.94_0.015_210)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5591984259232"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-3 px-5 py-3 rounded-full text-sm font-semibold bg-[oklch(0.42_0.12_210)] text-white text-center"
          >
            Agendar Consulta
          </a>
        </div>
      )}
    </header>
  );
}

// ─── Hero — Editorial Assimétrico ─────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
        {/* Left: dark panel */}
        <div className="bg-[oklch(0.22_0.01_250)]" />
        {/* Right: image */}
        <div className="relative hidden lg:block">
          <img
            src={HERO_IMG}
            alt="Clínica Orto One"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[oklch(0.22_0.01_250)/0.2] to-[oklch(0.22_0.01_250)/0.6]" />
        </div>
      </div>

      {/* Mobile: full bleed image */}
      <div className="absolute inset-0 lg:hidden">
        <img src={HERO_IMG} alt="Clínica Orto One" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.22_0.01_250)/0.80]" />
      </div>

      {/* Diagonal divider (desktop) */}
      <div
        className="absolute inset-y-0 hidden lg:block"
        style={{
          left: "calc(50% - 80px)",
          width: "160px",
          background: "linear-gradient(to right, oklch(0.22 0.01 250), transparent)",
          clipPath: "polygon(0 0, 60% 0, 100% 100%, 0 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container min-h-screen flex items-center pt-24 pb-16">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-12">
          {/* Brand badge */}
          <div className="flex items-center gap-3 mb-8">
            <img src={LOGO_IMG} alt="Logo" className="w-10 h-10 object-contain opacity-90" />
            <div className="h-px flex-1 bg-[oklch(0.78_0.12_85)/0.40]" />
            <span className="text-[oklch(0.78_0.12_85)] text-xs font-semibold uppercase tracking-[0.2em]">
              Castanhal, PA
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            O número{" "}
            <span
              className="relative inline-block"
              style={{
                background: "oklch(0.78 0.12 85)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              1
            </span>{" "}
            da Orto One
            <br />
            <span className="italic text-white/90">é você.</span>
          </h1>

          <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
            Profissionais sérios e éticos que valorizam a sua saúde e
            auto-estima acima de tudo. Desde o primeiro atendimento, você
            sente a diferença.
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3 mb-8 p-4 rounded-xl border border-white/15 bg-white/5 w-fit">
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={16} className="text-[oklch(0.78_0.12_85)] fill-current" />
              ))}
            </div>
            <span className="text-white font-bold text-lg">4.9</span>
            <span className="text-white/50 text-sm">· 37 avaliações no Google</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5591984259232"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[oklch(0.42_0.12_210)] text-white font-semibold hover:bg-[oklch(0.35_0.12_210)] transition-all duration-200 active:scale-[0.97] shadow-xl"
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-200"
            >
              Conheça a clínica
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-white z-10"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />
    </section>
  );
}

// ─── Sobre — Assimétrico com diagonal ────────────────────────────────────────
function Sobre() {
  return (
    <section id="sobre" className="pt-8 pb-24 bg-white overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Image: 2/5 */}
          <div className="lg:col-span-2 reveal">
            <div className="relative">
              {/* Diagonal frame */}
              <div
                className="absolute -left-4 -top-4 w-full h-full rounded-2xl bg-[oklch(0.42_0.12_210)/0.10]"
                style={{ transform: "rotate(-2deg)" }}
              />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={SMILE_IMG}
                  alt="Paciente feliz"
                  className="w-full h-[480px] object-cover object-top"
                />
                {/* Diagonal overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.42_0.12_210)/0.25] to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-[oklch(0.42_0.12_210)] rounded-2xl p-4 shadow-xl text-white">
                <div className="flex items-center gap-1 mb-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={12} className="text-[oklch(0.78_0.12_85)] fill-current" />
                  ))}
                </div>
                <p className="text-xs font-bold">4.9 no Google</p>
                <p className="text-white/70 text-[10px]">37 avaliações</p>
              </div>
            </div>
          </div>

          {/* Text: 3/5 */}
          <div className="lg:col-span-3 reveal" style={{ transitionDelay: "100ms" }}>
            {/* Diagonal accent line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[oklch(0.78_0.12_85)]" />
              <span className="text-[oklch(0.42_0.12_210)] text-sm font-semibold uppercase tracking-widest">
                Nossa História
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[oklch(0.22_0.01_250)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Odontologia com ética,
              <br />
              <span className="text-[oklch(0.42_0.12_210)] italic">
                cuidado e respeito.
              </span>
            </h2>

            <p className="text-[oklch(0.45_0.01_250)] text-base leading-relaxed mb-4">
              A Orto One nasceu de um propósito claro: exercer a odontologia
              com seriedade, ética e respeito ao paciente. Aqui, você não é
              mais um número — você é o número 1.
            </p>
            <p className="text-[oklch(0.45_0.01_250)] text-base leading-relaxed mb-8">
              Localizada em Castanhal, Pará, nossa clínica oferece atendimento
              humanizado para toda a família, com foco no seu bem-estar e na
              sua confiança.
            </p>

            {/* Differentials with diagonal rule */}
            <div className="space-y-3 mb-8">
              {[
                "Profissionais qualificados e éticos",
                "Ambiente acolhedor e moderno",
                "Tratamentos personalizados para cada paciente",
                "Foco na saúde e na auto-estima",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[oklch(0.42_0.12_210)/0.12] flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 size={14} className="text-[oklch(0.42_0.12_210)]" />
                  </div>
                  <span className="text-[oklch(0.35_0.01_250)] text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Number badges row */}
            <div className="flex gap-8 pt-6 border-t border-[oklch(0.90_0.01_210)]">
              <NumberBadge n="4.9★" label="Avaliação Google" />
              <NumberBadge n="37+" label="Avaliações" />
              <NumberBadge n="#1" label="O paciente em primeiro lugar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Serviços — Cards com motivo diagonal ────────────────────────────────────
const servicos = [
  { icon: Smile, title: "Ortodontia", desc: "Aparelhos fixos e removíveis para alinhamento dental com conforto e eficiência.", num: "01" },
  { icon: Sparkles, title: "Clareamento Dental", desc: "Técnicas seguras e eficazes para um sorriso mais branco e luminoso.", num: "02" },
  { icon: Shield, title: "Prevenção e Limpeza", desc: "Profilaxia e cuidados preventivos para manter a saúde bucal em dia.", num: "03" },
  { icon: Award, title: "Estética Dental", desc: "Facetas, lentes de contato e outros procedimentos para o sorriso perfeito.", num: "04" },
  { icon: Heart, title: "Odontopediatria", desc: "Atendimento especializado e acolhedor para crianças de todas as idades.", num: "05" },
  { icon: CheckCircle2, title: "Restaurações", desc: "Restaurações estéticas em resina composta para dentes naturais e bonitos.", num: "06" },
];

function Servicos() {
  return (
    <section id="servicos" className="py-24 bg-[oklch(0.22_0.01_250)] relative overflow-hidden">
      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="container relative z-10 pt-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[oklch(0.78_0.12_85)]" />
              <span className="text-[oklch(0.78_0.12_85)] text-sm font-semibold uppercase tracking-widest">
                Nossos Serviços
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-white leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cuidado completo
              <br />
              <span className="text-[oklch(0.78_0.12_85)] italic">para o seu sorriso</span>
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-xs mt-4 lg:mt-0 reveal" style={{ transitionDelay: "80ms" }}>
            Tratamentos modernos com atendimento humanizado para toda a família.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicos.map((s, i) => (
            <div
              key={s.title}
              className="reveal group relative bg-white/5 border border-white/10 rounded-2xl p-6 overflow-hidden transition-all duration-200 hover:bg-white/10 hover:border-[oklch(0.78_0.12_85)/0.30]"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 text-5xl font-bold text-white/5 select-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.num}
              </span>

              {/* Diagonal accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[oklch(0.42_0.12_210)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="w-11 h-11 rounded-xl bg-[oklch(0.42_0.12_210)/0.20] flex items-center justify-center mb-4">
                <s.icon size={20} className="text-[oklch(0.78_0.12_85)]" />
              </div>
              <h3
                className="text-base font-bold text-white mb-2"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {s.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom diagonal */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 bg-[oklch(0.97_0.005_210)]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }}
      />
    </section>
  );
}

// ─── Equipe ───────────────────────────────────────────────────────────────────
function Equipe() {
  return (
    <section className="pt-8 pb-24 bg-[oklch(0.97_0.005_210)] overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative reveal order-2 lg:order-1">
            <div
              className="absolute -right-6 -bottom-6 w-full h-full rounded-2xl bg-[oklch(0.42_0.12_210)/0.12]"
              style={{ transform: "rotate(2deg)" }}
            />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={TEAM_IMG}
                alt="Equipe Orto One"
                className="w-full h-[460px] object-cover object-center"
              />
              {/* Diagonal overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.42_0.12_210)/0.30] to-transparent" />
            </div>
          </div>

          {/* Text */}
          <div className="reveal order-1 lg:order-2" style={{ transitionDelay: "100ms" }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[2px] bg-[oklch(0.78_0.12_85)]" />
              <span className="text-[oklch(0.42_0.12_210)] text-sm font-semibold uppercase tracking-widest">
                Nossa Equipe
              </span>
            </div>

            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.22_0.01_250)] leading-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Profissionais que
              <br />
              <span className="text-[oklch(0.42_0.12_210)] italic">
                fazem a diferença
              </span>
            </h2>

            <p className="text-[oklch(0.45_0.01_250)] text-base leading-relaxed mb-6">
              Nossa equipe é formada por cirurgiões-dentistas comprometidos com
              a excelência e o cuidado humanizado. Cada profissional foi
              escolhido não só pela competência técnica, mas pelo amor genuíno
              ao que faz.
            </p>

            <p className="text-[oklch(0.45_0.01_250)] text-base leading-relaxed mb-8">
              Quando você entra na Orto One, você não é apenas mais um paciente
              — você é o motivo pelo qual existimos.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "4.9★", l: "Avaliação média" },
                { n: "37+", l: "Avaliações Google" },
                { n: "100%", l: "Dedicação ao paciente" },
                { n: "Castanhal", l: "Pará, Brasil" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="bg-white rounded-xl p-4 border border-[oklch(0.90_0.01_210)] shadow-sm"
                >
                  <div
                    className="text-xl font-bold text-[oklch(0.42_0.12_210)]"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {s.n}
                  </div>
                  <div className="text-[oklch(0.55_0.01_250)] text-xs mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Avaliações ───────────────────────────────────────────────────────────────
const avaliacoes = [
  { nome: "Maria S.", texto: "Atendimento excelente! Profissionais muito atenciosos e o ambiente é super aconchegante. Recomendo a todos!", nota: 5 },
  { nome: "João P.", texto: "Fiz meu clareamento aqui e ficou incrível. Equipe muito profissional e atenciosa durante todo o processo.", nota: 5 },
  { nome: "Ana C.", texto: "Melhor clínica de Castanhal! Minha filha adora vir ao dentista desde que começou a ser atendida aqui.", nota: 5 },
  { nome: "Carlos M.", texto: "Pontualidade, profissionalismo e cuidado com o paciente. Nota 10 para toda a equipe da Orto One!", nota: 5 },
];

function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-24 bg-white relative overflow-hidden">
      {/* Diagonal top */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-[oklch(0.97_0.005_210)]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%)" }}
      />

      <div className="container relative z-10 pt-4">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14">
          <div className="reveal">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[oklch(0.78_0.12_85)]" />
              <span className="text-[oklch(0.42_0.12_210)] text-sm font-semibold uppercase tracking-widest">
                Avaliações
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-[oklch(0.22_0.01_250)] leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              O que nossos pacientes
              <br />
              <span className="text-[oklch(0.42_0.12_210)] italic">dizem sobre nós</span>
            </h2>
          </div>
          <div className="flex items-center gap-3 mt-4 lg:mt-0 reveal" style={{ transitionDelay: "80ms" }}>
            <div className="flex">
              {[1,2,3,4,5].map(i => (
                <Star key={i} size={20} className="text-[oklch(0.78_0.12_85)] fill-current" />
              ))}
            </div>
            <span className="text-2xl font-bold text-[oklch(0.22_0.01_250)]">4.9</span>
            <span className="text-[oklch(0.55_0.01_250)] text-sm">(37 avaliações)</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {avaliacoes.map((a, i) => (
            <div
              key={a.nome}
              className="reveal bg-[oklch(0.97_0.005_210)] rounded-2xl p-6 border border-[oklch(0.90_0.01_210)] relative overflow-hidden group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Diagonal accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-[oklch(0.42_0.12_210)/0.05]" style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />

              <div className="flex mb-3">
                {Array.from({ length: a.nota }).map((_, j) => (
                  <Star key={j} size={13} className="text-[oklch(0.78_0.12_85)] fill-current" />
                ))}
              </div>
              <p className="text-[oklch(0.45_0.01_250)] text-sm leading-relaxed mb-4 italic">
                "{a.texto}"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[oklch(0.42_0.12_210)] flex items-center justify-center text-white text-xs font-bold">
                  {a.nome[0]}
                </div>
                <span className="text-sm font-semibold text-[oklch(0.35_0.01_250)]">{a.nome}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 reveal">
          <a
            href="https://g.co/kgs/1b81a9316e162edf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[oklch(0.42_0.12_210)] text-[oklch(0.42_0.12_210)] font-semibold text-sm hover:bg-[oklch(0.42_0.12_210)] hover:text-white transition-all duration-200 active:scale-[0.97]"
          >
            <Star size={15} />
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Contato ──────────────────────────────────────────────────────────────────
function Contato() {
  const horarios = [
    { dia: "Segunda a Sexta", hora: "08h – 18h" },
    { dia: "Sábado", hora: "08h – 12h" },
    { dia: "Domingo", hora: "Fechado" },
  ];

  return (
    <section id="contato" className="py-24 bg-[oklch(0.22_0.01_250)] relative overflow-hidden">
      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-16 bg-white"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />

      <div className="container relative z-10 pt-8">
        <div className="text-center mb-16 reveal">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[oklch(0.78_0.12_85)]" />
            <span className="text-[oklch(0.78_0.12_85)] text-sm font-semibold uppercase tracking-widest">
              Contato & Localização
            </span>
            <div className="w-8 h-[2px] bg-[oklch(0.78_0.12_85)]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Venha nos visitar
          </h2>
          <p className="text-white/50 text-sm mt-3">
            Estamos em Castanhal, Pará, prontos para atender você.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info */}
          <div className="space-y-4 reveal">
            <div className="bg-white/6 rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.42_0.12_210)] flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Endereço</h3>
                  <p className="text-white/55 text-xs leading-relaxed">
                    R. Dr. Adailson da Silva Rodrigues, 243<br />
                    Jaderlândia, Castanhal – PA<br />
                    CEP: 68746-025
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/6 rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.42_0.12_210)] flex items-center justify-center flex-shrink-0">
                  <Phone size={17} className="text-white" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">WhatsApp</h3>
                  <a
                    href="https://wa.me/5591984259232"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[oklch(0.78_0.12_85)] text-sm font-medium hover:underline"
                  >
                    +55 91 98425-9232
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/6 rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[oklch(0.42_0.12_210)] flex items-center justify-center flex-shrink-0">
                  <Clock size={17} className="text-white" />
                </div>
                <div className="w-full">
                  <h3 className="text-white font-semibold text-sm mb-3">Horários</h3>
                  <div className="space-y-2">
                    {horarios.map((h) => (
                      <div key={h.dia} className="flex justify-between text-xs">
                        <span className="text-white/55">{h.dia}</span>
                        <span className={h.hora === "Fechado" ? "text-white/25" : "text-white/80 font-medium"}>
                          {h.hora}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2 reveal rounded-2xl overflow-hidden" style={{ transitionDelay: "100ms" }}>
            <iframe
              title="Localização Orto One"
              src="https://www.google.com/maps?q=R.+Dr.+Adailson+da+Silva+Rodrigues,+243,+Jaderlândia,+Castanhal,+PA,+68746-025&output=embed"
              width="100%"
              height="100%"
              style={{ minHeight: "400px", border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14 text-center reveal">
          <p className="text-white/50 text-sm mb-5">
            Pronto para cuidar do seu sorriso? Fale com a gente agora mesmo.
          </p>
          <a
            href="https://wa.me/5591984259232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[oklch(0.42_0.12_210)] text-white font-semibold text-base hover:bg-[oklch(0.35_0.12_210)] transition-all duration-200 active:scale-[0.97] shadow-2xl"
          >
            <MessageCircle size={20} />
            Agendar consulta pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[oklch(0.15_0.01_250)] py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={LOGO_IMG} alt="Orto One" className="w-8 h-8 object-contain opacity-80" />
            <div>
              <div className="text-white font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Orto One
              </div>
              <div className="text-white/35 text-[10px] uppercase tracking-widest">Clínica Odontológica</div>
            </div>
          </div>

          <p className="text-white/35 text-xs text-center leading-relaxed">
            © {new Date().getFullYear()} Orto One. Todos os direitos reservados.
            <br />
            R. Dr. Adailson da Silva Rodrigues, 243 — Castanhal, PA
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/50 hover:bg-[oklch(0.42_0.12_210)] hover:text-white transition-all duration-200"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/50 hover:bg-[oklch(0.42_0.12_210)] hover:text-white transition-all duration-200"
            >
              <Facebook size={15} />
            </a>
            <a
              href="https://wa.me/5591984259232"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-white/50 hover:bg-[#25D366] hover:text-white transition-all duration-200"
            >
              <MessageCircle size={15} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── WhatsApp Float ───────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5591984259232"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-200 active:scale-95"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 24 24" fill="white" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function Home() {
  useScrollReveal();
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Equipe />
      <Avaliacoes />
      <Contato />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
