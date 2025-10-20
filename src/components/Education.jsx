import { useTranslation } from "react-i18next";
import { motion } from "framer-motion"

import { useTheme } from "../hooks/useTheme";

export function Education() {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();

    const titles = t('TITLES', { returnObjects: true });
    const education = t('EDUCATION', { returnObjects: true });
    const continuousLearning = t('CONTINUOUS_LEARNING', { returnObjects: true });
    
    const textColor = isDarkMode ? "text-stone-300" : "text-gray-600"

    const tagColors = [
        "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
        "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", 
        "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"
    ];

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

            {/* Seção de Educação Formal */}
            <div className="mb-8">
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-xl font-semibold mb-4 text-center"
                >
                    {titles.formalEducation}
                </motion.h3>
                
                {education.map((ect, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: index * 0.5 }}
                        className="mb-6 p-6 border-l-4 border-blue-500 bg-white/10 dark:bg-gray-800 rounded-r-lg shadow-md"
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
            </div>

            {/* Seção de Desenvolvimento Contínuo */}
            <div>
                <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-xl font-semibold mb-4 text-center"
                >
                    {titles.continuousLearning}
                </motion.h3>

                {continuousLearning.map((learning, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.3 }}
                        className="mb-6 p-6 border-l-4 border-green-500 bg-white/10 dark:bg-gray-800 rounded-r-lg shadow-md"
                    >
                        <h3 className="text-xl font-semibold">
                            {learning.title}
                        </h3>
                        <p className={`text-sm ${textColor} italic`}>
                            {learning.status}
                        </p>
                        <p className="mt-2">
                            {learning.description}
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                            {learning.tags.map((tag, tagIndex) => (
                                <span 
                                    key={tagIndex}
                                    className={`px-3 py-1 rounded-full text-sm ${
                                        tagColors[tagIndex % tagColors.length]
                                    }`}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}