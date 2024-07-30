import React, { useState, useEffect } from 'react';
import SelfDevelopment from './extra/SelfDevelopment';
import WorkExperiences from './extra/WorkExperiences';
import Compentencies from './extra/Compentencies';
import CapabilitiesAndSkills from './extra/CapabilitiesAndSkills';
import MotivateMe from './extra/MotivateMe';
import OtherInterest from './extra/OtherInterest';
import ContactDetails from './extra/ContactDetails';
import EducationalHistory from './extra/EducationalHistory';
import { motion as m } from 'framer-motion'
import DisplaySelection from './components/DisplaySelection';
import { img_about } from '../../data/img_svg';
import { useMediaQuery } from 'react-responsive'

const AboutMe = () => {
    const contentArray = img_about.slice();
    const firstGroup = contentArray.slice(0, contentArray.length / 2);
    const secondGroup = contentArray.slice(contentArray.length / 2);

    const smallQuery = useMediaQuery({ query: '(min-width: 769px)' })
    const smallQueryMax = useMediaQuery({ query: '(max-width: 768px)' })

    const [contentCall, setContentCall] = useState(null)
    const [clickDisplay, setClickDisplay] = useState(null);
    const [clickDisplayHide, setClickDisplayHide] = useState(false);
    const [displayTag, setDiplayTag] = useState('')

    useEffect(() => {
        const htmlElement = document.querySelector('.home-background')

        if (clickDisplay === 1 || [2, 3, 4, 5, 6, 7, 8].includes(clickDisplay)) {
            htmlElement.style.backgroundImage = 'var(--url-about-me)'
        } else if (clickDisplay === null) {
            htmlElement.style.backgroundImage = 'var(--url-about-me)'
        }

        return (() => {
            htmlElement.style.background = ''
        })
    }, [clickDisplay])

    const handleShowContent = (id) => {
        if (clickDisplayHide === true) {
            setContentCall(null);
            setClickDisplay((prevState) => {
                if (prevState === id) {
                    return null;
                }
                return id;
            });
            setClickDisplayHide(!clickDisplayHide);
            return;
        } else if (clickDisplayHide === false) {
            setClickDisplay(id);
            setClickDisplayHide(!clickDisplayHide);
        }

        switch (id) {
            case 1:
                setDiplayTag('Self Development')
                setContentCall(<SelfDevelopment />);
                break;
            case 2:
                setDiplayTag('Work Experience')
                setContentCall(<WorkExperiences />);
                break;
            case 3:
                setDiplayTag('Compentencies')
                setContentCall(<Compentencies />);
                break;
            case 4:
                setDiplayTag('Educational History')
                setContentCall(<EducationalHistory />);
                break;
            case 5:
                setDiplayTag('ContactDetails')
                setContentCall(<ContactDetails />);
                break;
            case 6:
                setDiplayTag('OtherInterest')
                setContentCall(<OtherInterest />);
                break;
            case 7:
                setDiplayTag('Motivate Me')
                setContentCall(<MotivateMe />);
                break;
            case 8:
                setDiplayTag('CapabilitiesAnd Skills')
                setContentCall(<CapabilitiesAndSkills />);
                break;
            default:
                setContentCall(null);
        }
    };

    return (
        <React.Fragment>
            <m.div id="wp-all-about-me">
                <m.div
                    className="wp-main-wrap"
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0, }}
                    initial={{ opacity: 0, }}
                    transition={{ delay: 0.5, duration: 0.3, ease: 'easeOut' }}
                >
                    <div className='wp-wrap-selection-content'>
                        <DisplaySelection
                            smallQuery={smallQuery}
                            firstGroup={firstGroup}
                            secondGroup={secondGroup}
                            clickDisplay={clickDisplay}
                            clickDisplayHide={clickDisplayHide}
                            handleShowContent={handleShowContent}
                        />
                    </div>
                    {contentCall && (
                        <React.Fragment>
                            <m.div
                                exit={{ x: '100%' }}
                                animate={{ x: '0%', opacity: 1, }}
                                initial={{ x: '10%', opacity: 0 }}
                                transition={{ delay: smallQuery ? 2 : 0.3, duration: 0.5, ease: 'easeOut' }}
                                className='wp-animate-call'
                            >
                                <React.Fragment>
                                    {displayTag &&
                                        <div className='wp-content-wrap'>
                                            <small className='wp-tag-content'>
                                                {displayTag}
                                            </small>
                                        </div>
                                    }
                                </React.Fragment>
                                <React.Fragment>
                                    {contentCall &&
                                        <div className='wp-content'>
                                            {contentCall}
                                        </div>}
                                </React.Fragment>
                            </m.div>
                        </React.Fragment>
                    )}
                    {smallQueryMax && clickDisplayHide ? <React.Fragment>
                        <button
                            className='wp-close-btn'
                            onClick={handleShowContent}
                        >
                            close
                        </button>
                    </React.Fragment> : ""}
                </m.div>
            </m.div>
        </React.Fragment >
    );
};

export default AboutMe;