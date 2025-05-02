import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import { useTheme } from "../hooks/useTheme";
import { DynamicIcon } from "./DynamicIcon/DynamicIcon";

// eslint-disable-next-line react/prop-types
export function Skills({ type = 1 }) {
    const { isDarkMode } = useTheme();
    const { t } = useTranslation();

    const titles = t('TITLES', { returnObjects: true });
    const skillsData = t('SKILLS', { returnObjects: true });

    const borderColor = isDarkMode ? "border-stone-50/30" : "border-gray-500/50";
    const duplicatedSkills = [...skillsData, ...skillsData];

    const variants = {
        1: {
            container: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        staggerChildren: 0.5
                    }
                }
            },
            item: {
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
            }
        },
        2: {
            container: {
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3
                    }
                }
            },
            item: {
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 }
                },
                hover: {
                    scale: 1.03,
                    transition: { duration: 0.2 }
                }
            },
            experience: {
                hover: {
                    scale: 1.2,
                    transition: { duration: 0.3 }
                }
            }
        }
    };

    if (type === 1) {
        return (
            <div id="skills" className="container mx-auto">
                <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
                    {titles.skills}
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={variants[type].container}
                    viewport={{ once: true }}
                    className={`mx-2 flex flex-col rounded-3xl px-4 py-2 lg:px-20 border ${borderColor}`}
                >
                    {skillsData?.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={variants[type].item}
                            className={`py-6 flex items-center justify-between ${index !== skillsData?.length - 1 ? `border-b ${borderColor}` : ""}`}
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
                                <span>{skill.experience}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        );
    } else if (type === 2) {
        return (
            <div id="skills" className="container mx-auto overflow-hidden">
                <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
                    {titles.skills}
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={variants[type].container}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative"
                >
                    <motion.div
                        className="flex w-max"
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    >
                        {duplicatedSkills.map((skill, index) => (
                            <motion.div
                                key={`${skill.name}-${index}`}
                                variants={variants[type].item}
                                whileHover="hover"
                                className={`flex-shrink-0 mx-4 p-6 min-w-[300px] rounded-xl border ${isDarkMode ? "border-stone-50/30 bg-stone-800/30" : "border-gray-400/30 bg-gradient-to-br from-gray-200/70 to-gray-300/70 shadow-[0_4px_20px_rgba(0,0,0,0.08)]"} transition-all duration-300`}
                                // className={`flex-shrink-0 mx-4 border p-6 min-w[300px] rounded-xl ${isDarkMode ? "border-stone-50/30 bg-stone-800/30" : "border-gray-400/30 bg-gray-100/50"} transition-colors duration-300 shadow-sm`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <DynamicIcon
                                            name={skill.icon}
                                            className={skill.classNameIcon}
                                        />

                                        <h3 className="px-4 text-lg font-medium">
                                            {skill.name}
                                        </h3>
                                    </div>

                                    <motion.span
                                        variants={variants[type].experience}
                                        className="text-md font-semibold px-2 py-1 rounded-md"
                                    >
                                        {skill.experience}
                                    </motion.span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        );
    }
}