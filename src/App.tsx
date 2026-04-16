import { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FloatingContact from './components/common/FloatingContact';
import ScrollToTop from './components/common/ScrollToTop';
import Layout from './components/layout/Layout';
import { LanguageProvider } from './contexts/LanguageContext';

// Lazy load all pages for code-splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ArticleDetail = lazy(() => import('./posts/[slug]/page'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
    <div className="w-10 h-10 border-4 border-[#228B22] border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => {
  return (
    <LanguageProvider>
      <Router basename="/">
        <Layout>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/posts/:slug" element={<ArticleDetail />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </Layout>
        <FloatingContact />
      </Router>
    </LanguageProvider>
  );
};

export default App;