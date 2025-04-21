import { motion } from "framer-motion"
import { MdArrowOutward } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { DynamicIcon } from "./DynamicIcon/DynamicIcon";

export function Projects() {
    const { t } = useTranslation();

    const titles = t('TITLES', { returnObjects: true });
    const buttonTextToViewOnGithub = t('BUTTON_TEXT_TO_VIEW_ON_GITHUB', { returnObjects: true });

    return (
        <section className="pt-20" id="projects">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8 text-center text-3xl lg:text-4xl"
                >
                    {titles.projects}
                </motion.h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {t('PROJECTS', { returnObjects: true }).map((project) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        className="group relative overflow-hidden rounded-3xl"
                    >
                        <DynamicIcon
                            isImg
                            whileHover={{ scale: 1.1 }}
                            name={project.icon}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
                        >
                            <h3 className="mb-2 text-xl">
                                {project.name}
                            </h3>

                            <p className="mb-12 p-4">
                                {project.description}
                            </p>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="rounded-full bg-white px-4 py-4 text-black hover:bg-gray-300"
                            >
                                <div className="flex items-center">
                                    <span>{buttonTextToViewOnGithub.label}</span>
                                    <MdArrowOutward />
                                </div>
                            </a>
                        </motion.div>

                        {/* Versão mobile - sempre visível */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-gradient-to-t from-black/80 to-transparent p-4 md:hidden">
                            <h3 className="mb-1 text-lg font-medium">
                                {project.name}
                            </h3>

                            <div className="mb-2 w-full">
                                <p className="text-xs leading-tight sm:text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full rounded-full bg-white px-4 py-2 text-center text-xs text-black hover:bg-gray-300 sm:text-sm"
                            >
                                <div className="flex items-center justify-center gap-1">
                                    <span>{buttonTextToViewOnGithub.label}</span>
                                    <MdArrowOutward size={14} />
                                </div>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}