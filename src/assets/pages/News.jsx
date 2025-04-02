"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import SectionTitle from "../../components/SectionTitle"
import Button from "../../components/Button"

const News = () => {
    const { t } = useTranslation()

    const newsArticles = [
        {
            id: 1,
            title: "Signature d'un partenariat avec l'Université de Berlin",
            excerpt:
                "Notre association a signé un accord de partenariat avec l'Université de Berlin pour faciliter les échanges d'étudiants.",
            date: "15 Mai 2023",
            image: "/images/news-1.jpg",
            category: "Éducation",
        },
        {
            id: 2,
            title: "Succès du Festival du Film Allemand à Marrakech",
            excerpt:
                "Plus de 500 personnes ont assisté à notre festival du film allemand qui s'est tenu la semaine dernière à Marrakech.",
            date: "2 Mai 2023",
            image: "/images/news-2.jpg",
            category: "Culture",
        },
        {
            id: 3,
            title: "Lancement des nouveaux cours d'allemand en ligne",
            excerpt:
                "Notre association lance une nouvelle plateforme de cours d'allemand en ligne pour atteindre un public plus large.",
            date: "20 Avril 2023",
            image: "/images/news-3.jpg",
            category: "Éducation",
        },
        {
            id: 4,
            title: "Forum économique Maroc-Allemagne : un succès retentissant",
            excerpt:
                "Le forum économique organisé par notre association a réuni plus de 50 entreprises marocaines et allemandes.",
            date: "10 Avril 2023",
            image: "/images/news-4.jpg",
            category: "Économie",
        },
        {
            id: 5,
            title: "Visite de l'Ambassadeur d'Allemagne à notre siège",
            excerpt: "L'Ambassadeur d'Allemagne au Maroc a visité notre siège et a salué le travail de notre association.",
            date: "1 Avril 2023",
            image: "/images/news-5.jpg",
            category: "Diplomatie",
        },
        {
            id: 6,
            title: "Témoignage : Mon expérience d'études en Allemagne",
            excerpt: "Fatima, une étudiante marocaine, partage son expérience d'études à l'Université de Munich.",
            date: "25 Mars 2023",
            image: "/images/news-6.jpg",
            category: "Témoignage",
        },
    ]

    return (
        <motion.div
            className="page news-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="page-header">
                <h1>{t("news.title")}</h1>
                <div className="header-underline">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
            </section>

            <section className="news-section">
                <div className="section-container">
                    <div className="news-grid">
                        {newsArticles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                className="news-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            >
                                <div className="news-image">
                                    <img src={article.image || "/placeholder.svg"} alt={article.title} />
                                    <div className="news-category">{article.category}</div>
                                </div>
                                <div className="news-content">
                                    <span className="news-date">{article.date}</span>
                                    <h3>{article.title}</h3>
                                    <p>{article.excerpt}</p>
                                    <Button to={`/news/${article.id}`} className="small">
                                        Lire la suite
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pagination">
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>
            </section>

            <section className="newsletter-section">
                <div className="section-container">
                    <motion.div
                        className="newsletter-content"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <SectionTitle
                            title="Abonnez-vous à notre newsletter"
                            subtitle="Recevez nos dernières actualités et événements directement dans votre boîte mail"
                            centered={true}
                        />

                        <form className="newsletter-form">
                            <input type="email" placeholder="Votre adresse email" required />
                            <button type="submit" className="button primary">
                                S'abonner
                            </button>
                        </form>

                        <p className="privacy-note">
                            En vous inscrivant, vous acceptez notre <a href="/privacy">politique de confidentialité</a>.
                        </p>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default News

