import React from 'react'
import { CustomLink } from './CustomLink'

const LocationMap = () => {

    return (
        <React.Fragment>
            <map className='wp-map-wrap'>
                <CustomLink>
                    <iframe className='wp-pin-location' title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3862.846885032437!2d121.04263218642633!3d14.49347774355652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cfec29c8f1b7%3A0x9e1343159ffefcad!2sSampalocan%20Homeowners&#39;%20Association!5e0!3m2!1sen!2sph!4v1696319102221!5m2!1sen!2sph" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </CustomLink>
            </map>
        </React.Fragment>
    )
}

export default LocationMap