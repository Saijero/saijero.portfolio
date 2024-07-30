import React from 'react';

const Cube3D = () => {
    const boxsMultiple = 12; // box counts
    const linesMultiple = 20; // line counts
    const divArray = []; // array of box

    // main loop mother
    for (let i = 0; i < boxsMultiple; i++) {
        const spanArray = []; // array of line

        // sub loop children
        for (let j = 0; j < linesMultiple; j++) {
            const gap = j * linesMultiple + 1.5;

            spanArray.push(
                <span key={j} className="wp-line-animation" style={{ marginTop: `${gap}px` }} />
            );
        }

        // return div array
        divArray.push(
            <div key={i} className="wp-box-face-holder">
                {spanArray}
            </div>
        );
    }

    return (
        <React.Fragment>
            <div className="wp-box-animation">
                {divArray}
            </div>
        </React.Fragment>
    );
};

export default Cube3D;
