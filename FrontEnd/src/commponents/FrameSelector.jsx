import React from 'react';
import Frame1 from '../assets/Frame/A_1.png';
import Frame2 from '../assets/Frame/A_2.png';
import Frame3 from '../assets/Frame/A_3.png';
import Frame4 from '../assets/Frame/A_4.png';
import Frame5 from '../assets/Frame/A_5.png';
import * as Sel from '../styles/selectStyle';


const FrameSelector = ({ frameSrc, setFrameSrc, selectedFrame, setSelectedFrame }) => {
    const frames = [
        { name: 'Frame1', src: Frame1 },
        { name: 'Frame2', src: Frame2 },
        { name: 'Frame3', src: Frame3 },
        { name: 'Frame4', src: Frame4 },
        { name: 'Frame5', src: Frame5 }
    ];

    return (
        <Sel.FrameSelectorContainer>
            {frames.map((frame) => (
                <Sel.FrameChoice
                    key={frame.name}
                    onClick={() => {
                        setFrameSrc(frame.src);
                        setSelectedFrame(frame.name);
                    }}
                    isSelected={selectedFrame === frame.name}
                >
                    <img src={frame.src} alt={frame.name} />
                </Sel.FrameChoice>
            ))}
        </Sel.FrameSelectorContainer>
    );
};

export default FrameSelector;