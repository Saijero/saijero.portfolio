import React from 'react';
import { FaCircle, FaSquare, FaArrowRight } from 'react-icons/fa';

// Custom Node Component
const GraphNode = ({ icon, label }) => {
    const IconComponent = icon; // Dynamically select the icon component

    return (
        <div className="node">
            <IconComponent size={32} />
            <div className="label">{label}</div>
        </div>
    );
};

// Graph Component
const Graph = () => {
    return (
        <div className="graph">
            <GraphNode icon={FaCircle} label="A" />
            <GraphNode icon={FaSquare} label="B" />
            <GraphNode icon={FaArrowRight} label="D" />
            {/* Add more nodes as needed */}
        </div>
    );
};

export default Graph;
