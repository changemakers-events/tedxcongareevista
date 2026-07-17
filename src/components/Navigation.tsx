import { motion } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";

import longLogoBlack from "../assets/longlogo-black.webp";

export function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();

  // Deduce the current page name from the URL pathname to style active link
  const currentPathPage = location.pathname.split("/")[1] || "home";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "speakers", label: "Speakers" },
    { id: "sponsors", label: "Sponsors" },
    { id: "support", label: "Support" },
    { id: "news", label: "News" },
    { id: "about", label: "About" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8"
    >
      <div
        className={`max-w-7xl mx-auto bg-white/95 backdrop-blur-sm shadow-lg border border-gray-100 ${
          mobileMenuOpen ? "rounded-3xl" : "rounded-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex-shrink-0 cursor-pointer flex items-center"
            onClick={() => navigate("/")}
          >
            <div className="h-8 sm:h-10 overflow-hidden flex items-center min-w-[120px] sm:min-w-[180px]">
              <ImageWithFallback
                src={longLogoBlack}
                alt="TEDxCongaree Vista logo"
                style={{
                  height: "3rem",
                  width: "auto",
                  display: "block",
                  objectFit: "contain",
                }}
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => navigate(item.id === "home" ? "/" : `/${item.id}`)}
                className={`relative px-1 py-2 transition-colors cursor-pointer ${
                  currentPathPage === item.id
                    ? "text-[#E62B1E]"
                    : "text-gray-700 hover:text-[#E62B1E]"
                }`}
              >
                {item.label}
                {currentPathPage === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E62B1E]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 text-gray-700"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 px-4"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  navigate(item.id === "home" ? "/" : `/${item.id}`);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-center px-4 py-3 rounded-lg cursor-pointer ${
                  currentPathPage === item.id
                    ? "text-[#E62B1E] bg-red-50"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}