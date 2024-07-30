import { wrap } from 'popmotion';
import React, { useState, useEffect } from 'react';
import { img_carousel_ban } from '../data/img_files';
import { AnimatePresence, motion as m } from 'framer-motion';
import { CustomButton } from '../../../../components/CustomButton';

export function CarouselComponent({ images, autoSlideInterval, titleBlog }) {
    const [[currentImg, direction], setCurrentImg] = useState([0, 0]);
    const [isPaused, setIsPaused] = useState(false)

    const switchDisplay = isPaused ? ['&#61;'] : ['&#8420;']
    const buttonClick = ['&#171;', switchDisplay, '&#187'];
    const imageIndex = wrap(0, images.length, currentImg);

    useEffect(() => {
        let autoSlideTimer;

        if (!isPaused) {
            autoSlideTimer = setInterval(() => {
                setCurrentImg([currentImg + 1, 1]);
            }, autoSlideInterval);
        }

        return () => {
            clearInterval(autoSlideTimer);
        };
    }, [currentImg, isPaused, autoSlideInterval]);

    const handleEvent = (index) => {
        if (index === 0) {
            let changeDirection = -1;
            const nextImg = (currentImg + changeDirection + images.length) % images.length;
            setCurrentImg([nextImg, changeDirection]);
        } else if (index === 2) {
            let changeDirection = 1;
            const nextImg = (currentImg + changeDirection + images.length) % images.length;
            setCurrentImg([nextImg, changeDirection]);
        } else if (index === 1) {
            setIsPaused(!isPaused);
        }
    };

    return (
        <React.Fragment>
            <div id="blog-ban-carousel">
                <div className="wp-main-wrap">
                    <div className="wp-carousel-wrap">
                        <AnimatePresence initial={false} custom={direction}>
                            <div className='wp-carousel'>
                                <m.img
                                    key={currentImg}
                                    src={images[imageIndex].imgs}
                                    custom={direction}
                                    initial={{ opacity: 0, x: '0%' }}
                                    animate={{ opacity: 1, x: '0%' }}
                                    exit={{ opacity: 0, x: '0%' }}
                                    transition={{ delay: .1, duration: .75, ease: 'easeOut' }}
                                    dragElastic={1}
                                    drag="false"
                                    className='wp-imgs'
                                    touchAction="none"
                                    loading='lazy'
                                />
                            </div>
                        </AnimatePresence>
                        <div className="wp-wrap-btn">
                            <div className="wp-wrap-control">
                                {buttonClick.map((button, index) => (
                                    <CustomButton
                                        className='wp-button'
                                        key={index}
                                        onClick={() => handleEvent(index)}
                                    >
                                        <span dangerouslySetInnerHTML={{ __html: button }} />
                                    </CustomButton>
                                ))}
                            </div>
                        </div>
                        <div className="wp-wrap-title">
                            <h2 className='wp-title' dangerouslySetInnerHTML={{ __html: titleBlog }} />
                        </div>
                        <div className="wp-parag-wrap">
                            <p className='wp-parag' dangerouslySetInnerHTML={{ __html: images[imageIndex].parag }} />
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default function Banne() {
    return (
        <React.Fragment>
            <CarouselComponent images={img_carousel_ban} autoSlideInterval={5000} />
        </React.Fragment>
    )
}
