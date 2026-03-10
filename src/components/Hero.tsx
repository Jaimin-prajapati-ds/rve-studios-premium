"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#050505]">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-8"
            >
                <span className="text-[0.9rem] tracking-[0.2em] text-white/60 font-heading">
                    [rve]
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading leading-[1.1] max-w-4xl text-white normal-case"
                style={{ textTransform: 'none' }}
            >
                A premium <br /> content agency
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="max-w-[600px] text-[0.9rem] tracking-[0.05em] text-white/40 mt-8 mb-12 font-heading"
            >
                Trusted by top thought leaders and global brands.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <div className="w-px h-20 bg-gradient-to-b from-white/20 to-transparent" />
            </motion.div>
        </section>
    );
};

export default Hero;
