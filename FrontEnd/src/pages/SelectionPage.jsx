import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Frame1 from '../assets/Frame/Frame_W.png';
import Frame2 from '../assets/Frame/Frame_CW.png';
import Frame3 from '../assets/Frame/Frame_CY.png';
import Frame4 from '../assets/Frame/Frame_4.png';
import * as S from '../styles/commonStyle';
import * as Sel from '../styles/selectStyle';


const SelectionPage = ({ capturedPhotos }) => {
    const framesSquence = [Frame1, Frame2, Frame3, Frame4];
    const navigate = useNavigate();
    const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
    const [selectedPhotos, setSelectedPhotos] = useState([null, null, null, null]);
    console.log(capturedPhotos.length);

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

    const handleNextFrame = () => {    ////Issue 콘솔 NaN찍히며 프레임 안바뀜
        setCurrentFrameIndex((prevIndex) => (prevIndex + 1) % framesSquence.length);
        console.log(framesSquence[currentFrameIndex])
    };


    return (
        <Sel.SelectionPage>
            <h2>사진을 선택해 주세요.</h2>
            <S.CenterRowBox >
                {/* 다음 버튼을 누르면 Sel.Frame의 scr가 Frame1, 2, 3, 4 다시 1 순으로 변화*/}
                <button onClick={handleNextFrame}>다음</button>
                <Sel.FourFrame>
                    <Sel.Frame src={framesSquence[currentFrameIndex]} />
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
            </S.CenterRowBox>
            <button
                onClick={() => navigate('/print')} //null때문인지 항상 활성화되는 문제가 발생
                disable={selectedPhotos.filter(photo => photo !== null).length !== 4}
            >
                프린트하기
            </button>  {/* selectedPhoto.length == 4 일때만 활성화 */}
        </Sel.SelectionPage>
    );
}

export default SelectionPage;