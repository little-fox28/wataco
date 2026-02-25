import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, BarChart3, Calendar, ChevronLeft, ChevronRight, Facebook, Home, Linkedin, Mail, MapPin, Menu, Newspaper, Phone, X, Youtube, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CountUp from '../components/common/CountUp';
import Marquee from '../components/common/Marquee';
import { StaggerContainer, StaggerItem } from '../components/common/StaggerAnimations';
import WatacoLogo from '../components/common/WatacoLogo';
import EpcManagementSection from '../components/sections/page-home/epcManagementSection';
import PpaModelSection from '../components/sections/page-home/escoSection';
import ServicesSection from '../components/sections/page-home/servicessection';
import { translations } from '../hooks/useTranslation';
import type { ProjectData, TranslationContent } from '../types';

// --- 1. GLOBAL STYLES ---
const FontStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&family=Roboto+Mono:wght@400;500;700&display=swap');
    
    :root {
      --font-body: 'Noto Sans JP', sans-serif;
      --font-heading: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      --font-tech: 'Roboto Mono', monospace;
    }

    body {
      font-family: var(--font-body) !important;
      overflow-x: hidden;
    }
    
    .font-heading {
      font-family: var(--font-heading);
      letter-spacing: -0.01em; 
    }

    .font-tech {
      font-family: var(--font-tech);
      letter-spacing: -0.03em;
    }
    
    .font-jp-style {
      font-feature-settings: "palt";
      letter-spacing: 0.05em;
    }
    
    .hero-text-shadow {
      text-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
    }

    .news-list-scroll::-webkit-scrollbar {
      width: 4px;
    }
    .news-list-scroll::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    .news-list-scroll::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;
    }
    .news-list-scroll::-webkit-scrollbar-thumb:hover {
      background: #228B22;
    }
    
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
);

// --- 3. DATA & TRANSLATIONS ---

const projectLocations = [
  { top: "15%", left: "45%", name: "Bắc Ninh" },
  { top: "18%", left: "48%", name: "Hải Dương" },
  { top: "20%", left: "40%", name: "Hải Phòng" },
  { top: "48%", left: "50%", name: "Quảng Ngãi" },
  { top: "75%", left: "52%", name: "Lâm Đồng" },
  { top: "80%", left: "58%", name: "Bình Thuận" },
  { top: "85%", left: "40%", name: "Tây Ninh" },
  { top: "87%", left: "45%", name: "Bình Dương" },
  { top: "88%", left: "40%", name: "Đồng Nai" },
  { top: "92%", left: "38%", name: "Long An" },
];

const clientsList = [
  { name: "TH True Milk", logo: '/wataco/client-logo/TH.svg', color: "#013C78" },
  { name: "ALPHA", logo: '/wataco/client-logo/alpha.svg', color: "#00469B" },
  { name: "AMANN", logo: '/wataco/client-logo/amann.svg', color: "#028AD2" },
  { name: "FGC", logo: '/wataco/client-logo/fgc.svg', color: "#42851F" },
  { name: "HAWA-EXPO", logo: '/wataco/client-logo/hawa-expo.svg', color: "#A13538" },
  { name: "HUONG SEN", logo: '/wataco/client-logo/huong-sen.svg', color: "#9CA3AF" },
  { name: "KAIFA", logo: '/wataco/client-logo/kaifa.svg', color: "#1D2088" },
  { name: "MKVN", logo: '/wataco/client-logo/mkvn.svg', color: "#00A650" },
  { name: "RYOBI", logo: '/wataco/client-logo/ryobi.svg', color: "#1456A1" },
  { name: "STROMAN", logo: '/wataco/client-logo/stroman.svg', color: "#0F75BC" },
  { name: "TRALYTEX", logo: '/wataco/client-logo/tralytex.svg', color: "#9CA3AF" },
];

// --- COMPONENT: CLIENT LOGO BOX (FRAMELESS) ---
interface ClientLogoBoxProps {
  client: {
    name: string;
    logo: string | null;
    color?: string;
  };
}

