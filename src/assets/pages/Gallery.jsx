"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import SectionTitle from "../../components/SectionTitle.jsx";

const Gallery = () => {
    const { t } = useTranslation()
    const [selectedImage, setSelectedImage] = useState(null)
    const [filter, setFilter] = useState("all")

    const galleryItems = [
        {
            id: 1,
            image: "/images/gallery-1.jpg",
            title: "Festival du Film Allemand 2023",
            category: "cultural",
        },
        {
            id: 2,
            image: "/images/gallery-2.jpg",
            title: "Cours d'allemand pour débutants",
            category: "language",
        },
        {
            id: 3,
            image: "/images/gallery-3.jpg",
            title: "Visite de l'Ambassadeur d'Allemagne",
            category: "official",
        },
        {
            id: 4,
            image: "/images/gallery-4.jpg",
            title: "Forum économique Maroc-Allemagne",
            category: "economic",
        },
        {
            id: 5,
            image: "/images/gallery-5.jpg",
            title: "Exposition d'art contemporain allemand",
            category: "cultural",
        },
        {
            id: 6,
            image: "/images/gallery-6.jpg",
            title: "Atelier sur les études en Allemagne",
            category: "education",
        },
        {
            id: 7,
            image: "/images/gallery-7.jpg",
            title: "Célébration de la fête nationale allemande",
            category: "cultural",
        },
        {
            id: 8,
            image: "/images/gallery-8.jpg",
            title: "Rencontre avec des entrepreneurs allemands",
            category: "economic",
        },
        {
            id: 9,
            image: "/images/gallery-9.jpg",
            title: "Cours avancé d'allemand",
            category: "language",
        },
        {
            id: 10,
            image: "/images/gallery-10.jpg",
            title: "Signature de partenariat avec l'Université de Berlin",
            category: "education",
        },
        {
            id: 11,
            image: "/images/gallery-11.jpg",
            title: "Conférence sur la culture allemande",
            category: "cultural",
        },
        {
            id: 12,
            image: "/images/gallery-12.jpg",
            title: "Remise des certificats de langue",
            category: "language",
        },
    ]

    const filteredItems = filter === "all" ? galleryItems : galleryItems.filter((item) => item.category === filter)

    return (
        <motion.div
            className="page gallery-page"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <section className="page-header">
                <h1>{t("gallery.title")}</h1>
                <div className="header-underline">
                    <div className="black"></div>
                    <div className="red"></div>
                    <div className="gold"></div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="section-container">
                    <div className="gallery-filters">
                        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>
                            Tous
                        </button>
                        <button className={filter === "cultural" ? "active" : ""} onClick={() => setFilter("cultural")}>
                            Événements Culturels
                        </button>
                        <button className={filter === "language" ? "active" : ""} onClick={() => setFilter("language")}>
                            Cours de Langue
                        </button>
                        <button className={filter === "education" ? "active" : ""} onClick={() => setFilter("education")}>
                            Éducation
                        </button>
                        <button className={filter === "economic" ? "active" : ""} onClick={() => setFilter("economic")}>
                            Économie
                        </button>
                        <button className={filter === "official" ? "active" : ""} onClick={() => setFilter("official")}>
                            Visites Officielles
                        </button>
                    </div>

                    <motion.div className="gallery-grid" layout>
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    className="gallery-item"
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    transition={{ duration: 0.5 }}
                                    onClick={() => setSelectedImage(item)}
                                    whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                                >
                                    <img src={item.image || "/placeholder.svg"} alt={item.title} />
                                    <div className="gallery-item-overlay">
                                        <h3>{item.title}</h3>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="lightbox-content"
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="close-lightbox" onClick={() => setSelectedImage(null)}>
                                &times;
                            </button>
                            <img src={selectedImage.image || "/placeholder.svg"} alt={selectedImage.title} />
                            <h3>{selectedImage.title}</h3>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <section className="video-gallery">
                <div className="section-container">
                    <SectionTitle title="Vidéos" subtitle="Découvrez nos événements en vidéo" centered={true} />

                    <div className="video-grid">
                        <motion.div
                            className="video-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="video-thumbnail">
                                <img src="/images/video-1.jpg" alt="Interview avec l'Ambassadeur" />
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <h3>Interview avec l'Ambassadeur d'Allemagne</h3>
                        </motion.div>

                        <motion.div
                            className="video-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="video-thumbnail">
                                <img src="/images/video-2.jpg" alt="Festival du Film Allemand" />
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <h3>Highlights du Festival du Film Allemand 2023</h3>
                        </motion.div>

                        <motion.div
                            className="video-item"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                        >
                            <div className="video-thumbnail">
                                <img src="/images/video-3.jpg" alt="Témoignages d'étudiants" />
                                <div className="play-button">
                                    <i className="fas fa-play"></i>
                                </div>
                            </div>
                            <h3>Témoignages d'étudiants marocains en Allemagne</h3>
                        </motion.div>
                    </div>
                </div>
            </section>
        </motion.div>
    )
}

export default Gallery

