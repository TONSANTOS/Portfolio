import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

import { useTheme } from "../hooks/useTheme";

export function WorkExperience() {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();

    const borderColor = isDarkMode ? "border-stone-50/30" : "border-gray-500/50"
    const textColor = isDarkMode ? "text-stone-300" : "text-gray-600"

    const titles = t('TITLES', { returnObjects: true });
    const dateText = t('DATE_TEXT', { returnObjects: true });

    function calculateDuration(startDate) {
        const actualStartDate = startDate instanceof Date ? startDate : new Date(startDate);

        const now = new Date();
        const startYear = actualStartDate.getFullYear();
        const startMonth = actualStartDate.getMonth();

        let years = now.getFullYear() - startYear;
        let months = now.getMonth() - startMonth;

        if (months < 0) {
            years -= 1;
            months += 12;
        }

        const yearText = years === 1 ? `1 ${dateText[0].label}` : years > 1 ? `${years} ${dateText[1].label}` : "";
        const monthText = months === 1 ? `1 ${dateText[2].label}` : months > 1 ? `${months} ${dateText[3].label}` : "";

        if (yearText && monthText) {
            return `${yearText} ${dateText[4].label} ${monthText}`;
        }

        return yearText || monthText;
    }

    return (
        <section
            id="work"
            className="pt-20"
        >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center text-4xl font-semibold tracking-tighter"
                >
                    {titles.work_experience}
                </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-8 p-10"
            >
                {t('EXPERIENCES', { returnObjects: true }).map((experience, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`rounded-xl border ${borderColor} bg-white/10 p-4`}
                    >
                        <h3 className="text-2xl font-semibold">
                            {experience.title}
                        </h3>

                        <p className="text-xl">
                            {experience.company}
                        </p>
                        <p className={`text-sm ${textColor}`}>
                            {experience.title === "Dev React" || experience.title === "React Developer"
                                ? `${experience.text} ${calculateDuration(new Date(experience.startDate))}`
                                : experience.duration}
                        </p>
                        <p className="mt-2 text-base">
                            {experience.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}