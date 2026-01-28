// src/types/index.d.ts

import { Icon as LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

export type ProductCategoryId = 'panels' | 'inverter_grid' | 'inverter_hybrid';

export interface CountUpProps {
  value: number;
  suffix?: string;
  decimals?: number;
  prefix?: string;
}

export interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string; // Made optional
  delay?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export interface StaggerItemProps {
  children: React.ReactNode;
  className?: string; // Made optional
}

export interface Stat {
  label: string;
  val: number;
  suffix: string;
  prefix: string;
}

export interface MapStats {
  label: string,
  val: number,
  suffix: string,
  icon: LucideIcon,
  color: string,
}

export interface BenefitSpec {
  label: string;
  val: string;
}

export interface BenefitTab {
  id: string;
  label: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  specs: BenefitSpec[];
  btnText: string;
  img: string;
}

export interface ProjectData {
  name: string;
  location: string;
  capacity: string;
  production: string;
  year: string;
  img: string;
}

export interface ProductTab {
  id: ProductCategoryId;
  label: string;
  icon: LucideIcon;
}

export interface Product {
  name: string;
  spec: string;
  eff: string;
  img: string;
  tag: string;
  id?: string; // Added for generateFullProductList
}

export interface FinanceSolution {
  icon: LucideIcon;
  title: string;
  desc: string;
  link: string;
}

export interface NewsArticle {
  source: string;
  date: string;
  title: string;
  link: string;
  tag: string;
  img: string;
}

export interface InfoItem {
  icon: LucideIcon;
  title: string;
  desc?: string;
}

export interface WhySolarSection {
  title: string;
  tagline: string;
  items: InfoItem[];
}

export interface OurServicesSection {
  title: string;
  items: InfoItem[];
}

export interface ProjectPageTab {
  id: string;
  label: string;
}

export interface TranslationContent {
  viewAllArticles: ReactNode;
  section2ClientTitle: ReactNode;
  section2Description: ReactNode;
  section2Title: ReactNode;
  section2SubTitle: ReactNode;
  nav: string[];
  heroH1: string;
  heroSub: string;
  ctaMain: string;
  ctaSub: string;
  viewProject: string;
  stats: Stat[];
  mapStats: MapStats[];
  introTitle: string;
  introSub: string;
  introContent1: string;
  introContent2: string;
  introContent3: string;
  benefitsTitle: string;
  benefitsSub: string;
  benefitTabs: BenefitTab[];
  projectsTitle: string;
  projectsSub: string;
  projectTabs: ProjectPageTab[];
  whySolar: WhySolarSection;
  ourServices: OurServicesSection;
  projectsData: {
    [key: string]: ProjectData[];
  };
  productsTitle: string;
  productsSub: string;
  productTabs: ProductTab[];
  baseProductsData: {
    [key in ProductCategoryId]: Product[];
  };
  financeTitle: string;
  financeSub: string;
  financeSolutions: FinanceSolution[];
  newsTitle: string;
  newsSub: string;
  newsArticles: NewsArticle[];
  mapTitle: string;
  getQuote: string;
  footer: {
    description: string;
    solutionsTitle: string;
    solutions: string[];
    companyTitle: string;
    company: string[];
    contactTitle: string;
    contact: {
      address1: string;
      address2: string;
      email: string;
      phone: string;
    };
    copyright: string;
    privacy: string;
    terms: string;
  };
}

export interface Translations {
  VN: TranslationContent;
  EN: TranslationContent;
  JP: TranslationContent;
}

// NewsPage specific interfaces
export interface HeroSlide {
  id: number;
  title: string;
  summary: string;
  image: string;
  date: string;
}

export interface Category {
  id: string;
  label: string;
  count: number;
}

export interface NewsItem {
  id: number;
  title: string;
  summary: string;
  category: string;
  categoryId: string;
  date: string;
  views: number;
  image: string;
}

export interface TrendingNewsItem {
  id: number;
  title: string;
  date: string;
}

export interface ExpertArticle {
  id: number;
  title: string;
  desc: string;
  img: string;
}

export interface HighlightWatacoProps {
  text: string;
}

export interface NewsListItemProps {
  item: NewsItem;
}

export interface SidebarWidgetProps {
  title: string;
  children: React.ReactNode;
}

// ProjectsPage specific interfaces
export interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export interface ProjectsPageCountUpProps {
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export interface ProjectCategory {
  id: string;
  label: string;
  icon: LucideIcon | null;
}

export interface ProjectDataProjectsPage {
  id: number;
  name: string;
  category: string;
  location: string;
  capacity: string;
  year: string;
  status: string;
  image: string;
}

export interface ProjectLocation {
  top: string;
  left: string;
  name: string;
}

export interface ProjectCardProps {
  project: ProjectDataProjectsPage;
}
