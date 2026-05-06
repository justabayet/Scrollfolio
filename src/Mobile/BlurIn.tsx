import { motion, useInView } from 'framer-motion';
import * as React from 'react';

interface BlurInProps {
    children: React.ReactNode
    onAnimationComplete?: () => void
    delay?: number
}

export default function BlurIn({ children, delay = 0, onAnimationComplete = () => { } }: BlurInProps) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <motion.div
            ref={ref}
            initial={{ filter: 'blur(20px)', opacity: 0 }}
            animate={isInView ? { filter: 'blur(0px)', opacity: 1 } : {}}
            transition={{ duration: 1.2, delay }}
            onAnimationComplete={onAnimationComplete}
        >
            {children}
        </motion.div>
    );
};