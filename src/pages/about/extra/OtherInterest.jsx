import React from 'react'
import { content_parag_other_interest } from '../../../data/text_data'

const OtherInterest = () => {

    return (
        <React.Fragment>
            <div id='wp-other-interest'>
                <div className="wp-main-wrap">
                    {content_parag_other_interest.map(({ name, parag, svg }, index) => (
                        <div className='wp-wrap-svg' key={index}>
                            <div className='wp-svg'>
                                {svg[0].svg_1}
                                {svg[0].svg_2}
                                {svg[0].svg_3}
                            </div>
                            <div className='wp-wrap-content'>
                                <h2 className='wp-name-title'>{name}</h2>
                                <p className='wp-content-parag'>{parag}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment >
    )
}

export default OtherInterest