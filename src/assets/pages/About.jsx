"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import SectionTitle from "../../components/SectionTitle.jsx";

const About = () => {
    const { t } = useTranslation()

    const teamMembers = [
        {
            name: "Sarah Müller",
            role: "Présidente",
            image: "/images/team-1.jpg",
            bio: "Professeure d'allemand et passionnée par les échanges culturels.",
        },
        {
            name: "Mohammed Alaoui",
            role: "Vice-Président",
            image: "/images/team-2.jpg",
            bio: "Entrepreneur ayant étudié en Allemagne pendant 5 ans.",
        },
        {
            name: "Hans Weber",
            role: "Secrétaire Général",
            image: "/images/team-3.jpg",
            bio: "Résident allemand au Maroc depuis 10 ans.",
        },
        {
            name: "Fatima Zahra",
            role: "Trésorière",
            image: "/images/team-4.jpg",
            bio: "Comptable avec une expérience dans les organisations à but non lucratif.",
        },
    ]

    return (
        <motion.div
            className="page about-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="page-header">
                <h1>{t("nav.about")}</h1>
                <div className="header-underline">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
            </section>

            <section className="history-section">
                <div className="section-container">
                    <SectionTitle title={t("about.history.title")} />

                    <div className="history-content">
                        <motion.div
                            className="history-text"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p>
                                L'Association des Amis de l'Allemagne a été fondée en 2010 par un groupe de passionnés de la culture
                                allemande et de Marocains ayant étudié ou travaillé en Allemagne. Notre objectif initial était de créer
                                un espace d'échange et de partage pour maintenir les liens avec l'Allemagne.
                            </p>
                            <p>
                                Au fil des années, notre association s'est développée pour devenir un acteur important dans le
                                renforcement des relations maroco-allemandes à Marrakech et dans tout le Maroc.
                            </p>
                            <p>
                                Les relations entre le Maroc et l'Allemagne remontent à plusieurs siècles, avec des échanges
                                diplomatiques, commerciaux et culturels qui ont enrichi les deux nations. Notre association s'inscrit
                                dans cette longue tradition d'amitié et de coopération.
                            </p>
                        </motion.div>

                        <motion.div
                            className="history-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/history-image.jpg" alt="History" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="mission-section">
                <div className="section-container">
                    <SectionTitle title={t("about.mission.title")} />

                    <div className="mission-content">
                        <motion.div
                            className="mission-image"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/mission-image.jpg" alt="Mission" />
                        </motion.div>

                        <motion.div
                            className="mission-text"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3>Notre Mission</h3>
                            <p>{t("about.mission.mission")}</p>

                            <h3>Nos Valeurs</h3>
                            <ul className="values-list">
                                <li>
                                    <span className="value-name">Partage</span>
                                    <p>Nous croyons en l'échange de connaissances, d'expériences et de cultures.</p>
                                </li>
                                <li>
                                    <span className="value-name">Respect</span>
                                    <p>Nous valorisons la diversité et le respect mutuel entre les cultures.</p>
                                </li>
                                <li>
                                    <span className="value-name">Diversité</span>
                                    <p>Nous célébrons la richesse des différences culturelles.</p>
                                </li>
                                <li>
                                    <span className="value-name">Innovation</span>
                                    <p>Nous encourageons les nouvelles idées et approches.</p>
                                </li>
                                <li>
                                    <span className="value-name">Coopération</span>
                                    <p>Nous travaillons ensemble pour atteindre des objectifs communs.</p>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="team-section">
                <div className="section-container">
                    <SectionTitle title={t("about.team.title")} subtitle={t("about.team.description")} centered={true} />

                    <motion.div
                        className="team-grid"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="team-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="member-image">
                                    <img src={member.image || "/placeholder.svg"} alt={member.name} />
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <span className="member-role">{member.role}</span>
                                    <p>{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="partners-section"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h3>Nos Partenaires Institutionnels</h3>
                        <div className="partners-grid">
                            <div className="partner-logo">
                                <img src="/images/partner-1.jpg" alt="Goethe Institut" />
                            </div>
                            <div className="partner-logo">
                                <img src="/images/partner-2.jpg" alt="DAAD" />
                            </div>
                            <div className="partner-logo">
                                <img src="/images/partner-3.jpg" alt="Ambassade d'Allemagne" />
                            </div>
                            <div className="partner-logo">
                                <img src="/images/partner-4.jpg" alt="Chambre Allemande de Commerce" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default About

