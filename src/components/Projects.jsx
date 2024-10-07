import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

export function Projects() {
    return (
        <div className="pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                Projetos
            </motion.h2>

            <div className="">
                {PROJECTS.map((project, index) => (
                    <div
                        key={index}
                        className="mb-8 flex flex-wrap lg:justify-center"
                    >
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                width={250}
                                height={250}
                                className="mb-6 rounded"
                            />
                        </motion.div>

                        <motion.a
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xl lg:w-3/4"
                        >
                            <h3 className="mb-2 font-semibold text-2xl">
                                {project.title}
                            </h3>

                            <p className="mb-4 text-stone-400">
                                {project.description}
                            </p>

                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.a>
                    </div>
                ))}
            </div>
        </div>
    )
}
