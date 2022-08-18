import React from 'react'
import { motion } from 'framer-motion'


function AnimateUtoD({children}) {
    return (
        <motion.div
            initial={{
                y: -20
            }} animate={
                {
                    y: 0
                }
            }>
                {children}

        </motion.div>
    )
}

export default AnimateUtoD
