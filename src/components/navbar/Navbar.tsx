import "./Navbar.css";
import { useTheme } from "../../context/ThemeContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdLightMode, MdDarkMode } from "react-icons/md"


export default function Navbar() {
    const { theme, toggleTheme } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-socials">
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://github.com/chexedy" target="_blank">
                    <FaGithub color="white" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://www.linkedin.com/in/ayaan7m/" target="_blank">
                    <FaLinkedin color="white" />
                </motion.a>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="https://www.instagram.com/ayaan7m/" target="_blank">
                    <FaInstagram color="white" />
                </motion.a>

                <motion.button whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} onClick={toggleTheme}>
                    {theme === "light" ? <MdLightMode color="white" /> : <MdDarkMode color="white" />}
                </motion.button>

                <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes size={22} color="white" /> : <FaBars size={22} color="white" />}
                </button>
            </div>

            <div className="navbar-links desktop">
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="#home">home</motion.a>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="#about">about</motion.a>
                <motion.a whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.95 }} href="#projects">projects</motion.a>
            </div>

            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "tween", duration: 0.35 }}
                    >
                        <a href="#home" onClick={() => setMenuOpen(false)}>home</a>
                        <a href="#about" onClick={() => setMenuOpen(false)}>about</a>
                        <a href="#projects" onClick={() => setMenuOpen(false)}>projects</a>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

    )
}