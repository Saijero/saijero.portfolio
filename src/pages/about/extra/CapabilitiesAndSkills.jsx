import React from 'react'
import { content_parag_capabilities_skills } from '../../../data/text_data'

const CapabilitiesAndSkills = () => {

    return (
        <React.Fragment>
            <div id='capabilities-skills'>
                <div className="wp-main-wrap">
                    {content_parag_capabilities_skills.map(({ id, name, parag }) => (
                        <div className='wp-sub-wrap' key={id}>
                            <div className="wp-content-wrap">
                                <div className="wp-title-wrap">
                                    <h2 className="wp-title">{name} &#58;</h2>
                                </div>
                                <div className="wp-parag-wrap">
                                    <ul className='main-list'>
                                        {parag.map((paragItem, index) => (
                                            <li key={index} className='wp-list-item'>
                                                <p className='wp-parag-item'>{paragItem}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </React.Fragment>
    )
}

export default CapabilitiesAndSkills