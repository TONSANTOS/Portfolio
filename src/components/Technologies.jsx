import { motion } from "framer-motion"

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt, FaNpm, FaNodeJs, FaJsSquare } from "react-icons/fa";
import { SiBootstrap, SiRedux, SiTailwindcss, SiTypescript, SiYarn } from "react-icons/si";
import { FaCss3Alt, FaHtml5, FaSass } from "react-icons/fa6";

export function Technologies() {
    const iconVariants = (duration) => ({
        initial: { y: -10 },
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    })

    const technologies = [
        { icon: <RiReactjsLine />, color: "text-cyan-400", name: "React.js" },
        { icon: <TbBrandNextjs />, color: "", name: "Next.js" },
        { icon: <FaGitAlt />, color: "text-[#F05032]", name: "Git" },
        { icon: <FaNpm />, color: "text-[#CB3837]", name: "NPM" },
        { icon: <FaNodeJs />, color: "text-[#339933]", name: "Node.js" },
        { icon: <FaJsSquare />, color: "text-[#F7DF1E]", name: "JavaScript" },
        { icon: <SiRedux />, color: "text-[#764ABC]", name: "Redux.js" },
        { icon: <SiTypescript />, color: "text-[#3178C6]", name: "TypeScript" },
        { icon: <SiYarn />, color: "text-[#2C8EBB]", name: "Yarn" },
        { icon: <SiBootstrap />, color: "text-[#7952B3]", name: "Bootstrap" },
        { icon: <SiTailwindcss />, color: "text-[#06B6D4]", name: "Tailwind CSS" },
        { icon: <FaCss3Alt />, color: "text-[#1572B6]", name: "CSS3" },
        { icon: <FaSass />, color: "text-[#CC6699]", name: "SCSS" },
        { icon: <FaHtml5 />, color: "text-[#E34F26]", name: "HTML5" },
    ];

    return (
        <div className="pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Ferramentas e Tecnologias
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {technologies.map((tech, index) => (
                    <motion.div
                        key={index}
                        initial="initial"
                        animate="animate"
                        variants={iconVariants(2.5)}
                        className="p-4"
                    >
                        <div className={`text-7xl ${tech.color}`} title={tech.name}>
                            {tech.icon}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
