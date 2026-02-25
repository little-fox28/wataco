import { lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import FloatingContact from './components/common/FloatingContact';
import CareersPage from './pages/CareersPage';
import NewsPage from './pages/NewsPage';
import ProjectsPage from './pages/ProjectsPage';
import ArticleDetail from './posts/[slug]/page';

// Lazy load HomePage
const HomePage = lazy(() => import('./pages/HomePage'));

const App = () => {
  return (
    <Router basename="/wataco/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/posts/:slug" element={<ArticleDetail />} />
      </Routes>
      <FloatingContact />
    </Router>
  );
};

export default App;