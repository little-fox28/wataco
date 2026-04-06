import { useScroll, useTransform } from 'framer-motion';
import EpcManagementSection from '../components/sections/page-home/epcManagementSection';
import HeritageSection from '../components/sections/page-home/HeritageSection';
import HeroSection from '../components/sections/page-home/heroSection/HeroSection';
import InvestmentSolutionsSection from '../components/sections/page-home/InvestmentSolutionSection';
import MapAndClientsSection from '../components/sections/page-home/MapAndClientsSection';
import MissionSection from '../components/sections/page-home/MissionSection';
import PpaModelSection from '../components/sections/page-home/ppaSection';
import ProjectSection from '../components/sections/page-home/projectSection';
import StatsSection from '../components/sections/page-home/StatsSection';
import { useTranslation } from '../hooks/useTranslation';

export default function HomePage() {
  const { t } = useTranslation();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="bg-[#F4F7F6] text-[#1A2B3C] selection:bg-[#228B22] selection:text-white">
      <HeroSection heroY={heroY} />

      <StatsSection t={t} />

      <HeritageSection t={t} />

      <MissionSection t={t} />

      <InvestmentSolutionsSection t={t} />

      <PpaModelSection t={t} />

      <EpcManagementSection t={t} />

      <MapAndClientsSection t={t} />

      <ProjectSection t={t} />

      {/* <NewsSection t={t} /> */}

    </div>
  );
}