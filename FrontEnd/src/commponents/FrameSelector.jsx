import React from 'react';
import Frame1 from '../assets/Frame/Frame_W.png';
import Frame2 from '../assets/Frame/Frame_CW.png';
import Frame3 from '../assets/Frame/Frame_CY.png';
import Frame4 from '../assets/Frame/Frame_4.png';
import * as Sel from '../styles/selectStyle';

const FrameSelector = ({ setFrameSrc, selectedFrame, setSelectedFrame }) => {
    const frames = [
        { name: 'Frame1', src: Frame1 },
        { name: 'Frame2', src: Frame2 },
        { name: 'Frame3', src: Frame3 },
        { name: 'Frame4', src: Frame4 }
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