import React from 'react'
import { content_parag_work_experience } from '../../../data/text_data'

const WorkExperiences = () => {
    return (
        <React.Fragment>
            <div id='self-development'>
                <div className='wp-main-wrap'>
                    <div className='wp-sub-content-wrap'>
                        {content_parag_work_experience.map(({ company, duration, job_description, company_address }, index) => (
                            <div className='wp-parag-wrap' key={index}>
                                <h2 className='wp-title-content'>{company} <span>&#58;</span></h2>
                                <small className='wp-support-content'><span>&#8226;</span> {company_address}</small>
                                <div className='wp-content-wrap'>
                                    <p className='wp-parag-content'>{duration}</p>
                                    <p className='wp-parag-content'>{job_description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WorkExperiences