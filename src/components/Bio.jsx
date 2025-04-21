import { motion } from "framer-motion"
import { useTranslation } from "react-i18next";

export function Bio() {
    const { t } = useTranslation();

    return (
        <section id="bio" className="flex max-w-4xl flex-col gap-12 pt-20">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-center text-3xl lg:text-4xl"
            >
                Bio
            </motion.h2>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {t('BIO', { returnObjects: true }).map((bio, index) => (
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.5 }}
                        className="mb-4 text-lg lg:text-xl"
                    >
                        {bio}
                    </motion.p>
                ))}
            </motion.div>
        </section>
    )
}
