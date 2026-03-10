"use client";

import { motion } from "framer-motion";

const About = () => {
    const details = [
        { title: "Founder", desc: "Visionary lead specialized in AI narrative generation." },
        { title: "Co-Founder", desc: "Technical pioneer in generative video architectures." },
    ];

    return (
        <section id="rve" className="container min-h-[60vh] flex flex-col justify-center">
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[0.7rem] tracking-[0.4em] text-secondary font-heading mb-4 block"
            >
                [ RVE DETAILS ]
            </motion.span>

            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading mb-16"
            >
                A NEW ERA OF <span className="text-secondary italic">CREATIVITY.</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {details.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="glass-card"
                    >
                        <h3 className="mb-4 text-white uppercase tracking-[0.2em]">{item.title}</h3>
                        <p className="text-secondary leading-relaxed">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default About;
