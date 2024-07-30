import React from 'react'
import { content_parag_contact_details } from '../../../data/text_data'
import LocationMap from '../../../components/LocationMap'

const ContactDetails = () => {
    return (
        <React.Fragment>
            <div id='self-development'>
                <div className='wp-main-wrap'>
                    <div className='wp-sub-content-wrap'>
                        {content_parag_contact_details.map(({ name, addres, email, phone, git_hub, linked_in }, index) => (
                            <div className='wp-parag-wrap' key={index}>
                                <h2 className='wp-title-content'>{name} <span>&#58;</span></h2>
                                <small className='wp-support-content'><span>&#8226;</span> Email <span>&#58;</span> {email}</small>
                                <small className='wp-support-content'><span>&#8226;</span> Phone <span>&#58;</span> {phone}</small>
                                <small className='wp-support-content'><span>&#8226;</span> GitHub <span>&#58;</span> {git_hub}</small>
                                <small className='wp-support-content'><span>&#8226;</span> LinkedIn <span>&#58;</span> {linked_in}</small>
                                <div className='wp-map-location'>
                                    <div className="wp-sub-wrap">
                                        <small className='wp-support-content'><span>&#8226;</span> Location <span>&#58;</span> {addres}</small>
                                        <div className='wp-wrap-map'>
                                            {/* geomap */}
                                            <LocationMap />
                                            {/* geomap */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactDetails