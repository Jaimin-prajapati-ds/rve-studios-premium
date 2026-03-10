"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const WorkShowcase = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="our-work" className="container bg-white/[0.02] py-32">
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[0.7rem] tracking-[0.4em] text-secondary font-heading mb-4 block"
            >
                [ OUR WORK ]
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading mb-16"
            >
                SOUND EFFECTS & <span className="text-secondary italic">AI VISUALS.</span>
            </motion.h2>

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative group cursor-none h-[500px] rounded-3xl overflow-hidden glass-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Placeholder for AI Showcase */}
                <div className="absolute inset-0 flex">
                    <div className="flex-1 bg-zinc-900 border-r border-white/10 flex items-center justify-center">
                        <span className="text-[0.6rem] tracking-[0.5em] text-white/30 font-heading">RAW CONCEPT</span>
                    </div>
                    <motion.div
                        animate={{ width: isHovered ? "100%" : "50%" }}
                        className="absolute right-0 top-0 bottom-0 bg-zinc-800 border-l border-white/20 overflow-hidden flex items-center justify-center"
                    >
                        <span className="text-[0.6rem] tracking-[0.5em] text-white/80 font-heading whitespace-nowrap">AI GENERATED MATERPIECE</span>
                    </motion.div>
                </div>

                {/* Custom Cursor Overlay */}
                <motion.div
                    animate={{
                        x: isHovered ? "50%" : "0%",
                        opacity: isHovered ? 1 : 0.5
                    }}
                    className="absolute top-0 bottom-0 w-px bg-white z-20 flex items-center justify-center"
                    style={{ left: '50%' }}
                >
                    <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-black/50 backdrop-blur-md">
                        <span className="text-[0.5rem] font-heading">SLIDE</span>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default WorkShowcase;
