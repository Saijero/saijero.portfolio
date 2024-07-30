import React from 'react'
import { home_about_page, home_mvg_page, home_welcome, list_service_offer } from '../../data/text_data'
import { home_svg } from '../../data/img_svg';
import Switching from '../../hooks/Switching';
import ImgCarousel from '../../components/ImgCarousel';
import { CgAirplane } from 'react-icons/cg'
import LocationMap from '../../components/LocationMap';
import { motion as m } from 'framer-motion'
import { useClickCount } from '../../hooks/ClickCountProvider';

const transitioning = ['Adaptation', 'Evolution', 'Innovation', 'Revolution']


const Home = () => {
    const { currentItem } = Switching(transitioning);

    const { homeClickCount } = useClickCount()

    return (
        <React.Fragment>
            <div id='wp-home-custom-content'>
                <m.div
                    className='wp-main-wrap'
                    animate={{ opacity: 1, y: '0%' }}
                    exit={{ opacity: 0, y: `50%` }}
                    initial={{ opacity: 0, y: '25%' }}
                    transition={{ delay: homeClickCount === 0 ? 0.5 : 0, duration: 1, ease: 'easeOut' }}
                >
                    <div className='wp-ban-content'>
                        <m.div className='wp-ban-text-welcome'
                            animate={{ y: '0%' }}
                            initial={{ y: '-45%' }}
                            transition={{ delay: 1, duration: 0.5, ease: 'easeIn' }}
                        >
                            {home_welcome.map(({ id, parag }) => (
                                <div key={id} className='wp-wrap-parag' >
                                    <p className="wp-text-parag" dangerouslySetInnerHTML={{ __html: parag }} />
                                </div>
                            ))}
                        </m.div>
                        <m.div className='wp-sub-wrap-ban'
                            animate={{ x: '0%', opacity: 1 }}
                            initial={{ x: '-50%', opacity: 0 }}
                            transition={{ delay: 1.5, duration: 0.75, ease: 'easeOut' }}
                        >
                            <img className='wp-saijero-img' src="http://horizonplayersclub.com/wp-content/uploads/2023/10/PicsArt_07-19-12.png" alt="Placeholder" loading="lazy" />
                            <p className='wp-text-back'>{currentItem}</p>
                        </m.div>
                    </div>
                    <div className='wp-ban-svg'>
                        <div className='wp-wrap-sub'>
                            {home_svg.map(({ name, svgs }) => (
                                <div className='wp-svg' key={name}>
                                    {svgs}
                                    <span className='wp-name'>{name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='wp-recent-self-project'>
                        <div className='wp-wrap-content'>
                            <h2 className="wp-home-run">About the page &#58;</h2>
                            {home_about_page.map(({ name, parag }) => (
                                <div className='wp-text-parag' key={name}>
                                    <p className='wp-text'>{parag}</p>
                                </div>
                            ))}
                            <div className='wp-service-offer'>
                                <h3 className="wp-service">Service offer &#58;</h3>
                                <div className='wp-sub-wrap'>
                                    <ul className='wp-list-serivce'>
                                        {list_service_offer.map(({ name, parag }) => (
                                            <li className='wp-text-parag' key={name}>
                                                <span className='wp-wrap-span'>
                                                    <span className='wp-arrow'>{<CgAirplane />}</span>
                                                    <span className='wp-arrow-2' />
                                                </span>
                                                <p className='wp-text'>{parag}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className='wp-img-slider'>
                                        <div className='wp-img-wrap'>
                                            <React.Fragment>
                                                <ImgCarousel />
                                            </React.Fragment>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='wp-home-mvg'>
                        <div className="wp-wrap-mvg">
                            <ul className="wp-list-msvg">
                                {home_mvg_page.map(({ name, parag, imgs }, index) => (
                                    <li className={`wp-list-items`} key={name}>
                                        <div className='wp-wrap-sub'>
                                            <h3 className='wp-item-subject'>{name}</h3>
                                            <p className='wp-item-content'>{parag}</p>
                                        </div>
                                        <img
                                            src={imgs}
                                            alt={imgs + 1}
                                            className={`${name} wp-list-items-${index}`}
                                            loading="lazy" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className='wp-map-location'>
                        <div className="wp-sub-wrap">
                            <h3 className='wp-location-pin'>Location &#58;</h3>
                            <div className='wp-wrap-map'>
                                <LocationMap />
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </React.Fragment >
    )
}

export default Home