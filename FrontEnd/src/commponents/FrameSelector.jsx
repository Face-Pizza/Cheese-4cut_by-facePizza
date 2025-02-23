import React from 'react';
import Frame1 from '../assets/Frame/D_1.svg';
import Frame2 from '../assets/Frame/D_2.svg';
import Frame3 from '../assets/Frame/D_3.svg';
import Frame4 from '../assets/Frame/D_4.svg';
import Frame5 from '../assets/Frame/D_5.svg';
import Frame6 from '../assets/Frame/D_6.svg';
import Frame7 from '../assets/Frame/F_1.svg';
import * as Sel from '../styles/selectStyle';


const FrameSelector = ({ frameSrc, setFrameSrc, selectedFrame, setSelectedFrame }) => {
    const frames = [
        { name: 'Frame1', src: Frame1 },
        { name: 'Frame2', src: Frame2 },
        { name: 'Frame3', src: Frame3 },
        { name: 'Frame4', src: Frame4 },
        { name: 'Frame5', src: Frame5 },
        { name: 'Frame6', src: Frame6 },
        { name: 'Frame7', src: Frame7 }
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
                    <Sel.eachFrame class='eachFrame' src={frame.src} alt={frame.name} />
                </Sel.FrameChoice>
            ))}
        </Sel.FrameSelectorContainer>
    );
};

export default FrameSelector;