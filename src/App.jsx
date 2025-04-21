import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { Bio } from "./components/Bio";
import { ContactForm } from "./components/ContactForm";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { WorkExperience } from "./components/WorkExperience";
import { Certifications } from "./components/Certifications";
import { Skeleton } from "./components/Skeleton";

import { useTheme } from "./hooks/useTheme";
import { useThemeSound } from "./hooks/useThemeSound";

export function App() {
  const { isDarkMode, toggleTheme } = useTheme();
  const playThemeSound = useThemeSound();
  const { i18n } = useTranslation();

  const [isLoading, setIsLoading] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "5575991470020";
    const message = "Olá, vim pelo seu portfólio!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  const handleThemeToggle = () => {
    setIsAnimating(true);

    playThemeSound();
    toggleTheme();

    setTimeout(() => setIsAnimating(false), 1000);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("userLanguage");

    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage).then(() => {
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [i18n]);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className={`relative h-full overflow-y-auto antialiased ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
      <div className={`fixed inset-0 bg-fixed bg-cover bg-center ${isDarkMode ? "bg-img" : "bg-light-mode"}`} />

      <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <NavBar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <Certifications />
        <ContactForm />
        <Footer />
      </div>

      <div className="fixed right-4 bottom-4 sm:right-6 sm:bottom-6 md:right-8 md:bottom-8 flex flex-col space-y-3 z-50">
        <motion.button
          onClick={handleWhatsAppClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            p-3 sm:p-4
            rounded-full
            ${isDarkMode ? 'bg-green-700 hover:bg-green-600' : 'bg-green-500 hover:bg-green-600'}
            text-white
            transition-all
            shadow-lg
            flex items-center justify-center
          `}
          aria-label="Enviar mensagem no WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.button>

        <motion.button
          onClick={handleThemeToggle}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            p-3 sm:p-4
            rounded-full
            ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}
            ${isDarkMode ? 'text-yellow-300' : 'text-gray-700'}
            transition-all
            shadow-lg
          `}
          aria-label={isDarkMode ? 'Ativar modo claro' : 'Ativar modo escuro'}
          disabled={isAnimating}
        >
          {isDarkMode ? (
            <FiSun className="w-5 h-5 sm:w-6 sm:h-6" />
          ) : (
            <FiMoon className="w-5 h-5 sm:w-6 sm:h-6" />
          )}
        </motion.button>
      </div>
    </div>
  )
}