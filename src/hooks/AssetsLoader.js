import React, { useEffect, useState } from 'react';
import { Waveform } from '@uiball/loaders';
import { motion as m } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

export const AssetsContext = React.createContext({});

const AssetsLoader = ({ children }) => {
    const [unloadedAssets, setUnloadedAssets] = useState(false)
    const [loadedAssets, setLoadedAssets] = useState(false);
    const [countDown, setCountDown] = useState(5);

    const navigate = useNavigate()

    const imagesToPreloadEmpty = [];

    const imagesToPreload = [
        "http://horizonplayersclub.com/wp-content/uploads/2023/10/Untitled-3.jpg",
        "http://horizonplayersclub.com/wp-content/uploads/2023/10/12067352_4884841.png",
        "http://horizonplayersclub.com/wp-content/uploads/2023/09/button-background.jpg",
        "http://horizonplayersclub.com/wp-content/uploads/2023/10/6372463_3200146-scaled.jpg",
        "http://horizonplayersclub.com/wp-content/uploads/2023/10/112067352_4884841-scaled.jpg",
        "https://img.freepik.com/free-vector/circuits-blue-red-gradient-digital-background_23-2148821701.jpg",
        "http://horizonplayersclub.com/wp-content/uploads/2023/10/abstract-digital-grid-black-background.jpg",
    ];

    const switchMapping = loadedAssets ? imagesToPreloadEmpty : imagesToPreload;

    useEffect(() => {
        let expire = 5000;

        const preloadImages = () => {
            const promises = switchMapping.map((imageSrc) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = imageSrc;
                    img.onload = resolve;
                });
            });

            const timeoutId = setTimeout(() => {
                setUnloadedAssets(true)
            }, expire);

            Promise.all(promises).then(() => {
                clearTimeout(timeoutId);
                setLoadedAssets(true);
            }, [switchMapping]);

        }

        preloadImages();
    });

    useEffect(() => {
        let timeout = 5000;

        if (unloadedAssets === true) {
            setTimeout(() => {
                navigate(-1);
            }, timeout);

            const interval = setInterval(() => {
                setCountDown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            if (countDown === 0) {
                clearInterval(interval);
            }
            return () => clearInterval(interval);
        }
    })

    return (
        <React.Fragment>
            <AssetsContext.Provider value={{ loadedAssets }}>
                {loadedAssets && loadedAssets ? (
                    children
                ) : (
                    <m.div
                        className='wp-loading-assets'
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='wp-wrap-message'>
                            {
                                unloadedAssets && unloadedAssets ?
                                    <div className='wp-please-wait'>
                                        <small className='wp-message'>Low network, unenable to load resources.</small>
                                        <small className='wp-message-return'>return in <span>{countDown}</span></small>
                                    </div>
                                    : // condition state
                                    <div className='wp-please-wait'>
                                        <small className='wp-message'>Please wait... checking resources.</small>
                                        <Waveform size={45} color='#ff0000' />
                                    </div>
                            }
                        </div>
                    </m.div>
                )}
            </AssetsContext.Provider>
        </React.Fragment>
    );
};

export default AssetsLoader;
