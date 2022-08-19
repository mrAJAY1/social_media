import React from 'react'
import { motion } from 'framer-motion'


function AnimateUtoD({children}) {
    return (
        <motion.div
            initial={{
                y: 20,
                opacity:0
            }} animate={
                {
                    y: 0,
                    opacity:1
                }
            }
            transition={{
                delay:0.2
            }}
            >
                {children}

        </motion.div>
    )
}

export default AnimateUtoD
