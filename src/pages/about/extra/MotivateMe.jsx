import React from 'react'
import { content_parag_motivates_me } from '../../../data/text_data'

const MotivateMe = () => {
    return (
        <React.Fragment>
            <div id='wp-self-motivation'>
                <div className="wp-main-wrap">
                    {content_parag_motivates_me.map(({ id, name, parag, svgs }) => (
                        <div className='wp-sub-wrap' key={id}>
                            <div className='wp-title-wrap'>
                                <h2 className='wp-title'>{name} &#58;</h2>
                            </div>
                            <div className="wp-wrap-parag">
                                <div className="wp-wrap-content">
                                    <div className="wp-wrap-img">
                                        <img className='wp-img' src={svgs} alt="img" />
                                    </div>
                                    <div className="wp-wrap-parag">
                                        <p className="wp-parag">{parag}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default MotivateMe