const ClientLogoBox: React.FC<ClientLogoBoxProps> = ({ client }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="mx-8 flex items-center justify-center group cursor-default transition-all duration-300 min-w-25 min-h-12.5">
      {!imgError && client.logo ? (
        <img
          src={client.logo}
          alt={client.name}
          className="h-12 lg:h-20 w-auto object-contain transition-all duration-500"
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className="text-lg lg:text-xl font-black uppercase tracking-wider font-heading leading-tight whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ color: client.color || "#9CA3AF" }}
        >
          {client.name}
        </span>
      )}
    </div>
  );
};

// --- MAIN APP ---
export default function HomePage() {
  const [lang, setLang] = useState<'VN' | 'EN' | 'JP'>('VN');

  const mapStats = translations[`${lang}`].mapStats;

  // Mobile Menu State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Projects Slider State
  const [activeProjectTab, setActiveProjectTab] = useState('vietnam');
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  // NEWS STATE
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  const t: TranslationContent = translations[lang];
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  const handleProjectTabChange = (id: string) => {
    setActiveProjectTab(id);
    setCurrentProjectIndex(0);
  };

  const paginateProject = (newDirection: number) => {
    const projects: ProjectData[] = t.projectsData[activeProjectTab];
    let newIndex = currentProjectIndex + newDirection;
    if (newIndex < 0) newIndex = projects.length - 1;
    if (newIndex >= projects.length) newIndex = 0;
    setCurrentProjectIndex(newIndex);
  };

  // Helper to determine card position and style
  const getCardStyle = (index: number, total: number) => {
    let offset = index - currentProjectIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    if (offset === 0) return { x: '0%', scale: 1, opacity: 1, zIndex: 10, filter: 'brightness(100%)', pointerEvents: 'auto' };
    else if (offset === -1 || (currentProjectIndex === 0 && index === total - 1)) return { x: '-70%', scale: 0.85, opacity: 0.6, zIndex: 5, filter: 'brightness(50%) blur(1px)', pointerEvents: 'none' };
    else if (offset === 1 || (currentProjectIndex === total - 1 && index === 0)) return { x: '70%', scale: 0.85, opacity: 0.6, zIndex: 5, filter: 'brightness(50%) blur(1px)', pointerEvents: 'none' };
    else return { x: '0%', scale: 0.5, opacity: 0, zIndex: 0, pointerEvents: 'none' };
  };


  // --- NEWS CAROUSEL LOGIC (AUTO-PLAY) ---
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveNewsIndex((prev) => (prev + 1) % t.newsArticles.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [t.newsArticles.length]);

  // Navigation Links Mapping
  const navLinks = ["/", "/projects", "/careers", "/news"];
  const footerNavLinks = ["/", "/projects", "/news", "/careers"];

  return (
    <div className="bg-[#F4F7F6] text-[#1A2B3C] selection:bg-[#228B22] selection:text-white">
      <FontStyles />

      {/* Header - Green Background (#228B22) */}
      <header className="fixed top-0 w-full z-50 bg-[#228B22]/95 backdrop-blur-md border-b border-white/5 shadow-lg transition-colors duration-300">
        <div className="max-w-360 mx-auto px-4 sm:px-6 h-14 sm:h-16 lg:h-20 flex justify-between items-center">
          <WatacoLogo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-10 items-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
            {t.nav.map((item, idx) => (
              <Link key={idx} to={navLinks[idx]} className="hover:text-[#FFD700] transition-colors">{item}</Link>
            ))}
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center space-x-3 text-xs">
              {['VN', 'EN', 'JP'].map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l as 'VN' | 'EN' | 'JP')}
                  className={`transition-colors ${lang === l ? 'text-[#FFD700] font-bold' : 'text-gray-200 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button className="bg-white text-[#228B22] px-6 py-2.5 rounded-md text-[10px] font-black tracking-widest hover:scale-105 transition-all uppercase shadow-lg border border-transparent hover:bg-[#FFD700] hover:text-[#1A2B3C]">
              {t.getQuote}
            </button>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-60 bg-[#1A2B3C] text-white flex flex-col p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <WatacoLogo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2"><X size={28} /></button>
            </div>
            <nav className="flex flex-col space-y-6 text-xl font-bold uppercase tracking-widest">
              {t.nav.map((item, idx) => (
                <Link key={idx} to={navLinks[idx]} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#FFD700] border-b border-white/10 pb-4">{item}</Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col space-y-6">
              <div className="flex space-x-6 text-sm font-bold">
                {['VN', 'EN', 'JP'].map((l) => (
                  <button key={l} onClick={() => setLang(l as 'VN' | 'EN' | 'JP')} className={lang === l ? 'text-[#FFD700]' : 'text-gray-400'}>{l}</button>
                ))}
              </div>
              <button className="bg-[#228B22] text-white w-full py-4 rounded-md font-black uppercase tracking-widest min-h-11">
                {t.getQuote}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section (#section-0) */}
      <section id="section-0" className="relative h-screen flex items-center overflow-hidden bg-[#1A2B3C]">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80&w=2000"
            className="w-full h-full object-cover opacity-100"
            alt="Solar Panels on Green Grass"
            loading="eager"
          />
          {/* UPDATED OVERLAY: Restored simple clean gradient from v1.5 for readability (approx 10-40%) */}
          <div className="absolute inset-0 bg-linear-to-b from-[#FFD700]/10 to-[#228B22]/40" />
        </motion.div>

        <div className="absolute inset-0 z-1 pointer-events-none opacity-10"
          style={{ backgroundImage: 'linear-gradient(#ffffff22 1px, transparent 1px), linear-gradient(90deg, #ffffff22 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

        <div className="max-w-360 mx-auto px-4 sm:px-6 w-full relative z-10 hero-text-shadow">
          <AnimatePresence mode="wait">
            <motion.div
              key={lang}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-3 mb-3 sm:mb-4 lg:mb-8">
                <span className="h-px w-6 sm:w-8 lg:w-12 bg-[#FFD700] drop-shadow-md" />
                <span className="text-[#FFD700] font-black text-[9px] sm:text-[10px] lg:text-xs uppercase tracking-[0.5em] font-heading drop-shadow-md">Precision Engineering</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-black text-white leading-[1.2] sm:leading-[1.1] mb-6 sm:mb-8 lg:mb-12 whitespace-pre-line tracking-tighter font-heading drop-shadow-2xl">
                {t.heroH1.split('\n').map((line, index) => (
                  <span key={index} className={`block ${index >= 2 ? "text-[#FFD700]" : ""}`}>
                    {line}
                  </span>
                ))}
              </h1>

              <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl max-w-2xl mb-6 sm:mb-8 lg:mb-12 font-bold leading-relaxed border-l-4 border-[#228B22] pl-4 sm:pl-6 lg:pl-8 drop-shadow-lg">
                {t.heroSub}
              </p>

              <div className="flex flex-wrap gap-4 sm:gap-6">
                <button className="bg-white text-[#228b22] px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 font-black text-[11px] sm:text-xs tracking-widest uppercase hover:bg-[#FFD700] hover:text-[#1A2B3C] transition-all shadow-xl border border-transparent rounded-md min-h-11">
                  {t.ctaMain}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Trust Bar (Stats) */}
      <section id="section-stats" className="bg-[#1A2B3C] py-8 sm:py-12 lg:py-20 relative z-20 border-y border-white/10 shadow-2xl">
        <StaggerContainer className="max-w-360 mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {t.stats.map((stat, idx) => (
              <StaggerItem key={idx} className="text-center group px-3 sm:px-4 pt-6 sm:pt-0">
                <div className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[#FFD700] mb-2 lg:mb-4 font-tech tracking-tighter">
                  {stat.prefix}
                  <CountUp value={stat.val} suffix={stat.suffix} decimals={stat.val % 1 !== 0 ? 1 : 0} />
                </div>
                <div className="text-[10px] text-white font-bold uppercase tracking-[0.2em] font-heading">{stat.label}</div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </section>

      {/* Heritage Section */}
      <section id="section-1" className="py-12 sm:py-20 lg:py-40 bg-white relative overflow-hidden">
        {/* BG SVG kept same */}
        <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center">
            <StaggerContainer className="lg:col-span-5 relative">
              <div className="relative group">
                <div className="overflow-hidden rounded-[40px] lg:rounded-[100px/75px] border-8 lg:border-12 border-[#F4F7F6] shadow-2xl relative">
                  <img
                    src="https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&q=80&w=1200"
                    alt="Sendai City Heritage"
                    className="w-full aspect-4/3 object-cover grayscale"
                    loading="lazy"
                  />
                  {/* Badge */}
                  <div className="absolute top-6 right-6 bg-[#FFD700] p-3 shadow-lg z-10">
                    <div className="text-[8px] lg:text-[10px] font-black uppercase tracking-widest text-[#1A2B3C] leading-none mb-1">ESTABLISHED</div>
                    <div className="text-lg lg:text-xl font-black text-[#1A2B3C] leading-none">2015</div>
                  </div>
                </div>
              </div>
            </StaggerContainer>

            <StaggerContainer className="lg:col-span-7" delay={0.2}>
              <StaggerItem className="flex items-center space-x-4 mb-6 lg:mb-8">
                <div className="p-3 bg-white border border-gray-100 rounded-full shadow-sm">
                  <MapPin size={20} className="text-[#228B22]" />
                </div>
                <h3 className="text-[#228b22] font-black text-sm uppercase tracking-[0.5em] font-heading">{t.introSub}</h3>
              </StaggerItem>
              <StaggerItem>
                <h2 className="text-3xl sm:text-4xl lg:text-7xl font-black text-[#1A2B3C] mb-6 sm:mb-8 lg:mb-12 tracking-tighter leading-none font-heading">{t.introTitle}</h2>
              </StaggerItem>
              <StaggerItem className="space-y-6 lg:space-y-8">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
                  <div className="border-l-4 border-[#FFD700] pl-6 py-1">
                    <p className="text-lg lg:text-xl text-gray-700 italic font-medium leading-relaxed">"{t.introContent2}"</p>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <p className="text-sm text-gray-500 leading-relaxed font-light">{t.introContent3}</p>
                    <div className="flex items-center space-x-2 text-[#228B22] font-bold text-xs uppercase tracking-widest mt-auto">
                      <Home size={16} />
                      <span>Enterprises & Industrial</span>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <PpaModelSection t={t} />

      {/* NEW: SERVICES SECTION */}
      <ServicesSection t={t} />

      <EpcManagementSection t={t} />

      {/* SECTION 2: */}
      <section
        id="section-2"
        className="py-12 sm:py-20 lg:py-32 bg-white relative overflow-hidden"
      >
        {/* Subtle pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] opacity-30"></div>

        <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10">
          {/* ROW 1: STATS & MAP */}
          <StaggerContainer className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center mb-12 sm:mb-20">
            {/* LEFT: DATA STATS */}
            <div className="lg:col-span-4 space-y-8">
              <StaggerItem className="mb-8">
                <h3 className="text-[#228B22] font-bold text-sm uppercase tracking-widest mb-3">
                  {t.section2SubTitle}
                </h3>
                <h2 className="text-4xl lg:text-5xl font-black text-[#1A2B3C] leading-tight font-heading whitespace-pre-line">
                  {t.section2Title}
                </h2>
                <p className="text-gray-500 mt-4 leading-relaxed font-light">
                  {t.section2Description}
                </p>
              </StaggerItem>

              {mapStats &&
                mapStats.map((stat, idx) => (
                  <StaggerItem
                    key={idx}
                    className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center space-x-5 hover:shadow-md transition-all hover:-translate-y-1"
                  >
                    <div
                      className="p-3 rounded-full bg-gray-50 shadow-sm shrink-0"
                      style={{ color: stat.color }}
                    >
                      <stat.icon size={28} />
                    </div>
                    <div>
                      <div className="text-3xl font-black text-[#1A2B3C] font-tech leading-none mb-1">
                        <CountUp value={stat.val} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                        {stat.label}
                      </div>
                    </div>
                  </StaggerItem>
                ))}
            </div>

            {/* RIGHT: SEAMLESS MAP VISUALIZATION */}
            <div className="lg:col-span-8 relative h-87.5 sm:h-112.5 lg:h-150 flex items-center justify-center">
              {/* Map Container */}
              <div className="relative grow flex items-center justify-center p-0 lg:p-8 w-full">
                {/* Map Image */}
                <img src='/wataco/client-logo/vietnam-maps.png' className='h-full w-[62%]' />

                {/* Project Location Dots */}
                {projectLocations.map((loc, i) => (
                  <div
                    key={i}
                    className="absolute flex items-center justify-center group/dot"
                    style={{
                      top: loc.top,
                      left: loc.left,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Shadow Ping Effect */}
                    <div className="absolute w-4 h-4 bg-[#228B22] rounded-full opacity-75 animate-ping" style={{ zIndex: 5 }}></div>
                    {/* Dots */}
                    <div className="w-3 h-3 bg-[#228B22] rounded-full z-10 cursor-pointer hover:scale-125 transition-transform"></div>
                    {/* Tooltip */}
                    <div className="absolute opacity-0 group-hover/dot:opacity-100 transition-opacity bg-[#1A2B3C] text-white text-[10px] px-2 py-1 rounded shadow-lg -top-8 whitespace-nowrap z-20 pointer-events-none font-bold">
                      {loc.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerContainer>

          {/* ROW 2: CLIENTS MARQUEE */}
          <StaggerContainer className="w-full border-t border-gray-100 pt-20 mt-20">
            <div className="text-center mb-10">
              <h5 className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                {t.section2ClientTitle}
              </h5>
            </div>

            <div className="relative z-10 flex items-center justify-center">
              <Marquee>
                {/* Duplicate for loop */}
                {[...clientsList, ...clientsList].map(
                  (client, i) => (
                    <ClientLogoBox key={i} client={client} />
                  )
                )}
              </Marquee>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* SECTION 3: PROJECTS - 3-CARD CENTER CAROUSEL*/}
      <section id="section-3" className="py-12 sm:py-20 lg:py-32 bg-[#F8FAFC] text-[#1A2B3C] relative overflow-hidden">
        <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Header */}
          <StaggerContainer className="flex justify-between mb-8 sm:mb-12 lg:mb-16 gap-6 sm:gap-8">
            <div>
              <h3 className="text-[#228B22] font-black text-xs sm:text-sm uppercase tracking-[0.5em] font-heading mb-2">{t.projectsSub}</h3>
              <h2 className="text-2xl sm:text-3xl lg:text-6xl font-black tracking-tighter leading-none text-[#1A2B3C] font-heading">{t.projectsTitle}</h2>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {t.projectTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleProjectTabChange(tab.id)}
                  className={`        px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300  ${activeProjectTab === tab.id
                    ? 'bg-[#1A2B3C] text-white shadow-lg shadow-blue-900/20 transform scale-105'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'} 
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </StaggerContainer>

          {/* 3-CARD CAROUSEL - TRANSITION UPDATED TO FadeInUp for Category Switch */}
          <motion.div
            key={activeProjectTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative w-full h-100 sm:h-125 lg:h-125 flex items-center justify-center touch-pan-y"
          >

            {/* Slider Track with Swipe */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, { offset }) => {
                const swipe = offset.x;
                if (swipe < -100) paginateProject(1);
                else if (swipe > 100) paginateProject(-1);
              }}
            >
              {t.projectsData[activeProjectTab].map((project, idx) => {
                const cardStyle = getCardStyle(idx, t.projectsData[activeProjectTab].length);

                return (
                  <motion.div
                    key={`${activeProjectTab}-${idx}`}
                    className="absolute top-0 w-[85%] lg:w-[65%] h-full bg-[#111] rounded-md shadow-2xl overflow-hidden border border-white/10"
                    initial={false}
                    animate={cardStyle}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <img
                      src={project.img}
                      alt={project.name}
                      className="w-full h-full object-cover object-center"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-transparent to-transparent opacity-90" />

                    {/* Card Content - Only show for center card, or fade others */}
                    <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12 transition-opacity duration-300"
                      style={{ opacity: cardStyle.opacity < 1 ? 0 : 1 }}>
                      <div className="flex items-center space-x-4 mb-4">
                        <span className="text-[#FFD700] text-[10px] font-bold tracking-widest uppercase font-heading flex items-center">
                          <MapPin size={12} className="mr-2" />
                          {project.location}
                        </span>
                      </div>
                      <h3 className="text-2xl lg:text-5xl font-black text-white leading-tight mb-6 font-heading">
                        {project.name}
                      </h3>
                      {/* UPDATED STATS ROW: Year - Capacity - Production */}
                      <div className="flex flex-wrap items-center gap-4 lg:gap-6 border-t border-white/20 pt-6">
                        <div className="flex items-center text-[#FFD700]">
                          <Calendar size={16} className="mr-2 opacity-80" />
                          <span className="text-sm font-bold font-tech">{project.year}</span>
                        </div>
                        <div className="flex items-center text-[#FFD700]">
                          <Zap size={16} className="mr-2 opacity-80" />
                          <span className="text-sm font-bold font-tech">{project.capacity}</span>
                        </div>
                        <div className="flex items-center text-[#FFD700]">
                          <BarChart3 size={16} className="mr-2 opacity-80" />
                          <span className="text-sm font-bold font-tech">{project.production}</span>
                        </div>
                        <button className="ml-auto bg-white/10 hover:bg-[#228b22] text-white px-6 py-2 text-[9px] font-black uppercase tracking-widest transition-colors border border-white/20 hover:border-[#228b22] rounded-md min-h-[44px] active:scale-95">
                          <Link to={"posts/du-an-dien-mat-troi-th-da-lat-milk"}>
                            {t.viewProject}
                          </Link>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Controls */}
            <div className="absolute inset-y-0 left-0 flex items-center z-30 pointer-events-none">
              <button
                onClick={() => paginateProject(-1)}
                className="ml-2 lg:ml-4 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto"
              >
                <ChevronLeft size={24} />
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center z-30 pointer-events-none">
              <button
                onClick={() => paginateProject(1)}
                className="mr-2 lg:mr-4 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center border border-white/20 bg-black/50 text-white rounded-full backdrop-blur-sm pointer-events-auto"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Indicators */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
              {t.projectsData[activeProjectTab].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentProjectIndex(idx)}
                  className={`h-1 transition-all duration-300 ${idx === currentProjectIndex ? 'bg-[#FFD700] w-8' : 'bg-[#1A2B3C]/30 w-4 hover:bg-[#1A2B3C]'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: NEWS - NEW MASTER-DETAIL LAYOUT (v1.26 - Brighter) */}
      <section id="section-6" className="py-12 sm:py-20 lg:py-32 bg-linear-to-b from-white via-[#F0FDF4] to-white border-t border-[#e5e7eb]">
        <div className="max-w-360 mx-auto px-4 sm:px-6">
          {/* Header */}
          <StaggerContainer className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-16 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#228b22]/10 rounded flex items-center justify-center text-[#228b22]">
                  <Newspaper size={18} />
                </div>
                <h3 className="text-[#228b22] font-black text-[10px] sm:text-sm uppercase tracking-[0.5em] font-heading">{t.newsSub}</h3>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-6xl font-black text-[#1A2B3C] tracking-tighter leading-none font-heading">{t.newsTitle}</h2>
            </div>
            <Link to="/news" className="text-[11px] font-black uppercase tracking-[0.2em] text-[#1A2B3C] flex items-center group">
              <span>{t.viewAllArticles}</span>
              <ArrowRight size={16} className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Link>
          </StaggerContainer>

          {/* MAIN CONTENT GRID */}
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:h-150">

            {/* Left Column: Vertical Article Queue */}
            <StaggerContainer className="lg:col-span-5 flex flex-col h-full space-y-2 overflow-y-auto pr-2 news-list-scroll" delay={0.2}>
              {t.newsArticles.map((article, idx) => (
                <StaggerItem key={idx}>
                  <button
                    onClick={() => setActiveNewsIndex(idx)}
                    className={`w-full text-left p-6 transition-all duration-300 border-l-4 group rounded-r-md ${activeNewsIndex === idx
                      ? 'bg-[#DCFCE7] border-[#228B22] shadow-sm'
                      : 'bg-white border-transparent hover:bg-[#F0FDF4] hover:border-gray-200'
                      }`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className={`text-[10px] font-bold font-tech uppercase tracking-wider ${activeNewsIndex === idx ? 'text-[#228B22]' : 'text-gray-400'}`}>
                        {article.source}
                      </span>
                      <span className="text-[10px] text-gray-400 font-tech">{article.date}</span>
                    </div>
                    <h4 className={`text-sm lg:text-base font-bold leading-relaxed transition-colors font-heading ${activeNewsIndex === idx ? 'text-[#1A2B3C]' : 'text-gray-500 group-hover:text-[#1A2B3C]'
                      }`}>
                      {article.title}
                    </h4>
                  </button>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Right Column: Large Preview Image */}
            <StaggerContainer className="lg:col-span-7 h-full" delay={0.4}>
              <div className="relative h-75 sm:h-100 lg:h-full rounded-lg overflow-hidden shadow-2xl bg-gray-100 border-2 border-[#FFD700]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeNewsIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img
                      src={t.newsArticles[activeNewsIndex].img}
                      alt={t.newsArticles[activeNewsIndex].title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#1A2B3C] via-transparent to-transparent opacity-80" />

                    <div className="absolute bottom-0 left-0 p-12 w-full">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <span className="bg-[#FFD700] text-[#1A2B3C] px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-4 inline-block rounded-sm shadow-sm">
                          {t.newsArticles[activeNewsIndex].tag}
                        </span>
                        <h3 className="text-2xl lg:text-4xl font-black text-white leading-tight mb-6 font-heading max-w-xl">
                          {t.newsArticles[activeNewsIndex].title}
                        </h3>
                        <Link to={"posts/wataco-ky-ket-hop-tac-nhat-ban"} className="inline-flex items-center text-white hover:text-[#FFD700] transition-colors text-xs font-bold uppercase tracking-widest group">
                          <span>Đọc chi tiết</span>
                          <ArrowRight size={16} className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </StaggerContainer>

          </div>
        </div>
      </section>

      {/* Footer - Navy Blue */}
      <footer className="bg-[#1A2B3C] text-white pt-16 sm:pt-24 pb-8 sm:pb-12 border-t border-white/10 relative overflow-hidden font-jp-style">
        {/* Background Texture/Pattern for "Modern" feel */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform scale-150 origin-top-right">
          <WatacoLogo />
        </div>

        <div className="max-w-360 mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20">
            {/* Col 1: Brand */}
            <div className="space-y-6">
              <WatacoLogo />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                {t.footer.description}
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#228B22] transition-colors text-white">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Col 2: Solutions */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 font-heading">{t.footer.solutionsTitle}</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                {t.footer.solutions.map((item, idx) => (
                  <li key={idx}><a href="#" className="hover:text-[#FFD700] transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Col 3: Company */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 font-heading">{t.footer.companyTitle}</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                {t.footer.company.map((item, idx) => (
                  <li key={idx}><Link to={footerNavLinks[idx]} className="hover:text-[#FFD700] transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>

            {/* Col 4: Contact */}
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white mb-4 sm:mb-6 font-heading">{t.footer.contactTitle}</h4>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-gray-400">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-[#228B22] shrink-0 mt-1" />
                  <span>{t.footer.contact.address1}</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-3 text-[#228B22] shrink-0 mt-1" />
                  <span>{t.footer.contact.address2}</span>
                </li>
                <li className="flex items-center">
                  <Mail size={18} className="mr-3 text-[#228B22]" />
                  <a href={`mailto:${t.footer.contact.email}`} className="hover:text-white">{t.footer.contact.email}</a>
                </li>
                <li className="flex items-center">
                  <Phone size={18} className="mr-3 text-[#228B22]" />
                  <a href={`tel:${t.footer.contact.phone}`} className="hover:text-white">{t.footer.contact.phone}</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-gray-500 gap-4 sm:gap-0">
            <p>{t.footer.copyright}</p>
            <div className="flex space-x-4 sm:space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="hover:text-white transition-colors">{t.footer.terms}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}