import { motion } from "framer-motion"
import { useTranslation } from "react-i18next"

import logo from "../assets/logo.png"

import { SOCIAL_MEDIA_LINKS } from "../constants"

export function Footer() {
    const { t } = useTranslation();

    const textFooter = t('TEXT_FOOTER', { returnObjects: true });

    return (
        <div className="mb-8 mt-20">
            <div className="flex items-center justify-center">
                <motion.img
                    width={200}
                    src={logo}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    alt="Logo"
                    className="my-20"
                />
            </div>

            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link, index) => (
                    <motion.a
                        key={index}
                        href={link.href}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.5 }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {link.icon}
                    </motion.a>
                ))}
            </div>

            <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
                &copy;TonSantos. {textFooter.label}
            </p>
        </div>
    )
}
