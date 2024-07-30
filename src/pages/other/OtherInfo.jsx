import React from 'react'
import { motion as m } from 'framer-motion'
import { blog_post_list_content } from './extra/data/list_of_content'


const OtherInfo = () => {

    return (
        <React.Fragment>
            <div id="other-information">
                <m.div
                    className="wp-main-wrap"
                    initial={{ y: '30%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '30%', opacity: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    {blog_post_list_content.map(({ content_list }, index) => (
                        <div className='wp-content-items' key={index}>
                            {content_list.map((contentItem, index) => (
                                <div className='wp-content-wrap' key={index}>
                                    {contentItem}
                                </div>
                            ))}
                        </div>
                    ))}
                </m.div>
            </div>
        </React.Fragment>
    )
}

export default OtherInfo