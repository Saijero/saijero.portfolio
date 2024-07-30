import React from 'react'
import { list_project } from './data/list_project'
import { CustomLink } from '../../components/CustomLink'
import { main_routes } from '../../data/routes';
import { motion as m } from 'framer-motion'

const ListOfPage = () => {

    const filterRoutes = main_routes
        .filter(route => route.render_main_route)
        .map(route => route.path);

    return (
        <React.Fragment>
            <div id='list-project-build'>
                <div className="wp-main-wrap">
                    <m.div
                        className='wp-animation-wrap'
                        animate={{ y: '0%', opacity: 1 }}
                        initial={{ y: '35%', opacity: 0 }}
                        transition={{ delay: 0.15, duration: 1, ease: 'easeOut' }}
                    >
                        {list_project.map(({ content_img, name, design_by, date_started, date_completed }, index) => (
                            <React.Fragment key={index}>
                                <div className='wp-content-project' >
                                    <div className='wp-wrap-content'>
                                        <div className='wp-project-sample'>
                                            <CustomLink
                                                to={filterRoutes[index]}
                                                className='wp-wrap-project'
                                            >
                                                <m.div
                                                    className="wp-wrap-title"
                                                >
                                                    <small className="wp-title">{name}</small>
                                                    <small className="wp-title">Design by &#58; {design_by}</small>
                                                </m.div>
                                                <div className="wp-wrap-img">
                                                    <img className='wp-img' src={content_img} alt="img" />
                                                </div>
                                            </CustomLink>
                                        </div>
                                        <div className='wp-wrap-date'>
                                            <span className='wp-date'>start &#58; {date_started}</span>
                                            <span className='wp-date'>end &#58; {date_completed}</span>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </m.div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ListOfPage