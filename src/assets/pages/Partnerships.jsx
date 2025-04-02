"use client"

import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import SectionTitle from "../../components/SectionTitle"
import Button from "../../components/Button"

const Partnerships = () => {
    const { t } = useTranslation()

    const partners = [
        {
            category: "Institutions",
            items: [
                {
                    name: "Ambassade d'Allemagne au Maroc",
                    logo: "/images/partner-embassy.jpg",
                    description: "Représentation diplomatique de l'Allemagne au Maroc.",
                },
                {
                    name: "Goethe-Institut",
                    logo: "/images/partner-goethe.jpg",
                    description: "Institut culturel de la République fédérale d'Allemagne.",
                },
                {
                    name: "DAAD",
                    logo: "/images/partner-daad.jpg",
                    description: "Office allemand d'échanges universitaires.",
                },
                {
                    name: "Chambre Allemande de Commerce et d'Industrie au Maroc",
                    logo: "/images/partner-chamber.jpg",
                    description: "Représentation des intérêts économiques allemands au Maroc.",
                },
            ],
        },
        {
            category: "Universités et Écoles",
            items: [
                {
                    name: "Université de Berlin",
                    logo: "/images/partner-berlin-uni.jpg",
                    description: "Partenariat pour les échanges d'étudiants et de professeurs.",
                },
                {
                    name: "Université de Munich",
                    logo: "/images/partner-munich-uni.jpg",
                    description: "Collaboration sur des projets de recherche communs.",
                },
                {
                    name: "Université Cadi Ayyad de Marrakech",
                    logo: "/images/partner-cadi-ayyad.jpg",
                    description: "Partenaire local pour les programmes d'échange.",
                },
                {
                    name: "École Supérieure de Technologie de Marrakech",
                    logo: "/images/partner-est.jpg",
                    description: "Collaboration pour la formation technique.",
                },
            ],
        },
        {
            category: "Entreprises",
            items: [
                {
                    name: "Siemens Maroc",
                    logo: "/images/partner-siemens.jpg",
                    description: "Partenaire pour les stages et l'insertion professionnelle.",
                },
                {
                    name: "Bosch Maroc",
                    logo: "/images/partner-bosch.jpg",
                    description: "Soutien aux programmes de formation technique.",
                },
                {
                    name: "Deutsche Bank Maroc",
                    logo: "/images/partner-deutsche-bank.jpg",
                    description: "Partenaire financier pour nos événements.",
                },
                {
                    name: "Volkswagen Maroc",
                    logo: "/images/partner-volkswagen.jpg",
                    description: "Sponsor de nos activités culturelles.",
                },
            ],
        },
    ]

    return (
        <motion.div
            className="page partnerships-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="page-header">
                <h1>{t("partnerships.title")}</h1>
                <div className="header-underline">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
            </section>

            <section className="partnerships-intro">
                <div className="section-container">
                    <motion.div
                        className="intro-content"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p>
                            Notre association travaille en étroite collaboration avec diverses institutions, universités et
                            entreprises pour renforcer les liens entre le Maroc et l'Allemagne. Ces partenariats nous permettent
                            d'offrir des opportunités uniques à nos membres et de contribuer au développement des relations
                            bilatérales.
                        </p>
                    </motion.div>
                </div>
            </section>

            {partners.map((category, index) => (
                <section key={index} className={`partners-section ${index % 2 !== 0 ? "alternate" : ""}`}>
                    <div className="section-container">
                        <SectionTitle title={category.category} centered={true} />

                        <motion.div
                            className="partners-grid"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            {category.items.map((partner, partnerIndex) => (
                                <motion.div
                                    key={partnerIndex}
                                    className="partner-card"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: partnerIndex * 0.1 }}
                                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                >
                                    <div className="partner-logo">
                                        <img src={partner.logo || "/placeholder.svg"} alt={partner.name} />
                                    </div>
                                    <div className="partner-info">
                                        <h3>{partner.name}</h3>
                                        <p>{partner.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            ))}

            <section className="become-partner">
                <div className="section-container">
                    <motion.div
                        className="partner-cta"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2>Devenez notre partenaire</h2>
                        <p>
                            Vous souhaitez collaborer avec notre association pour promouvoir les échanges culturels, éducatifs ou
                            économiques entre le Maroc et l'Allemagne? Contactez-nous pour discuter des possibilités de partenariat.
                        </p>
                        <Button to="/contact?subject=partnership" primary>
                            Nous contacter
                        </Button>
                    </motion.div>
                </div>
            </section>
        </motion.div>
    )
}

export default Partnerships

