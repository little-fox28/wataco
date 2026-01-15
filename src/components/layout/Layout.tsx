import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import Header from './Header';
import Footer from './Footer';
import FontStyles from '../common/FontStyles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t, lang, setLang, icons } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const navLinks = ["/", "/projects", "/products", "/news"];

  return (
    <div className="bg-[#F4F7F6] text-[#1A2B3C] selection:bg-[#228B22] selection:text-white">
      <FontStyles />
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        navLinks={navLinks}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main>
        {children}
      </main>
      <Footer icons={icons} />
    </div>
  );
};

export default Layout;
