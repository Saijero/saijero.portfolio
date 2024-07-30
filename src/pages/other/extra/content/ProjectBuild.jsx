import React, { useState, useEffect } from 'react'
import { list_project, list_psd_create } from '../../../sample/data/list_project'

const ProjectBuild = () => {
    const [projectCompleted, setProjectCompleted] = useState(0)
    const [PSDCompleted, setPSDCompleted] = useState(0)

    useEffect(() => {
        const itemListed = list_project.length;
        setProjectCompleted(itemListed)

        const psdListed = list_psd_create.length;
        setPSDCompleted(psdListed)
    }, [])

    const workingHours = '56'

    const data_listed = [
        `<span>${projectCompleted} finish</span> Total Project`,
        `<span>${PSDCompleted} PSD</span> Total PSD`,
        `<span>${workingHours} hrs</span> Work hours/week`,
    ]

    const dataName = [`phone`, `LinkedIn`, `Location`]
    const dataSupport = [`09311516561`, `linkedin.com/in/cyrill-quizam-aa7bbb286`, `Sampalocan Homeowners' Association, Sitio Sampalocan, Parañaque, MM`]

    return (
        <React.Fragment>
            <div id="completed-project">
                <div className="wp-main-wrap">
                    <div className='wp-wrap-content'>
                        <div className="wp-contact-info">
                            <div className="wp-logo">
                                <img className='logo' src="http://horizonplayersclub.com/wp-content/uploads/2023/11/footer-logo.png" alt="saijero-logo" />
                            </div>
                            <div className="wp-wrap-contact">
                                <h3 className='wp-contact-text'>Contact me @</h3>
                                <div className='wp-wrapin-info'>
                                    {dataName.map((name, index) => (
                                        <small
                                            key={index}
                                            className='wp-info'
                                        >
                                            <span className='wp-text'>&#187; {name} &#58; {dataSupport[index]}</span>
                                        </small>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="wp-project-completed">
                            <h3 className='wp-text'>Self project completed &#58;</h3>
                            <div className='wp-wrap-project'>
                                {data_listed.map((data, index) => (
                                    <React.Fragment key={index}>
                                        <small className='wp-item' dangerouslySetInnerHTML={{ __html: data }} />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>
                    <span className='wp-footer'>©2023 Saijero | All Rights Reserved.</span>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProjectBuild