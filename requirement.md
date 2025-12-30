Please perform a comprehensive refactor and optimization of my Wataco Engineering project based on the provided src/App.tsx (Homepage). Follow these requirements to create a production-ready, mobile-first POC:

1. Modular Project Structure & Refactoring:

Component Atomization: Extract reusable sections into a src/components/ folder. Create separate files for: Header.tsx, Footer.tsx, WatacoLogo.tsx, StaggerContainer.tsx, and CountUp.tsx.

Main Layout Pattern: Create a src/components/layout/MainLayout.tsx that includes a persistent <Header /> and <Footer /> with an <Outlet /> for dynamic content.

Page Separation: Move the existing Homepage logic to src/pages/Home.tsx. Create placeholder files for src/pages/Products.tsx, src/pages/Projects.tsx, and src/pages/News.tsx.

2. Routing & Navigation:

Setup React Router: Configure App.tsx as the main Router using BrowserRouter.

Define Routes: Map / to Home.tsx, /products to Products.tsx, /projects to Projects.tsx, and /news to News.tsx, all wrapped within MainLayout.tsx.

SPA Navigation: Update all links in the Header to use react-router-dom's <Link> or <NavLink> instead of standard <a> tags.

3. Mobile-First Responsive Optimization:

Mobile Nav: Implement a functional Hamburger Menu for mobile screens (using Menu and X icons) with a clean overlay.

Grid Adjustments: Ensure all grid-cols-4 or grid-cols-2 layouts stack vertically (grid-cols-1) on mobile.

UX & Touch: Enable touch-swipe functionality for all carousels/sliders. Ensure CTA buttons have a minimum tap target of 44px.

Animation Tuning: Adjust framer-motion triggers to viewport={{ once: false, amount: 0.1, margin: "-20px" }} for better mobile reveal performance.

4. Final Deliverable:

Please provide the updated file structure and the complete code for App.tsx, MainLayout.tsx, Header.tsx, and the reorganized Home.tsx.