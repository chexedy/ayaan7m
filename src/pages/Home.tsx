import "./Home.css";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

export default function Home() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="home">
            <motion.h1
                initial={{ x: -80, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.8, ease: "easeOut" },
                }}
                className="header-one"
            >
                hi, i'm ayaan.
            </motion.h1>

            <motion.h2
                initial={{ x: -80, opacity: 0 }}
                animate={{
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
                }}
                className="header-two"
            >
                Currently doing CS @ Rutgers University-New Brunswick.
                I created this site to showcase the various projects I am working on.
            </motion.h2>

            <motion.a
                href="#about"
                onClick={() => setClicked(true)}
                initial={{ x: -80, opacity: 0 }}
                animate={clicked ? { x: "80vw", opacity: 0 } : { x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                whileHover={!clicked ? { scale: 1.08, x: 5 } : {}}
                whileTap={!clicked ? { scale: 0.95 } : {}}
            >
                Enter my site &nbsp; <FaArrowRight />
            </motion.a>
        </div>
    );
}
