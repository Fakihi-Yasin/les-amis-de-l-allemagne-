"use client"

import { useTranslation } from "react-i18next"
import Button from "../../components/Button.jsx";
import SectionTitle from "../../components/SectionTitle.jsx";
import {motion} from "framer-motion"


const Home = () => {
    const { t } = useTranslation()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    }

    return (
        <motion.div
            className="page home-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="hero-section">
                <div className="hero-content">
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        {t("home.slogan")}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {t("home.intro")}
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Button to="/contact" primary>
                            {t("home.cta.member")}
                        </Button>
                        <Button to="/contact">{t("home.cta.donate")}</Button>
                        <Button to="/activities">{t("home.cta.register")}</Button>
                    </motion.div>
                </div>

                <motion.div
                    className="hero-image"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flag-overlay">
                        <div className="black"></div>
                        <div className="red"></div>
                        <div className="gold"></div>
                    </div>
                    <img src="/images/hero-image.jpg" alt="Morocco and Germany" />
                </motion.div>
            </section>

            <section className="activities-preview">
                <SectionTitle title={t("nav.activities")} subtitle="Découvrez nos principales activités" centered={true} />

                <motion.div
                    className="activities-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div className="activity-card" variants={itemVariants}>
                        <div className="activity-icon">🇩🇪</div>
                        <h3>{t("activities.language.title")}</h3>
                        <p>{t("activities.language.content")}</p>
                        <Button to="/activities" className="small">
                            En savoir plus
                        </Button>
                    </motion.div>

                    <motion.div className="activity-card" variants={itemVariants}>
                        <div className="activity-icon">🎭</div>
                        <h3>{t("activities.cultural.title")}</h3>
                        <p>{t("activities.cultural.content")}</p>
                        <Button to="/activities" className="small">
                            En savoir plus
                        </Button>
                    </motion.div>

                    <motion.div className="activity-card" variants={itemVariants}>
                        <div className="activity-icon">🎓</div>
                        <h3>{t("activities.education.title")}</h3>
                        <p>{t("activities.education.content")}</p>
                        <Button to="/activities" className="small">
                            En savoir plus
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="view-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <Button to="/activities" primary>
                        Voir toutes nos activités
                    </Button>
                </motion.div>
            </section>

            <section className="about-preview">
                <div className="about-content">
                    <SectionTitle title={t("nav.about")} subtitle="Qui sommes-nous?" />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {t("about.history.content")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Button to="/about" primary>
                            En savoir plus
                        </Button>
                    </motion.div>
                </div>

                <motion.div
                    className="about-image"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img src="/images/about-image.jpg" alt="About Us" />
                </motion.div>
            </section>

            <section className="cta-section">
                <motion.div
                    className="cta-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>Rejoignez-nous aujourd'hui</h2>
                    <p>Devenez membre de notre association et participez à nos activités</p>
                    <div className="cta-buttons">
                        <Button to="/contact" primary>
                            {t("home.cta.member")}
                        </Button>
                        <Button to="/contact">{t("home.cta.donate")}</Button>
                    </div>
                </motion.div>
            </section>
        </motion.div>
    )
}

export default Home

