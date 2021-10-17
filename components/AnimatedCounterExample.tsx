import React from 'react';
import { AnimatePresence, motion as m } from 'framer-motion';

interface IProps {
    counter: number;
}

const AnimatedCounterExample = ({ counter }: IProps) => (
    <AnimatePresence>
        <m.div
            key={counter}
            // initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -200, opacity: 0, position: 'absolute' }}
            transition={{
                ease: 'easeOut',
                damping: 10,
                stiffness: 100,
                duration: 1,
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            // style={{ x: 100 }}
            className=" text-9xl cursor-pointer select-none"
        >
            {counter}
        </m.div>
    </AnimatePresence>
);

export default AnimatedCounterExample;
