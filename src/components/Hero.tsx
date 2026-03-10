"use client";

import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
            {/* Background Ambient Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-4"
            >
                <span className="text-[0.8rem] tracking-[0.3em] text-secondary font-heading px-4 py-1 border border-white/10 rounded-full bg-white/5">
                    [ A PREMIUM AI CONTENT AGENCY ]
                </span>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading leading-tight"
            >
                RVE <span className="text-secondary">STUDIOS</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="max-w-[600px] text-lg text-secondary mb-10"
            >
                We pioneer cinematic AI video and image generation, delivering bespoke visual narratives for the world&apos;s most innovative brands.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
            >
                <a
                    href="#work"
                    className="group relative px-10 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all duration-500 hover:border-white"
                >
                    <span className="relative z-10 font-heading text-sm tracking-widest group-hover:text-black transition-colors duration-500">
                        EXPLORE THE FUTURE
                    </span>
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;
