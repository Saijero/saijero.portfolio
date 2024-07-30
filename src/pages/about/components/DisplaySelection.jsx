import React from 'react';
import { motion as m } from 'framer-motion';
import { CustomLink } from '../../../components/CustomLink';

function renderItems(itemGroup, clickDisplay, clickDisplayHide, handleShowContent, smallQuery) {
    return itemGroup.map(({ title, imgs, id }, index) => (
        <React.Fragment key={index}>
            <div
                className={`wp-wrap-about ${smallQuery && clickDisplay === id ? 'wp-activate-content' : clickDisplayHide ? 'wp-hide-content' : 'default'}`}
            >
                <div className='wp-wrap-imgs'>
                    <CustomLink onClick={() => handleShowContent(id)} className='wp-select-content'>
                        <img loading='lazy' className='wp-img-me' src={imgs} alt="img" />
                        {clickDisplayHide ? (
                            <m.h2
                                className='wp-text-about'
                                animate={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{ delay: 1, duration: 1 }}
                            >
                                {clickDisplayHide ? 'close' : ''}
                            </m.h2>
                        ) : (
                            <h2 className='wp-text-about'>{title}</h2>
                        )}
                    </CustomLink>
                </div>
            </div>
        </React.Fragment>
    ));
}

export default function DisplaySelection({
    smallQuery,
    firstGroup,
    secondGroup,
    clickDisplay,
    clickDisplayHide,
    handleShowContent,
}) {
    return (
        <React.Fragment>
            <div className='wp-head-ban-wrap'>
                <m.div
                    className='wp-ban-about-me'
                    animate={{ x: '0%', opacity: 1 }}
                    initial={{ x: '-25%', opacity: 0 }}
                    exit={{ x: '-50%', opacity: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {renderItems(firstGroup, clickDisplay, clickDisplayHide, handleShowContent, smallQuery)}
                </m.div>
                {<m.div
                    className="wp-ban-about-me"
                    animate={{ x: '0%', opacity: 1 }}
                    initial={{ x: '25%', opacity: 0 }}
                    exit={{ x: '50%', opacity: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {renderItems(secondGroup, clickDisplay, clickDisplayHide, handleShowContent, smallQuery)}
                </m.div>}
            </div>
        </React.Fragment>
    );
}
