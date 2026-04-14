import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FloatingContact from './components/common/FloatingContact';
import ScrollToTop from './components/common/ScrollToTop';
import Layout from './components/layout/Layout';
import { LanguageProvider } from './contexts/LanguageContext';
import AboutUsPage from './pages/AboutUsPage';
import CareersPage from './pages/CareersPage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import ArticleDetail from './posts/[slug]/page';

// Lazy load HomePage
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <LanguageProvider>
      <Router basename="/">
        <Layout>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/posts/:slug" element={<ArticleDetail />} />
            <Route path="/about-us" element={<AboutUsPage />} />
          </Routes>
        </Layout>
        <FloatingContact />
      </Router>
    </LanguageProvider>
  );
};

export default App;