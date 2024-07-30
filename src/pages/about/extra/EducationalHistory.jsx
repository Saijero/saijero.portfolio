import React from 'react'
import { content_parag_educational_history } from '../../../data/text_data'

const EducationalHistory = () => {
    return (
        <React.Fragment>
            <div id='self-development'>
                <div className='wp-main-wrap'>
                    <div className='wp-sub-content-wrap'>
                        {content_parag_educational_history.map(({ school, year_graduate, course, address }, index) => (
                            <div className='wp-parag-wrap' key={index}>
                                <h2 className='wp-title-content'>{school} <span>&#58;</span></h2>
                                <small className='wp-support-content'><span>&#8226;</span> {address}</small>
                                <small className='wp-support-content'><span>&#8226;</span> {course}</small>
                                <div className='wp-content-wrap'>
                                    <p className='wp-parag-content'>{year_graduate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default EducationalHistory