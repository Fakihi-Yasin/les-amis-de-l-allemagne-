"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import SectionTitle from "../../components/SectionTitle"

const Testimonials = () => {
    const { t } = useTranslation()

    const testimonials = [
        {
            id: 1,
            name: "Fatima Zahra",
            role: "Étudiante en médecine à Berlin",
            image: "/images/testimonial-1.jpg",
            quote:
                "Grâce aux cours d'allemand et à l'aide de l'Association des Amis de l'Allemagne, j'ai pu obtenir une bourse pour étudier la médecine à Berlin. Cette expérience a changé ma vie et m'a ouvert de nombreuses portes.",
            category: "education",
        },
        {
            id: 2,
            name: "Mohammed Alami",
            role: "Entrepreneur",
            image: "/images/testimonial-2.jpg",
            quote:
                "Le forum économique organisé par l'association m'a permis de rencontrer des partenaires allemands et de développer mon entreprise à l'international. Je suis reconnaissant pour cette opportunité unique.",
            category: "economic",
        },
        {
            id: 3,
            name: "Sophie Müller",
            role: "Professeure d'arabe à Marrakech",
            image: "/images/testimonial-3.jpg",
            quote:
                "En tant qu'Allemande vivant au Maroc, l'association m'a aidée à m'intégrer et à comprendre la culture marocaine. J'ai également pu partager ma culture avec les membres de l'association.",
            category: "cultural",
        },
        {
            id: 4,
            name: "Youssef Benali",
            role: "Étudiant en ingénierie à Munich",
            image: "/images/testimonial-4.jpg",
            quote:
                "Les ateliers sur les études en Allemagne m'ont fourni toutes les informations nécessaires pour préparer mon dossier de candidature. Aujourd'hui, je suis en master à l'Université Technique de Munich.",
            category: "education",
        },
        {
            id: 5,
            name: "Karima Tazi",
            role: "Participante aux cours d'allemand",
            image: "/images/testimonial-5.jpg",
            quote:
                "Les cours d'allemand de l'association sont excellents. Les professeurs sont compétents et l'ambiance est très conviviale. J'ai progressé rapidement et j'ai pu obtenir mon certificat B1.",
            category: "language",
        },
        {
            id: 6,
            name: "Hans Weber",
            role: "Homme d'affaires allemand",
            image: "/images/testimonial-6.jpg",
            quote:
                "L'association m'a aidé à comprendre le marché marocain et à établir des contacts précieux. Grâce à leur soutien, j'ai pu lancer ma société à Marrakech avec succès.",
            category: "economic",
        },
    ]

    return (
        <motion.div
            className="page testimonials-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="page-header">
                <h1>{t("testimonials.title")}</h1>
                <div className="header-underline">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
            </section>

            <section className="testimonials-intro">
                <div className="section-container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            Découvrez les témoignages de personnes qui ont bénéficié des activités et du soutien de notre association.
                            Ces histoires illustrent l'impact concret de notre travail sur la vie des individus et sur les relations
                            maroco-allemandes.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="featured-testimonial">
                <div className="section-container">
                    <motion.div
                        className="featured-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="featured-image">
                            <img src="/images/featured-testimonial.jpg" alt="Témoignage à la une" />
                        </div>
                        <div className="featured-text">
                            <div className="quote-icon">
                                <i className="fas fa-quote-left"></i>
                            </div>
                            <blockquote>
                                Mon parcours avec l'Association des Amis de l'Allemagne a commencé il y a cinq ans lorsque j'ai rejoint
                                leurs cours d'allemand. Aujourd'hui, je suis chercheur à l'Université de Heidelberg et je continue à
                                collaborer avec l'association pour aider d'autres jeunes Marocains à réaliser leurs rêves.
                            </blockquote>
                            <div className="testimonial-author">
                                <div className="author-image">
                                    <img src="/images/featured-author.jpg" alt="Ahmed Lahlou" />
                                </div>
                                <div className="author-info">
                                    <h3>Ahmed Lahlou</h3>
                                    <span>Chercheur en physique, Université de Heidelberg</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="testimonials-grid-section">
                <div className="section-container">
                    <SectionTitle
                        title="Ils témoignent"
                        subtitle="Découvrez les expériences de nos membres et participants"
                        centered={true}
                    />

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                className="testimonial-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="testimonial-content">
                                    <div className="quote-icon">
                                        <i className="fas fa-quote-left"></i>
                                    </div>
                                    <blockquote>{testimonial.quote}</blockquote>
                                    <div className="testimonial-category">
                                        {testimonial.category === "education" && "Éducation"}
                                        {testimonial.category === "economic" && "Économie"}
                                        {testimonial.category === "cultural" && "Culture"}
                                        {testimonial.category === "language" && "Langue"}
                                    </div>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-image">
                                        <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                                    </div>
                                    <div className="author-info">
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="video-testimonials">
                <div className="section-container">
                    <SectionTitle
                        title="Témoignages vidéo"
                        subtitle="Écoutez directement nos membres partager leur expérience"
                        centered={true}
                    />

                    <div className="video-grid">
                        <motion.div
                            className="video-testimonial"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="video-thumbnail">
                                <img src="/images/video-testimonial-1.jpg" alt="Témoignage vidéo" />
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <h3>L'expérience de Samir à l'Université de Berlin</h3>
                        </motion.div>

                        <motion.div
                            className="video-testimonial"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="video-thumbnail">
                                <img src="/images/video-testimonial-2.jpg" alt="Témoignage vidéo" />
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <h3>Comment Leila a créé son entreprise grâce au forum économique</h3>
                        </motion.div>

                        <motion.div
                            className="video-testimonial"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="video-thumbnail">
                                <img src="/images/video-testimonial-3.jpg" alt="Témoignage vidéo" />
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <h3>La famille Schmidt raconte son intégration au Maroc</h3>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="share-testimonial">
                <div className="section-container">
                    <motion.div
                        className="share-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Partagez votre expérience</h2>
                        <p>
                            Vous avez participé à nos activités ou bénéficié de notre soutien? Nous serions ravis d'entendre votre
                            histoire. Partagez votre témoignage et inspirez d'autres personnes à rejoindre notre communauté.
                        </p>
                        <button className="button primary">Partager mon témoignage</button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default Testimonials

