"use client"

import { motion } from "framer-motion"

const SectionTitle = ({ title, subtitle, centered = false }) => {
    return (
        <div className={`section-title ${centered ? "centered" : ""}`}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {title}
            </motion.h2>

            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {subtitle}
                </motion.p>
            )}

            <motion.div
                className="title-underline"
                initial={{ width: 0 }}
                whileInView={{ width: centered ? "120px" : "80px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <div className="black"></div>
                <div className="red"></div>
                <div className="gold"></div>
            </motion.div>
        </div>
    )
}

export default SectionTitle

