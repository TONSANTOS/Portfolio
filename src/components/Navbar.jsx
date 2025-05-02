import { useState, useRef, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useTheme } from "../hooks/useTheme";

import logo from "../assets/logo.png";

export function NavBar() {
    const languageRef = useRef(null);
    const mobileLanguageRef = useRef(null);

    const { isDarkMode } = useTheme();
    const { t, i18n } = useTranslation();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setIsLanguageOpen(false);
    };

    const toggleLanguageMenu = (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsLanguageOpen(!isLanguageOpen);
    };

    const changeLanguage = (lng, e) => {
        e.preventDefault();
        e.stopPropagation();

        i18n.changeLanguage(lng);

        setIsLanguageOpen(false);

        localStorage.setItem("userLanguage", lng);
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();

        setIsMobileMenuOpen(false);

        setTimeout(() => {
            const targetElement = document.querySelector(href);

            if (targetElement) {
                const offset = -85;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY + offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 350);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                languageRef.current && !languageRef.current.contains(event.target) &&
                mobileLanguageRef.current && !mobileLanguageRef.current.contains(event.target)
            ) {
                setIsLanguageOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const savedLanguage = localStorage.getItem("userLanguage");

        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    return (
        <div className="">
            <nav className="fixed left-0 right-0 top-0 z-50">
                {/* Desktop Menu */}
                <div className={`mx-auto hidden max-w-4xl items-center justify-center rounded-b-lg border py-3 backdrop-blur-lg lg:flex 
                    ${isDarkMode ? "border-stone-50/30 bg-black/20" : "border-gray-400/30 bg-gradient-to-br from-gray-300/70 to-gray-400/70 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"}`}>

                    <div className="">
                        <a href="#">
                            <img src={logo} width={150} alt="logo" />
                        </a>
                    </div>

                    <div className="">
                        <ul className="flex items-center gap-4">
                            {t('NAVIGATION_LINKS', { returnObjects: true }).map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className={`text-sm ${isDarkMode ? "hover:text-yellow-400" : "hover:text-yellow-600"}`}
                                        onClick={(e) => handleLinkClick(e, item.href)}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden ${isDarkMode ? "bg-black/20 backdrop-blur-md" : "bg-gradient-to-br from-gray-300/70 to-gray-400/70 backdrop-blur-md shadow-[0_4px_15px_rgba(0,0,0,0.06)]"}`}>
                    <div className="flex items-center justify-between">

                        <div>
                            <a href="#">
                                <img src={logo} alt="Logo" width={90} className="m-2" />
                            </a>
                        </div>

                        <div className="flex items-center gap-2 mr-2">
                            {/* Botão de Idioma (Mobile) */}
                            <div className="relative" ref={mobileLanguageRef}>
                                <button
                                    onClick={toggleLanguageMenu}
                                    className={`p-2 rounded-full ${isDarkMode ? "text-white hover:bg-gray-700" : "text-gray-800 hover:bg-gray-200"} transition-colors`}
                                    aria-label={t('languageSelector')}
                                >
                                    <FiGlobe className="text-xl" />
                                </button>

                                {isLanguageOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className={`absolute right-0 mt-2 w-32 rounded-lg py-1 z-50 ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-xl`}
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <button
                                            onClick={(e) => changeLanguage('pt', e)}
                                            className={`w-full px-4 py-2 text-left 
                                                ${i18n.language === 'pt' ? isDarkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-100 text-yellow-600" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                                        >
                                            Português (BR)
                                        </button>

                                        <button
                                            onClick={(e) => changeLanguage('en', e)}
                                            className={`w-full px-4 py-2 text-left 
                                                ${i18n.language === 'en' ? isDarkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-100 text-yellow-600" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                                        >
                                            English (US)
                                        </button>
                                    </motion.div>
                                )}
                            </div>

                            <button
                                className="focus:outline-none lg:hidden p-2"
                                onClick={toggleMobileMenu}
                            >
                                {isMobileMenuOpen ? (
                                    <FaTimes className="h-6 w-6" />
                                ) : (
                                    <FaBars className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isMobileMenuOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, type: "spring" }}
                                className={`overflow-hidden ${isDarkMode ? "border-stone-50/30 bg-black/20" : "border-gray-400/30 bg-gradient-to-br from-gray-300/70 to-gray-400/70 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"}`}
                                style={{
                                    backdropFilter: 'blur(16px)',
                                    WebkitBackdropFilter: 'blur(16px)'
                                }}
                            >
                                <ul className="ml-4 mt-4 flex flex-col gap-4 pb-4">
                                    {t('NAVIGATION_LINKS', { returnObjects: true }).map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.1, type: "spring" }}
                                        >
                                            <a
                                                href={item.href}
                                                className="block w-full text-lg"
                                                onClick={(e) => handleLinkClick(e, item.href)}
                                            >
                                                {item.label}
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Botão de Idioma (Desktop) */}
                <div className="fixed right-4 top-3 z-50 hidden lg:block" ref={languageRef}>
                    <motion.button
                        onClick={toggleLanguageMenu}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium shadow-lg transition-all backdrop-blur-sm border 
                            ${isDarkMode ? "bg-gray-700/90 text-white hover:bg-gray-600/90 border-gray-600" : "bg-white/90 text-gray-800 hover:bg-gray-100/90 border-gray-200"}`}
                        aria-label={t('languageSelector')}
                    >
                        <FiGlobe className="text-base" />

                        <span className="font-medium">{i18n.language === 'pt' ? 'BR' : 'US'}</span>

                        <IoMdArrowDropdown className={`transition-transform ${isLanguageOpen ? "rotate-180" : ""}`} />
                    </motion.button>

                    {isLanguageOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className={`absolute right-0 mt-2 w-32 rounded-lg py-1 shadow-xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={(e) => changeLanguage('pt', e)}
                                className={`w-full px-4 py-2 text-left 
                                    ${i18n.language === 'pt' ? isDarkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-100 text-yellow-600" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                            >
                                Português (BR)
                            </button>

                            <button
                                onClick={(e) => changeLanguage('en', e)}
                                className={`w-full px-4 py-2 text-left 
                                    ${i18n.language === 'en' ? isDarkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-100 text-yellow-600" : isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"}`}
                            >
                                English (US)
                            </button>
                        </motion.div>
                    )}
                </div>
            </nav>
        </div>
    );
}