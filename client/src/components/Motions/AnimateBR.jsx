import React from 'react'
import { motion } from 'framer-motion'

function AnimateBR({ children }) {
    return (
        <motion.div initial={
            {
                x: "10vw",
                opacity:0
            }
        } animate={
            {
                x: 0,
                y: 0,
                opacity:1
            }
        }
            transition={
                {
                    type: 'tween',
                    delay:0.1,
                    duration:0.3,
                }
            }

        >
            {children}
        </motion.div>
    )
}

export default AnimateBR
