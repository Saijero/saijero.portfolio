import React from 'react';
import { DiReact } from 'react-icons/di'

const Node = ({ id, x, y }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: `${x}px`,
                top: `${y}px`,
                borderRadius: '50%',
                width: '100px',
                height: '100px',
                display: 'flex',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '22px',
                letterSpacing: '2px',
            }}
            className='wp-graph'
        >
            {id}
        </div>
    );
};

const GraphLine = () => {
    const nodes = [
        { id: 'Js', x: 100, y: 150 },
        { id: 'Php', x: 750, y: 150 },
        { id: 'Sql', x: 430, y: 0 },
        { id: 'Css', x: 100, y: 495 },
        { id: 'HTML', x: 430, y: 325 },
        { id: 'Java', x: 750, y: 495 },
        { id: 'Python', x: 430, y: 650 },
    ];

    const edges = [
        { source: 'HTML', target: 'Js' },
        { source: 'HTML', target: 'Php' },
        { source: 'HTML', target: 'Sql' },
        { source: 'HTML', target: 'Css' },
        { source: 'HTML', target: 'Java' },
        { source: 'HTML', target: 'Python' },
        { source: 'Js', target: 'Sql' },
        { source: 'Sql', target: 'Php' },
        { source: 'Php', target: 'Java' },
        { source: 'Java', target: 'Python' },
        { source: 'Python', target: 'Css' },
        { source: 'Css', target: 'Js' },
    ];

    return (
        <div id='wp-graph-content' style={{ position: 'relative', width: '600px', height: '600px' }}>
            {nodes.map((node, index) => (
                <React.Fragment>
                    <Node key={index} id={node.id} x={node.x} y={node.y} />
                </React.Fragment>
            ))}
            {edges.map((edge, index) => (
                <React.Fragment>
                    <svg key={index} style={{ position: 'absolute', zIndex: -1, width: '50vw', height: '80vh' }}>
                        <line
                            x1={nodes.find((node) => node.id === edge.source).x + 15}
                            y1={nodes.find((node) => node.id === edge.source).y + 15}
                            x2={nodes.find((node) => node.id === edge.target).x + 15}
                            y2={nodes.find((node) => node.id === edge.target).y + 15}
                            stroke="blue"
                            strokeWidth="3"
                        />
                    </svg>
                </React.Fragment>
            ))}
        </div>
    );
};

export default GraphLine;
