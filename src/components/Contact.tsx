"use client";

import { motion } from "framer-motion";

const Contact = () => {
    return (
        <section id="contact" className="container py-32 flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full max-w-4xl glass-card text-center p-20"
            >
                <span className="text-[0.7rem] tracking-[0.4em] text-secondary font-heading mb-6 block">
                    [ CONNECT WITH US ]
                </span>
                <h2 className="font-heading mb-8">READY TO START YOUR <br /> <span className="text-accent">DREAM PROJECT?</span></h2>

                <p className="text-secondary mb-12 max-w-xl mx-auto">
                    We&apos;re looking for visionary brands to partner with. Drop us a line and let&apos;s create something extraordinary.
                </p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:contact@rve.studios"
                    className="inline-block px-12 py-5 bg-white text-black font-heading text-sm tracking-widest rounded-full hover:bg-accent transition-colors duration-500"
                >
                    SEND AN EMAIL
                </motion.a>
            </motion.div>

            <footer className="mt-32 w-full flex flex-col md:flex-row justify-between items-center text-[0.6rem] tracking-[0.2em] text-white/30 font-heading">
                <div>© 2026 RVE STUDIOS. ALL RIGHTS RESERVED.</div>
                <div className="flex gap-10 mt-6 md:mt-0">
                    <span className="hover:text-white cursor-pointer transition-colors">INSTAGRAM</span>
                    <span className="hover:text-white cursor-pointer transition-colors">TWITTER (X)</span>
                    <span className="hover:text-white cursor-pointer transition-colors">LINKEDIN</span>
                </div>
            </footer>
        </section>
    );
};

export default Contact;
