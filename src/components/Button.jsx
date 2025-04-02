"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Button = ({ children, to, onClick, primary, className = "" }) => {
    const buttonClass = `button ${primary ? "primary" : "secondary"} ${className}`

    const buttonVariants = {
        hover: {
            scale: 1.05,
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
        },
        tap: {
            scale: 0.95,
        },
    }

    if (to) {
        return (
            <motion.div whileHover="hover" whileTap="tap" variants={buttonVariants}>
                <Link to={to} className={buttonClass}>
                    {children}
                </Link>
            </motion.div>
        )
    }

    return (
        <motion.button
            className={buttonClass}
            onClick={onClick}
            whileHover="hover"
            whileTap="tap"
            variants={buttonVariants}
        >
            {children}
        </motion.button>
    )
}

export default Button

