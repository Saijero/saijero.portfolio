import React, { useState, useEffect } from 'react';
import { wrap } from 'popmotion';
import { AnimatePresence, motion } from 'framer-motion';
import { img_home } from '../data/img_svg';

export default function ImgCarousel() {
    const [[currentImg, direction], setCurrentImg] = useState([0, 0]);

    const autoSlideInterval = 5000;

    const imageIndex = wrap(0, img_home.length, currentImg);

    useEffect(() => {
        const autoSlideTimer = setInterval(() => {
            setCurrentImg([currentImg + 1, 1]);
        }, autoSlideInterval);

        return () => {
            clearInterval(autoSlideTimer);
        };
    }, [currentImg]);

    return (
        <React.Fragment>
            <AnimatePresence initial={false} mode='wait' custom={direction}>
                <ul className='wp-list-img'>
                    <motion.img
                        src={img_home[imageIndex].imgs}
                        custom={direction}
                        initial="incoming"
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: 'easeOut' }}
                        dragElastic={1}
                        drag="false"
                        className='wp-imgs'
                        touchAction="none"
                    />
                </ul>
            </AnimatePresence>
        </React.Fragment>
    );
}
