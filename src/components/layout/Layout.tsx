import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import Header from './Header';
import Footer from './Footer';
import FontStyles from '../common/FontStyles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { icons, t } = useTranslation();

  return (
    <div className="bg-[#F4F7F6] text-[#1A2B3C] selection:bg-[#228B22] selection:text-white">
      <FontStyles />
      <Header />
      <main>
        {children}
      </main>
      <Footer t={t} icons={icons} />
    </div>
  );
};

export default Layout;

