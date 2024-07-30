import React from 'react'
import { img_learning_coding } from '../data/img_files'
import { CustomLink } from '../../../../components/CustomLink'
import { text_program } from '../data/text_data'

const LearningProgramming = () => {


    return (
        <React.Fragment>
            <div id="learning-programming">
                <div className="wp-main-wrap">
                    <div className="wp-wrap-content">
                        <div className="wp-text-wrap">
                            <h2 className="wp-text-head">Do you want to learn programming?</h2>
                            <span className='wp-text-support'>Best site to start learning programming</span>
                        </div>
                        <div className="wp-wrap-logo">
                            {img_learning_coding.map(({ imgs, link, name }, index) => (
                                <CustomLink to={link} target="_blank" className='wp-wrap-img' key={index}>
                                    <img className='wp-logo' src={imgs} alt="imgs" />
                                    <small className='wp-name-link'>{name}</small>
                                </CustomLink>
                            ))}
                        </div>
                        <div className="wp-wrap-text-parag">
                            {text_program.map(({ parag }, index) => (
                                <p key={index} className='wp-parag' dangerouslySetInnerHTML={{ __html: parag }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LearningProgramming