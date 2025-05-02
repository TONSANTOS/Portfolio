import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

import resumePdf from '../assets/resume/JARLOTTON_SANTOS_currículo.pdf';
import tonImg from "../assets/ton03.jpg";

export function Hero() {
    const childrenVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
    }

    const { t } = useTranslation();
    const hero = t('HERO', { returnObjects: true });

    const [typedName, setTypedName] = useState("");
    const [typedGreet, setTypedGreet] = useState("");
    const [typedDescription, setTypedDescription] = useState("");

    const handleDownload = () => {
        const link = document.createElement('a');
        
        link.href = resumePdf;
        link.download = 'JARLOTTON_SANTOS.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    useEffect(() => {
        if (typedName.length < hero.name.length) {
            const timeout = setTimeout(() => {
                setTypedName(hero.name.substring(0, typedName.length + 1));
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [typedName, hero.name]);

    useEffect(() => {
        if (typedName.length === hero.name.length && typedGreet.length < hero.greet.length) {
            const timeout = setTimeout(() => {
                setTypedGreet(hero.greet.substring(0, typedGreet.length + 1));
            }, 50);

            return () => clearTimeout(timeout);
        }
    }, [typedGreet, hero.greet, typedName.length, hero.name.length]);

    useEffect(() => {
        if (typedGreet.length === hero.greet.length && typedDescription.length < hero.description.length) {
            const timeout = setTimeout(() => {
                setTypedDescription(hero.description.substring(0, typedDescription.length + 1));
            }, 30);

            return () => clearTimeout(timeout);
        }
    }, [typedDescription, hero.description, typedGreet.length, hero.greet.length]);

    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2"
            >
                <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    {typedName}

                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="ml-1"
                    >
                        {typedName.length < hero.name.length ? "|" : ""}
                    </motion.span>
                </h2>

                <p className="p-2 text-3xl tracking-tighter lg:text-4xl flex items-center">
                    {typedGreet}

                    {typedGreet.length === hero.greet.length && (
                        <motion.span
                            initial={{ rotate: -30 }}
                            animate={{
                                rotate: [0, -30, 0, -30, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                duration: 2,
                                ease: "easeInOut"
                            }}
                            className="ml-3"
                        >
                            👋🏻
                        </motion.span>
                    )}

                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="ml-1"
                    >
                        {typedGreet.length < hero.greet.length ? "|" : ""}
                    </motion.span>
                </p>

                <p className="mb-8 p-2 text-xl">
                    {typedDescription}

                    <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="ml-1"
                    >
                        {typedDescription.length < hero.description.length ? "|" : ""}
                    </motion.span>
                </p>

                <motion.button
                    variants={childrenVariants}
                    className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10 md:mb-10"
                    onClick={handleDownload}
                >
                    {hero.downloadResumeButtonText}
                </motion.button>
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
                        whileHover={{ scale: 1.02 }}
                    />
                </div>
            </motion.div>
        </section>
    )
}
