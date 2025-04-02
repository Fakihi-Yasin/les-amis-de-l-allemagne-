
"use client"

import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import SectionTitle from "../../components/SectionTitle.jsx";
import Button from "../../components/Button.jsx";


const Contact = () => {
    const { t } = useTranslation()
    const location = useLocation()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    // Extract query parameters
    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const activity = params.get("activity")
        const event = params.get("event")

        if (activity) {
            setFormData((prev) => ({
                ...prev,
                subject: `Inscription à l'activité: ${activity}`,
                message: `Je souhaite m'inscrire à l'activité ${activity}.`,
            }))
        } else if (event) {
            setFormData((prev) => ({
                ...prev,
                subject: `Inscription à l'événement: ${event}`,
                message: `Je souhaite m'inscrire à l'événement ${event}.`,
            }))
        }
    }, [location])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would normally send the form data to your backend
        alert("Formulaire envoyé avec succès!")
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        })
    }

    return (
        <motion.div
            className="page contact-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="page-header">
                <h1>{t("nav.contact")}</h1>
                <div className="header-underline">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
            </section>

            <section className="contact-section">
                <div className="section-container">
                    <div className="contact-grid">
                        <motion.div
                            className="contact-info"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle title={t("contact.title")} />

                            <div className="info-item">
                                <i className="fas fa-map-marker-alt"></i>
                                <div>
                                    <h3>Adresse</h3>
                                    <p>123 Avenue Mohammed V, Guéliz</p>
                                    <p>40000 Marrakech, Maroc</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="fas fa-phone-alt"></i>
                                <div>
                                    <h3>Téléphone</h3>
                                    <p>+212 5 24 XX XX XX</p>
                                    <p>+212 6 XX XX XX XX</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="fas fa-envelope"></i>
                                <div>
                                    <h3>Email</h3>
                                    <p>contact@amisallemagne.org</p>
                                    <p>info@amisallemagne.org</p>
                                </div>
                            </div>

                            <div className="info-item">
                                <i className="fas fa-clock"></i>
                                <div>
                                    <h3>Heures d'ouverture</h3>
                                    <p>Lundi - Vendredi: 9h00 - 17h00</p>
                                    <p>Samedi: 9h00 - 13h00</p>
                                </div>
                            </div>

                            <div className="social-links">
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
                        </motion.div>

                        <motion.div
                            className="contact-form"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">{t("contact.form.name")}</label>
                                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">{t("contact.form.email")}</label>
                                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Sujet</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">{t("contact.form.message")}</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>

                                <button type="submit" className="button primary">
                                    {t("contact.form.submit")}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="membership-section">
                <div className="section-container">
                    <SectionTitle
                        title={t("contact.membership.title")}
                        subtitle={t("contact.membership.description")}
                        centered={true}
                    />

                    <div className="membership-options">
                        <motion.div
                            className="membership-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="card-header">
                                <h3>Membre Étudiant</h3>
                                <div className="price">
                                    200 MAD<span>/an</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i> Accès aux cours d'allemand (tarif réduit)
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Participation aux événements culturels
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Accès à la bibliothèque
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Newsletter mensuelle
                                    </li>
                                </ul>
                                <Button to="/contact?membership=student" primary>
                                    S'inscrire
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="membership-card featured"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="card-header">
                                <h3>Membre Régulier</h3>
                                <div className="price">
                                    500 MAD<span>/an</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i> Accès aux cours d'allemand (tarif réduit)
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Participation aux événements culturels
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Accès à la bibliothèque
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Newsletter mensuelle
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Invitation aux événements exclusifs
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Réductions sur les voyages culturels
                                    </li>
                                </ul>
                                <Button to="/contact?membership=regular" primary>
                                    S'inscrire
                                </Button>
                            </div>
                        </motion.div>

                        <motion.div
                            className="membership-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                        >
                            <div className="card-header">
                                <h3>Membre Bienfaiteur</h3>
                                <div className="price">
                                    1000 MAD<span>/an</span>
                                </div>
                            </div>
                            <div className="card-body">
                                <ul>
                                    <li>
                                        <i className="fas fa-check"></i> Tous les avantages du membre régulier
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Mention sur notre site web
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Accès VIP aux événements
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Invitation aux dîners annuels
                                    </li>
                                    <li>
                                        <i className="fas fa-check"></i> Certificat de reconnaissance
                                    </li>
                                </ul>
                                <Button to="/contact?membership=benefactor" primary>
                                    S'inscrire
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="donate-section">
                <div className="section-container">
                    <div className="donate-content">
                        <motion.div
                            className="donate-text"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <SectionTitle title={t("contact.donate.title")} />
                            <p>
                                Votre don nous aide à continuer notre mission de promotion des échanges culturels entre le Maroc et
                                l'Allemagne. Les fonds collectés sont utilisés pour organiser des événements culturels, offrir des
                                bourses d'études et améliorer nos installations.
                            </p>
                            <p>Tous les dons sont déductibles d'impôts selon la législation marocaine en vigueur.</p>
                            <Button to="/contact?donate=true" primary>
                                {t("contact.donate.button")}
                            </Button>
                        </motion.div>

                        <motion.div
                            className="donate-image"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img src="/images/donate-image.jpg" alt="Faire un don" />
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Contact

