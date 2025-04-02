"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import SectionTitle from "../../components/SectionTitle.jsx";
import Button from "../../components/Button.jsx";


const Activities = () => {
    const { t } = useTranslation()

    const activities = [
        {
            id: "language",
            title: t("activities.language.title"),
            content: t("activities.language.content"),
            image: "/images/language-courses.jpg",
            icon: "🇩🇪",
        },
        {
            id: "cultural",
            title: t("activities.cultural.title"),
            content: t("activities.cultural.content"),
            image: "/images/cultural-events.jpg",
            icon: "🎭",
        },
        {
            id: "education",
            title: t("activities.education.title"),
            content: t("activities.education.content"),
            image: "/images/educational-exchanges.jpg",
            icon: "🎓",
        },
        {
            id: "economic",
            title: t("activities.economic.title"),
            content: t("activities.economic.content"),
            image: "/images/economic-cooperation.jpg",
            icon: "💼",
        },
        {
            id: "support",
            title: t("activities.support.title"),
            content: t("activities.support.content"),
            image: "/images/support-services.jpg",
            icon: "🏡",
        },
    ]

    return (
        <motion.div
            className="page activities-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="page-header">
                <h1>{t("nav.activities")}</h1>
                <div className="header-underline">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
            </section>

            <section className="activities-list">
                {activities.map((activity, index) => (
                    <motion.div
                        key={activity.id}
                        className={`activity-item ${index % 2 !== 0 ? "reverse" : ""}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="activity-content">
                            <div className="activity-icon">{activity.icon}</div>
                            <h2>{activity.title}</h2>
                            <p>{activity.content}</p>
                            <Button to={`/contact?activity=${activity.id}`} primary>
                                S'inscrire
                            </Button>
                        </div>
                        <div className="activity-image">
                            <img src={activity.image || "/placeholder.svg"} alt={activity.title} />
                        </div>
                    </motion.div>
                ))}
            </section>

            <section className="upcoming-events">
                <div className="section-container">
                    <SectionTitle
                        title="Événements à venir"
                        subtitle="Rejoignez-nous pour nos prochains événements"
                        centered={true}
                    />

                    <div className="events-grid">
                        <motion.div
                            className="event-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="event-date">
                                <span className="day">15</span>
                                <span className="month">Juin</span>
                            </div>
                            <div className="event-details">
                                <h3>Festival du Film Allemand</h3>
                                <p className="event-location">
                                    <i className="fas fa-map-marker-alt"></i> Cinéma Colisée, Marrakech
                                </p>
                                <p className="event-time">
                                    <i className="far fa-clock"></i> 18:00 - 22:00
                                </p>
                                <p className="event-description">
                                    Projection de films allemands contemporains avec sous-titres en français et arabe.
                                </p>
                                <Button to="/contact?event=film-festival" className="small">
                                    S'inscrire
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="event-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="event-date">
                                <span className="day">22</span>
                                <span className="month">Juin</span>
                            </div>
                            <div className="event-details">
                                <h3>Atelier sur les études en Allemagne</h3>
                                <p className="event-location">
                                    <i className="fas fa-map-marker-alt"></i> Siège de l'Association, Marrakech
                                </p>
                                <p className="event-time">
                                    <i className="far fa-clock"></i> 14:00 - 17:00
                                </p>
                                <p className="event-description">
                                    Informations sur les bourses d'études et le processus d'admission dans les universités allemandes.
                                </p>
                                <Button to="/contact?event=study-workshop" className="small">
                                    S'inscrire
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="event-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="event-date">
                                <span className="day">30</span>
                                <span className="month">Juin</span>
                            </div>
                            <div className="event-details">
                                <h3>Forum économique Maroc-Allemagne</h3>
                                <p className="event-location">
                                    <i className="fas fa-map-marker-alt"></i> Hôtel Savoy, Marrakech
                                </p>
                                <p className="event-time">
                                    <i className="far fa-clock"></i> 09:00 - 17:00
                                </p>
                                <p className="event-description">
                                    Rencontre entre entrepreneurs marocains et allemands pour explorer des opportunités de collaboration.
                                </p>
                                <Button to="/contact?event=economic-forum" className="small">
                                    S'inscrire
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Activities

