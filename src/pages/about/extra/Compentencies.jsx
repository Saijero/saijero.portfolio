import React, { useState } from 'react'
import { motion as m } from 'framer-motion'
import { content_parag_compentencies } from '../../../data/data_array';
import { content_parag_graph_scaling } from '../../../data/text_data';
import { CustomLink } from '../../../components/CustomLink';
import { CustomSelect } from '../../../components/CustomSelect';
import LineChart from '../components/LineChart';
import { useMediaQuery } from 'react-responsive';

const Compentencies = () => {
    const [dataDisplay, setDataDisplay] = useState(content_parag_compentencies[0].year_data[0].data_array);
    const [selectedItemActive, setSelectedItemActive] = useState(0)
    const [totalDataGraph, setTotalDataGraph] = useState(calculateAverage(content_parag_compentencies[0].year_data[0].data_array))
    const [selectDataCall, setSelectDataCall] = useState(content_parag_compentencies[0].year_data)

    const smallQuery = useMediaQuery({ query: '(min-width: 426px)' })

    function handleDataDisplay(data_array, index) {
        setDataDisplay(data_array);
        setSelectedItemActive(index)

        /************** calculate graoh data axis **************/
        //Filter out data points with non-zero values 
        const dataHaveNoZero = data_array.filter((point) => point.y !== 0)

        // Calculate the sum of all y values
        const totalSumPoints = dataHaveNoZero.reduce((total, dataPoint) => total + dataPoint.y, 0);

        // Calculate the average
        if (totalSumPoints === 0) {
            return setTotalDataGraph('0')
        } else {
            const totalGrade = totalSumPoints / dataHaveNoZero.length
            setTotalDataGraph(totalGrade.toFixed(2))
        }
    }

    // update grade opening data serve as default call grade
    function calculateAverage(data_array) {
        const dataHaveNoZero = data_array.filter((point) => point.y !== 0);
        const totalSumPoints = dataHaveNoZero.reduce((total, dataPoint) => total + dataPoint.y, 0);
        const average = totalSumPoints / dataHaveNoZero.length;
        return average.toFixed(2);
    }

    // call data per year and serve also default first array latest year
    function handleSelection(selectedYear) {
        const selectedData = content_parag_compentencies.find((data) => data.year === selectedYear);
        if (selectedData) {
            handleDataDisplay(selectedData.year_data[0].data_array, 0); // Call handleDataDisplay to update the displayed data and average.
            setSelectDataCall(selectedData.year_data);
        }
    }

    const labelLegen = ['LEVEL', 'RANGE', 'grade', 'max grade']
    const dataLabelLegen = ['skill apply', 'month/year', 'performance/yr', 'grade target']

    return (
        <React.Fragment>
            <div id='wp-compentencies'>
                <div className='wp-main-wrap'>
                    <div className='wp-graph-skill'>
                        <LineChart dataDisplay={dataDisplay} />
                    </div>
                    <div className='wp-graph-label'>
                        <div className='wp-range-skill'>
                            <div className='wp-label-grap'>
                                <span className='wp-level-skill'>LEVEL</span>
                                <span className='wp-range'>RANGE</span>
                            </div>
                            <div className='wp-label-rate-wrap'>
                                <span className='wp-label-rate-max'><span>grade</span> {smallQuery && <>&#45;</>} {totalDataGraph}</span>
                                <span className='wp-label-rate-max'> <span>select year</span> {smallQuery && <>&#58;</>}
                                    <CustomSelect id='select' className='wp-select-data' onChange={(e) => handleSelection(e.target.value)}>
                                        {content_parag_compentencies.map(({ year }, index) => (
                                            <option key={index} value={year}>
                                                {year}
                                            </option>
                                        ))}
                                    </CustomSelect>
                                </span>
                                <span className='wp-label-rate-max'> <span>max grade</span> {smallQuery && <>&#45;</>} 10</span>
                            </div>
                        </div>
                        <m.span
                            className='wp-legend-graph'
                            animate={{ opacity: 1, y: '0%' }}
                            initial={{ opacity: 0, y: '50%' }}
                            transition={{ delay: 2.5, duration: 1, ease: 'easeOut' }}
                        >
                            <span className='wp-label-data' >Legend &#58; </span>
                            <div className='wp-legend-label'>
                                {labelLegen.map((label, index) => (
                                    <span className='wp-label-graph'>
                                        <span key={index}>{label}</span> {smallQuery && <>&#45;</>} {dataLabelLegen[index]}
                                    </span>
                                ))}
                            </div>
                        </m.span>
                    </div>
                    <div className='wp-content-compentencies'>
                        {selectDataCall.map(({ name, svgs, data_array }, index) => (
                            <div className={`wp-content-svg ${selectedItemActive === index ? 'wp-active-select' : ''}`} key={index}>
                                <CustomLink className={`wp-content-select`}
                                    onClick={() => handleDataDisplay(data_array, index)}
                                >
                                    <div className='wp-svg'>{svgs}</div>
                                    <h3 className='wp-name-svgs'>{name}</h3>
                                </CustomLink>
                            </div>
                        ))}
                    </div>
                    <div className='wp-graph-parag'>
                        <div className='wp-wrap-parag'>
                            {content_parag_graph_scaling.map(({ name, parag }, index) => (
                                <div className='wp-parag-content' key={index}>
                                    <h3 className='wp-parag-title'>{name}</h3>
                                    <p className='wp-content-parag' dangerouslySetInnerHTML={{ __html: parag }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div >
        </React.Fragment >
    )
}


export default Compentencies