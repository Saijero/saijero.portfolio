import React, { useEffect, useState } from 'react'
import { landing_button } from '../../data/button_routes'
import { landing_text_h2, landing_text_p } from '../../data/text_data';
import { CustomLink } from '../../components/CustomLink';
import { useClickCount } from '../../hooks/ClickCountProvider';
import { motion as m } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'


const Landing = () => {
    const [activeButtons, setActiveButtons] = useState([]);
    const [isClickButton, setIsClickButton] = useState(false);
    const [isBackgroundImageLoaded, setIsBackgroundImageLoaded] = useState(false)

    let landing = 'landing-page'
    let landingTransition = 'transition'
    let QueryClassElement = document.querySelector('body');

    const { decrementHomeClickCount } = useClickCount()

    useEffect(() => {
        const htmlElement = QueryClassElement
        htmlElement.classList.add(landing);
        htmlElement.classList.add(landingTransition);
        return () => {
            htmlElement.classList.remove(landing);
            htmlElement.classList.remove(landingTransition);
        };
    }, [QueryClassElement, landing, landingTransition]);

    useEffect(() => {
        const htmlElement = QueryClassElement
        setTimeout(() => {
            htmlElement.classList.replace('home-background', landing);
        }, 0);
    }, [QueryClassElement, landing])

    useEffect(() => {
        const img = new Image();
        const backgroundImageUrl = getComputedStyle(document.body).getPropertyValue("background-image");
        const imageUrl = backgroundImageUrl.replace(/url\(['"]?(.*?)['"]?\)/, "$1");
        img.src = imageUrl;
        img.onload = () => {
            setIsBackgroundImageLoaded(true);
        }
        img.unload = () => {
            setIsBackgroundImageLoaded(false);
        }
    }, [QueryClassElement]);

    useEffect(() => {
        const bodyElement = document.body;
        const classNameToCheck = landing;
        if (bodyElement.classList.contains(classNameToCheck)) {
            if (isBackgroundImageLoaded) {
                const htmlElement = QueryClassElement
                htmlElement.classList.add('RGBA-lighting')
                return (() => {
                    htmlElement.classList.remove('RGBA-lighting')
                })
            }
        }
    }, [isBackgroundImageLoaded, QueryClassElement, landing])

    function handleEvent(index) {
        if (activeButtons.includes(index)) {
            setActiveButtons(activeButtons.filter(item => item !== index));
        } else {
            setIsClickButton(true);
            setActiveButtons([...activeButtons, index]);
        }
    }

    function handleEventClick() {
        decrementHomeClickCount()
    }

    const replaceMessageQuery = useMediaQuery({ query: '(max-width: 768px)' })

    const replaceSelectedBtn = ['Home', 'Get CV', 'Pages']

    const resumeLink = `http://horizonplayersclub.com/wp-content/uploads/2023/12/CV_QUIZAM.docx`

    function downloadCv() {
        const anchor = document.createElement('a');
        anchor.href = resumeLink;
        anchor.download = 'CV_QUIZAM.docx';
        anchor.click();
    }

    return (
        <React.Fragment>
            <m.div id="wp-landing"
                exit={{ opacity: 0, y: '-50%' }}
                animate={{ opacity: 1, y: "0%" }}
                initial={{ opacity: 0, y: "-50%" }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <div className="wp-main-wrap">
                    <div className="wp-greating-wrap">
                        <div>
                            {landing_text_h2.map(({ paragraph, className }) => (
                                <h2 key={className} className={className}>{paragraph}</h2>
                            ))}
                        </div>
                        <div>
                            {landing_text_p.map(({ paragraph, className }, index) => (
                                <p
                                    key={className}
                                    className={`wp-message-${isClickButton && index === 1 ? 'greating' : className}`}
                                >
                                    {isClickButton && index === 1 ? 'Thank You!' : paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="wp-button-wrap">
                        <React.Fragment>
                            {landing_button.map(({ path, name, icons }, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleEvent(index)}
                                    className={`wp-btn-landing ${activeButtons.includes(index) ? 'active-class' : ''}`}
                                >
                                    <CustomLink
                                        to={path === resumeLink ? null : path}
                                        onClick={() => {
                                            if (path === resumeLink) {
                                                downloadCv();
                                            }
                                            handleEventClick();
                                        }}
                                        className={name}
                                    >
                                        {icons}
                                        {replaceMessageQuery ? (replaceSelectedBtn[index]) : (name)}
                                    </CustomLink>
                                </button>
                            ))}
                        </React.Fragment>
                    </div>
                </div>
            </m.div>
        </React.Fragment >
    )
}

export default Landing