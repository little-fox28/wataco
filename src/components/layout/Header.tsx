import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { type Language } from '../../hooks/useTranslation';
import WatacoLogo from '../common/WatacoLogo';
import { Link } from 'react-router-dom';

interface HeaderProps {
  t: any;
  lang: Language;
  setLang: (lang: Language) => void;
  navLinks: string[];
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ t, lang, setLang, navLinks, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <>
      {/* Header - Green Background (#228B22) */}
      <header className="fixed top-0 w-full z-50 bg-[#228B22]/95 backdrop-blur-md border-b border-white/5 shadow-lg transition-colors duration-300">
        <div className="max-w-[1440px] mx-auto px-6 h-16 lg:h-20 flex justify-between items-center">
          <WatacoLogo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-10 items-center text-[11px] font-bold uppercase tracking-[0.2em] text-white/90">
            {t.nav.map((item: string, idx: number) => (
              navLinks[idx].startsWith('/') ? (
                <Link key={idx} to={navLinks[idx]} className="hover:text-[#FFD700] transition-colors">{item}</Link>
              ) : (
                <a key={idx} href={navLinks[idx]} className="hover:text-[#FFD700] transition-colors">{item}</a>
              )
            ))}
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center space-x-3 text-xs">
              {(['VN', 'EN', 'JP'] as Language[]).map((l: Language) => ( // Explicitly cast array
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`transition-colors ${lang === l ? 'text-[#FFD700] font-bold' : 'text-gray-200 hover:text-white'}`}
                >
                  {l}
                </button>
              ))}
            </div>
            <button className="bg-white text-[#228B22] px-6 py-2.5 rounded-md text-[10px] font-black tracking-widest hover:scale-105 transition-all uppercase shadow-lg border border-transparent hover:bg-[#FFD700] hover:text-[#1A2B3C] flex items-center">
              <ShoppingCart size={16} className="mr-2" />
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
            className="fixed inset-0 z-[60] bg-[#1A2B3C] text-white flex flex-col p-6 lg:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <WatacoLogo />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2"><X size={28} /></button>
            </div>
            <nav className="flex flex-col space-y-6 text-xl font-bold uppercase tracking-widest">
              {t.nav.map((item: string, idx: number) => (
                navLinks[idx].startsWith('/') ? (
                  <Link key={idx} to={navLinks[idx]} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#FFD700] border-b border-white/10 pb-4">{item}</Link>
                ) : (
                  <a key={idx} href={navLinks[idx]} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-[#FFD700] border-b border-white/10 pb-4">{item}</a>
                )
              ))}
            </nav>
            <div className="mt-auto flex flex-col space-y-6">
              <div className="flex space-x-6 text-sm font-bold">
                {(['VN', 'EN', 'JP'] as Language[]).map((l: Language) => ( // Explicitly cast array
                  <button key={l} onClick={() => setLang(l)} className={lang === l ? 'text-[#FFD700]' : 'text-gray-400'}>{l}</button>
                ))}
              </div>
              <button className="bg-[#228B22] text-white w-full py-4 rounded-md font-black uppercase tracking-widest min-h-[44px] flex items-center justify-center">
                <ShoppingCart size={16} className="mr-2" />
                {t.getQuote}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
