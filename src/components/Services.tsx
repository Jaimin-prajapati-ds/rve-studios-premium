"use client";

import { motion } from "framer-motion";

const Services = () => {
    const services = [
        { title: "EDITING", tag: "Post-Production", desc: "Premium editing for cinematic narratives and high-end brand content." },
        { title: "MANAGE", tag: "Strategy", desc: "Comprehensive management of bespoke content workflows and creative consistency." },
        { title: "PR", tag: "Visibility", desc: "Bespoke public relations and identity building for the modern digital era." },
    ];

    return (
        <section id="services" className="container min-h-screen flex flex-col justify-center">
            <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[0.7rem] tracking-[0.4em] text-secondary font-heading mb-4 block"
            >
                [ OUR SERVICES ]
            </motion.span>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="group glass-card flex flex-col justify-between min-h-[400px]"
                    >
                        <div>
                            <span className="text-[0.6rem] tracking-[0.2em] text-accent mb-2 block uppercase">{service.tag}</span>
                            <h3 className="text-3xl font-heading mb-6 group-hover:text-accent transition-colors duration-500">{service.title}</h3>
                            <p className="text-secondary text-sm leading-[1.8] group-hover:text-white transition-colors duration-500">{service.desc}</p>
                        </div>

                        <motion.div
                            whileHover={{ x: 10 }}
                            className="pt-10 flex items-center gap-4 cursor-pointer"
                        >
                            <span className="text-[0.6rem] tracking-[0.3em] font-heading">LEARN MORE</span>
                            <div className="w-10 h-px bg-white/30 group-hover:bg-accent group-hover:w-16 transition-all duration-500" />
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
