import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// import tonImg from "../assets/ton.jpg";
// import tonImg from "../assets/ton02.jpg";
import tonImg from "../assets/ton03.jpg";

export function Hero() {
    const childrenVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }

    const { t } = useTranslation();

    const hero = t('HERO', { returnObjects: true });

    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
            >
                <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    {hero.name}
                </h2>

                <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
                    {hero.greet}
                </p>

                <p className="mb-8 p-2 text-xl">
                    {hero.description}
                </p>

                <motion.a
                    download
                    variants={childrenVariants}
                    href="../assets/resume/JARLOTTON_SANTOS_currículo.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 md:mb-10"
                >
                    {hero.downloadResumeButtonText}
                </motion.a>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 lg:p-8 mt-8 md:mt-0"
            >
                <div className="flex justify-center">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        src={tonImg}
                        alt="Ton Santos"
                        width={550}
                        height={550}
                        className="rounded-3xl"
                    />
                </div>
            </motion.div>
        </section>
    )
}
