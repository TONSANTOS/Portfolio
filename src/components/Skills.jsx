import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useTheme } from "../hooks/useTheme";

import { SKILLS } from "../constants";

import { DynamicIcon } from "./DynamicIcon/DynamicIcon";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            staggerChildren: 0.5
        }
    }
}

const itemVariants = {
    hidden: {
        opacity: 0, x: -20
    },
    visible: {
        opacity: 1, x: 0, transition: { duration: 0.5 }
    }
}

export function Skills() {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();

    const titles = t('TITLES', { returnObjects: true });

    const borderColor = isDarkMode ? "border-stone-50/30" : "border-gray-500/50";

    return (
        <div id="skills" className="container mx-auto">
                <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
                    {titles.skills}
                </h2>

            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className={`mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border ${borderColor}`}
            >
                {t('SKILLS', { returnObjects: true }).map((skill, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`py-6 flex items-center justify-between ${index !== SKILLS.length - 1 ? `border-b ${borderColor}` : ""}`}
                    >
                        <div className="flex items-center">
                            <DynamicIcon
                                name={skill.icon}
                                className={skill.classNameIcon}
                            />

                            <h3 className="px-6 text-lg lg:text-2xl">
                                {skill.name}
                            </h3>
                        </div>

                        <div className="text-md font-semibold lg:text-xl">
                            <span>
                                {skill.experience}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
