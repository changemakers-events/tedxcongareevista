import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import { HomePage } from "./components/HomePage";
import { SpeakersPage } from "./components/SpeakersPage";
import { SponsorsPage } from "./components/SponsorsPage";
import { SupportPage } from "./components/SupportPage";
import { NewsPage } from "./components/NewsPage";
import { AboutPage } from "./components/AboutPage";

type Page = "home" | "speakers" | "sponsors" | "support" | "news" | "about";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const SITE_TITLE = "TEDxCongaree Vista";

useEffect(() => {
  const titles: Record<Page, string> = {
    home: "",
    speakers: "Speakers",
    sponsors: "Sponsors",
    support: "Support",
    news: "News",
    about: "About",
  };

  const pageTitle = titles[currentPage];
  document.title = pageTitle
    ? `${pageTitle} | ${SITE_TITLE}`
    : SITE_TITLE;
}, [currentPage]);


  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onNavigate={handleNavigate} />;
      case "speakers":
        return <SpeakersPage />;
      case "sponsors":
        return <SponsorsPage />;
      case "support":
        return <SupportPage />;
      case "news":
        return <NewsPage />;
      case "about":
        return <AboutPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navigation currentPage={currentPage} onNavigate={handleNavigate} />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}