import React from 'react'
import { content_parag_about_me } from '../../../data/text_data'

const SelfDevelopment = () => {
    return (
        <React.Fragment>
            <div id='self-development'>
                <div className='wp-main-wrap'>
                    <div className='wp-sub-content-wrap'>
                        {content_parag_about_me.map(({ name, parag }, index) => (
                            <div className='wp-parag-wrap' key={index}>
                                <h2 className='wp-title-content'>{name} <span>&#58;</span></h2>
                                <div className='wp-content-wrap'>
                                    <p className='wp-parag-content' dangerouslySetInnerHTML={{ __html: parag }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SelfDevelopment