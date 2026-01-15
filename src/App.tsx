import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import NewsPage from './pages/NewsPage';
import CareersPage from './pages/CareersPage';
import FloatingContact from './components/common/FloatingContact';

const App = () => {
  return (
    <Router basename="/wataco/">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <FloatingContact />
    </Router>
  );
};

export default App;