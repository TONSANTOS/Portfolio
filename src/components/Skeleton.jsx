import { motion } from "framer-motion";

export function Skeleton() {
    const pulseAnimation = {
        initial: { opacity: 0.5 },
        animate: { opacity: 0.8 },
        transition: { duration: 1.5, repeat: Infinity, repeatType: "reverse" }
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            transition="transition"
            className="flex min-h-screen flex-wrap items-center bg-gray-100 dark:bg-gray-900 p-4"
        >
            <div className="w-full md:w-1/2 space-y-6">
                {/* Nome */}
                <motion.div
                    {...pulseAnimation}
                    className="h-20 w-3/4 rounded bg-gray-300 dark:bg-gray-700"
                />

                {/* Saudação */}
                <motion.div
                    {...pulseAnimation}
                    className="h-12 w-5/6 rounded bg-gray-300 dark:bg-gray-700"
                />

                {/* Descrição */}
                <div className="space-y-2">
                    <motion.div
                        {...pulseAnimation}
                        className="h-4 w-full rounded bg-gray-300 dark:bg-gray-700"
                    />
                    <motion.div
                        {...pulseAnimation}
                        className="h-4 w-5/6 rounded bg-gray-300 dark:bg-gray-700"
                    />
                    <motion.div
                        {...pulseAnimation}
                        className="h-4 w-4/6 rounded bg-gray-300 dark:bg-gray-700"
                    />
                </div>

                {/* Botão de download */}
                <motion.div
                    {...pulseAnimation}
                    className="h-12 w-48 rounded-full bg-gray-300 dark:bg-gray-700"
                />
            </div>

            {/* Parte direita (imagem) */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <div className="flex justify-center">
                    <motion.div
                        {...pulseAnimation}
                        className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-3xl bg-gray-300 dark:bg-gray-700"
                    />
                </div>
            </div>
        </motion.div>
    );
}