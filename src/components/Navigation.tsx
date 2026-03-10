"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[1200px] flex items-center justify-between px-6 py-3 rounded-full border border-white/10 glass-container ${scrolled ? "bg-black/60 shadow-2xl" : "bg-black/20"
                }`}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                backdropFilter: 'blur(25px) saturate(180%)',
                WebkitBackdropFilter: 'blur(25px) saturate(180%)'
            }}
        >
            <div className="text-xl font-bold tracking-widest font-heading">
                RVE STUDIOS
            </div>

            <div className="flex items-center gap-2">
                {["RVE", "OUR WORK", "SERVICES"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase().replace(" ", "-")}`}
                        className="px-5 py-2 text-[0.7rem] tracking-widest hover:bg-white/5 rounded-full transition-all duration-300 font-heading"
                    >
                        {item}
                    </Link>
                ))}
                <Link
                    href="#contact"
                    className="px-6 py-2 text-[0.7rem] tracking-widest bg-white/10 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-heading"
                >
                    CONTACT US
                </Link>
            </div>
        </motion.nav>
    );
};

export default Navigation;
