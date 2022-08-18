import React from 'react'
import { motion } from 'framer-motion'

function AnimateBR({ children }) {
    return (
        <motion.div initial={
            {
                x: "5vw",
                y: '5vh'
            }
        } animate={
            {
                x: 0,
                y: 0
            }
        }
        >
            {children}
        </motion.div>
    )
}

export default AnimateBR
