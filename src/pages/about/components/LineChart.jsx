import { VictoryChart, VictoryLine, VictoryScatter, VictoryTooltip } from 'victory';


export default function LineChart({ dataDisplay }) {
    return (
        <VictoryChart>
            <VictoryLine
                data={dataDisplay}
                style={{
                    data: { stroke: 'red' },
                    parent: { border: '1px solid #fff' },
                }}
                labels={({ datum }) => `(${datum.x}, ${datum.y})`}
                labelComponent={
                    <VictoryTooltip
                        style={{ fontSize: 10 }}
                        dy={-10}
                        constrainToVisibleArea
                    />
                }
                // Animate the line with duration and easing
                animate={{
                    duration: 1000, // Animation duration in milliseconds
                    easing: 'quadOut', // Easing function for animation
                }}
            />
            <VictoryScatter
                data={dataDisplay}
                size={5}
                style={{ dataDisplay: { fill: 'blue' } }}
                // Animate the scatter points with duration and easing
                animate={{
                    duration: 500, // Animation duration in milliseconds
                    easing: 'sin', // Easing function for animation
                }}
            />
        </VictoryChart>
    )
}