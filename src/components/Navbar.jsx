"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {motion} from "framer-motion"

const Navbar = () => {
    const { t, i18n } = useTranslation()
    const location = useLocation()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        localStorage.setItem("i18nextLng", lng)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    useEffect(() => {
        setIsOpen(false)
    }, [location])

    const navLinks = [
        { name: t("nav.home"), path: "/" },
        { name: t("nav.about"), path: "/about" },
        { name: t("nav.activities"), path: "/activities" },
        { name: t("nav.news"), path: "/news" },
        { name: t("nav.partnerships"), path: "/partnerships" },
        { name: t("nav.gallery"), path: "/gallery" },
        { name: t("nav.testimonials"), path: "/testimonials" },
        { name: t("nav.contact"), path: "/contact" },
    ]

    return (
        <motion.nav
            className={`navbar ${scrolled ? "scrolled" : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <div className="logo-flag">
                        <div className="black"></div>
                        <div className="red"></div>
                        <div className="gold"></div>
                    </div>
                    <span>Les Amis de L'Allemagne</span>
                </Link>

                <div className="nav-right">
                    <div className={`nav-links ${isOpen ? "active" : ""}`}>
                        {navLinks.map((link, index) => (
                            <Link key={index} to={link.path} className={location.pathname === link.path ? "active" : ""}>
                                {link.name}
                            </Link>
                        ))}

                        <div className="language-switcher">
                            <button onClick={() => changeLanguage("fr")} className={i18n.language === "fr" ? "active" : ""}>
                                FR
                            </button>
                            <button onClick={() => changeLanguage("de")} className={i18n.language === "de" ? "active" : ""}>
                                DE
                            </button>
                            <button onClick={() => changeLanguage("en")} className={i18n.language === "en" ? "active" : ""}>
                                EN
                            </button>
                        </div>
                    </div>

                    <button className={`hamburger ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar

