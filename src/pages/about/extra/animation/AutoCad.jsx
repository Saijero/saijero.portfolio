import React from 'react'
import { animation_autocad_GIF } from '../../../../data/img_svg'

const AutoCad = () => {
    return (
        <React.Fragment>
            {animation_autocad_GIF.map(({ id, name, imgs }) => (
                <div className='wp-img-wrap' key={id}>
                    <span className={name}>
                        <img className='wp-img-autocad' src={imgs} alt="imgs" />
                    </span>
                </div>
            ))}
        </React.Fragment>
    )
}

export default AutoCad