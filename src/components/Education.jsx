import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

import { useTheme } from "../hooks/useTheme";

export function Education() {
    const { isDarkMode } = useTheme();

    const { t } = useTranslation();

    const titles = t('TITLES', { returnObjects: true });

    const textColor = isDarkMode ? "text-stone-300" : "text-gray-600"

    return (
        <section id="education" className="py-8">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="mb-4 text-center text-3xl font-bold"
                >
                    {titles.education}
                </motion.h2>

            {t('EDUCATION', { returnObjects: true }).map((ect, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.5 }}
                    className="mb-6 p-10"
                >
                    <h3 className="text-xl font-semibold">
                        {ect.degree}
                    </h3>

                    <p className="text-lg">
                        {ect.institution}
                    </p>
                    <p className={`text-sm ${textColor}`}>
                        {ect.duration}
                    </p>
                    <p className="mt-2">
                        {ect.description}
                    </p>
                </motion.div>
            ))}
        </section>
    )
}
