import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

import { CERTIFICATIONS } from "../constants";

import { useTheme } from "../hooks/useTheme";

export function Certifications() {
    const [parent] = useAutoAnimate();
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();
    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const titles = t('TITLES', { returnObjects: true });
    const credentialButton = t('DISPLAY_CREDENTIAL_BUTTON', { returnObjects: true });

    const cardsToShow = isMobile ? 1 : 2;

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentIndex((prev) => (prev + 1) % CERTIFICATIONS.length);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <section className="pt-16 md:pt-20 px-4" id="certifications">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 text-center text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white"
                >
                    {titles.certifications}
                </motion.h2>

            <div className="relative">
                <div className="flex justify-center gap-2 mb-6">
                    {Array.from({ length: CERTIFICATIONS.length }).map((_, index) => (
                        <motion.button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className={`h-3 w-3 rounded-full transition-all duration-300 
                                ${currentIndex === index ? isDarkMode ? "bg-gray-300 w-8" : "bg-gray-700 w-8" : isDarkMode ? "bg-gray-600 opacity-60" : "bg-gray-400 opacity-60"}`}
                            aria-label={`Ir para conjunto ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="mx-auto max-w-4xl overflow-hidden px-4">
                    <div
                        ref={parent}
                        className={`${isMobile ? 'h-[400px]' : 'flex gap-4'}`}
                    >
                        {isMobile ? (
                            <motion.div
                                key={currentIndex}
                                className="w-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                onMouseEnter={() => setIsPaused(true)}
                                onMouseLeave={() => setIsPaused(false)}
                            >
                                <div className="relative h-72 sm:h-80 overflow-hidden rounded-2xl">
                                    <div className={`absolute inset-0 ${t('CERTIFICATIONS', { returnObjects: true })[currentIndex].gradient}`} />

                                    <div className="relative flex h-full flex-col p-6 text-white">
                                        <h3 className="mb-2 text-sm font-semibold">
                                            {t('CERTIFICATIONS', { returnObjects: true })[currentIndex].title}
                                        </h3>

                                        <div className="mb-4 flex-1">
                                            <p className="text-xs line-clamp-3 text-white/90">
                                                {t('CERTIFICATIONS', { returnObjects: true })[currentIndex].skills}
                                            </p>
                                        </div>

                                        <div className="mt-auto flex justify-center">
                                            <motion.a
                                                href={t('CERTIFICATIONS', { returnObjects: true })[currentIndex].credentialUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-white whitespace-nowrap min-w-[140px] justify-center"
                                            >
                                                {credentialButton.label}
                                                <FiExternalLink className="text-xs" />
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="flex gap-4 transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
                                {t('CERTIFICATIONS', { returnObjects: true }).map((certification) => (
                                    <div
                                        key={certification.id}
                                        className="flex-shrink-0 w-[calc(50%-8px)]"
                                        style={{ minWidth: `${100 / cardsToShow}%` }}
                                        onMouseEnter={() => setIsPaused(true)}
                                        onMouseLeave={() => setIsPaused(false)}
                                    >
                                        <motion.div
                                            className="relative h-72 sm:h-80 overflow-hidden rounded-2xl"
                                            whileHover={{ scale: 1.02 }}
                                        >
                                            <div className={`absolute inset-0 ${certification.gradient}`} />

                                            <div className="relative flex h-full flex-col p-6 text-white">
                                                <h3 className="mb-2 text-lg font-semibold">
                                                    {certification.title}
                                                </h3>

                                                <div className="mb-4 flex-1">
                                                    <p className="text-sm line-clamp-3 text-white/90">
                                                        {certification.skills}
                                                    </p>
                                                </div>

                                                <div className="mt-auto flex justify-center">
                                                    <motion.a
                                                        href={certification.credentialUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        whileHover={{ scale: 1.05 }}
                                                        className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-white whitespace-nowrap min-w-[140px] justify-center"
                                                    >
                                                        {credentialButton.label}
                                                        <FiExternalLink className="text-xs" />
                                                    </motion.a>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}