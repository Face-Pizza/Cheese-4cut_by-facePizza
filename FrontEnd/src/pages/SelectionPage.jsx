import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FrameSelector from '../commponents/FrameSelector';
import Logo_Cheese from '../assets/Logo_Cheese.png';
import * as S from '../styles/commonStyle';
import * as Sel from '../styles/selectStyle';
import Frame1 from '../assets/Frame/Frame_W.png';
import SubmitPhotos from '../hooks/SubmitPhoto';


const SelectionPage = ({ capturedPhotos }) => {
    const navigate = useNavigate();
    const [selectedPhotos, setSelectedPhotos] = useState([null, null, null, null]);
    const [frameSrc, setFrameSrc] = useState(Frame1);
    const [selectedFrame, setSelectedFrame] = useState('Frame1');

    console.log(capturedPhotos.length);
    console.log(frameSrc);

    const toggleSelectPhoto = (photo) => {
        setSelectedPhotos((prevSelectedPhotos) => {
            const newSelectedPhotos = [...prevSelectedPhotos];

            // 선택된 사진이 배열에 있는지 확인
            const indexToRemove = newSelectedPhotos.indexOf(photo);
            if (indexToRemove !== -1) {
                // 선택 해제
                newSelectedPhotos[indexToRemove] = null;
                return newSelectedPhotos;
            }

            // 사진이 추가될 수 있는 빈 자리를 찾는다
            const firstEmptyIndex = newSelectedPhotos.indexOf(null);
            if (firstEmptyIndex !== -1) {
                // 빈 자리가 있으면 추가
                newSelectedPhotos[firstEmptyIndex] = photo;
                return newSelectedPhotos;
            }

            // 이미 4개의 사진이 선택된 경우 아무 작업도 하지 않음
            return prevSelectedPhotos;
        });
    };


    return (
        <Sel.SelectionPage>
            <Sel.Left_box>
                <Sel.Header>
                    <S.Logo src={Logo_Cheese} alt='LOGO' />
                    <label>
                        <span>사진 저장 QR코드</span>
                        <input type='checkbox' />
                    </label>
                </Sel.Header>

                <Sel.Photo_Preview>
                    <Sel.FourFrame>
                        <Sel.Frame src={frameSrc} />
                        {Array.from({ length: 4 }).map((_, index) => (
                            <div key={index}>
                                <Sel.EachPhoto>
                                    {selectedPhotos[index] ? (
                                        <img
                                            src={selectedPhotos[index].photo}
                                            alt={`selected-${index}`}
                                        />
                                    ) : (
                                        <Sel.EmptyPhoto />
                                    )}
                                </Sel.EachPhoto>

                                {/* 각 사진 위에 겹쳐질 토글 버튼 */}
                                <Sel.PhotoToggleBtn
                                    onClick={() => {
                                        const photo = selectedPhotos[index];
                                        if (photo) {
                                            toggleSelectPhoto(photo);
                                        }
                                    }}
                                />
                            </div>
                        ))}
                    </Sel.FourFrame>
                </Sel.Photo_Preview>

                <FrameSelector
                    setFrameSrc={setFrameSrc}
                    frameSrc={frameSrc}
                    selectedFrame={selectedFrame}
                    setSelectedFrame={setSelectedFrame}
                />
            </Sel.Left_box>

            <Sel.Right_box>
                <S.CenterColBox style={{ alignItems: 'center' }}>
                    <h3>사진을 골라주세요</h3>
                    <div id="photo_gallery">  {/* 클릭을 통해 네게까지 선택 가능. 다시클릭시 선택 해제됨 */}

                        {capturedPhotos.map((photo, index) => (
                            <Sel.PhotoWrapper
                                key={index}
                                isSelected={selectedPhotos.includes(photo)}
                                onClick={() => toggleSelectPhoto(photo)}
                            >
                                <img
                                    src={photo.photo}
                                    alt={`snap-${index}`}
                                    style={{
                                        width: '101%',
                                        height: '101%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Sel.PhotoWrapper>
                        ))}
                    </div>
                    <S.RightRowBox>
                        <button
                            onClick={() => navigate('/print')}
                            disabled={selectedPhotos.filter(photo => photo !== null).length !== 4}
                            style={{margin: '0 70px', padding: '0'}}
                        >
                           <h3>프린트하기 &gt;</h3>
                        </button>
                    </S.RightRowBox>
                </S.CenterColBox>
                {/* <SubmitPhotos selectedPhotos={selectedPhotos} /> */}
            </Sel.Right_box>

            <S.CenterRowBox >



            </S.CenterRowBox>

        </Sel.SelectionPage>
    );
}

export default SelectionPage;