/* eslint-disable react/prop-types */
import { motion } from "framer-motion"

import { icons } from "./index";

export function DynamicIcon({
    name,
    className = "",
    color = "",
    isImg = false,
    ...allMotionProps
}) {
    const IconComponent = icons[name];

    if (!IconComponent) {
        console.warn(`Ícone não encontrado: ${name}`);

        return null;
    }

    if (isImg) {
        return (
            <motion.img
                src={IconComponent}
                alt={name}
                className={className}
                {...allMotionProps}
            />
        )
    } else {
        return <IconComponent className={`${className} ${color}`} />
    }
};