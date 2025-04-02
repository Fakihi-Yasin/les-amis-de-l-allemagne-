"use client"

import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import {motion} from "framer-motion"

const Footer = () => {
    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-logo">
                        <Link to="/" className="logo">
                            <div className="logo-flag">
                                <div className="black"></div>
                                <div className="red"></div>
                                <div className="gold"></div>
                            </div>
                            <span>Les Amis de L'Allemagne</span>
                        </Link>
                        <p>Association à but non lucratif basée à Marrakech</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>{t("nav.about")}</h4>
                            <Link to="/about">{t("about.history.title")}</Link>
                            <Link to="/about">{t("about.mission.title")}</Link>
                            <Link to="/about">{t("about.team.title")}</Link>
                        </div>

                        <div className="footer-column">
                            <h4>{t("nav.activities")}</h4>
                            <Link to="/activities">{t("activities.language.title")}</Link>
                            <Link to="/activities">{t("activities.cultural.title")}</Link>
                            <Link to="/activities">{t("activities.education.title")}</Link>
                        </div>

                        <div className="footer-column">
                            <h4>{t("nav.contact")}</h4>
                            <Link to="/contact">{t("contact.title")}</Link>
                            <Link to="/contact">{t("contact.membership.title")}</Link>
                            <Link to="/contact">{t("contact.donate.title")}</Link>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-social">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp"></i>
                        </a>
                    </div>

                    <div className="footer-legal">
                        <Link to="/legal">{t("footer.legal")}</Link>
                        <Link to="/privacy">{t("footer.privacy")}</Link>
                        <Link to="/sitemap">{t("footer.sitemap")}</Link>
                    </div>

                    <p className="copyright">© {currentYear} Les Amis de L'Allemagne</p>
                </div>
            </div>

            <motion.div
                className="footer-flag"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1 }}
            >
                <div className="black"></div>
                <div className="red"></div>
                <div className="gold"></div>
            </motion.div>
        </footer>
    )
}

export default Footer

