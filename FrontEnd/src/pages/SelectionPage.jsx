//src/pages/SelectPage.jsx
import React, { useState, useRef, useEffect } from 'react';  // useRef 캔버스 참조 추가
import { useNavigate } from 'react-router-dom';
import FrameSelector from '../commponents/FrameSelector';
import Logo_Cheese from '../assets/Logo_Cheese.png';
import * as S from '../styles/commonStyle';
import * as Sel from '../styles/selectStyle';
import Frame1 from '../assets/Frame/D_1.svg';
import { HandlePrint } from '../hooks/HandlePrint';
// import { HandlePrint0 } from '../commponents/select/HandlePrintX';
import QRCodeDisplay from '../commponents/select/QRcodeDisplay';

const SelectionPage = ({ capturedPhotos, setSavedImage, savedImage, setImgForPrint, quantity }) => {
    const navigate = useNavigate();
    const [selectedPhotos, setSelectedPhotos] = useState([null, null, null, null]);
    const [readyToPrint, setReadyToPrint] = useState(false);
    const [frameSrc, setFrameSrc] = useState(Frame1);
    const [selectedFrame, setSelectedFrame] = useState('Frame1');
    const canvasRef = useRef(null);
    const frameRef = useRef(null);
    const [qrCode, setQRCode] = useState('');
    const [qrCodeChecked, setQRCodeChecked] = useState(false);

    const handleQRCodeChange = (checked, newQRCode) => {
        setQRCodeChecked(checked);
        setQRCode(newQRCode);
    };

    const toggleSelectPhoto = (photo) => {
        setSelectedPhotos((prevSelectedPhotos) => {
            const newSelectedPhotos = [...prevSelectedPhotos];

            // 사진 선택 해제
            const indexToRemove = newSelectedPhotos.indexOf(photo);
            if (indexToRemove !== -1) {
                newSelectedPhotos[indexToRemove] = null;
            } else {
                // 첫 번째 빈 자리 찾기
                const firstEmptyIndex = newSelectedPhotos.indexOf(null);
                if (firstEmptyIndex !== -1) {
                    newSelectedPhotos[firstEmptyIndex] = photo;
                }
            }

            // 선택된 사진 개수에 따라 readyToPrint 업데이트
            const selectedCount = newSelectedPhotos.filter(p => p !== null).length;
            setReadyToPrint(selectedCount === 4);

            return newSelectedPhotos;
        });
    };



    //캔버스에 사진 그리기
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        // const frameElement = frameRef.current;

        // 캔버스 크기 설정
        canvas.width = 450;
        canvas.height = 642;

        // 그리기 전에 캔버스 초기화
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#36323B';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // 이미지 로드 작업을 비동기적으로 처리
        const imagePromises = selectedPhotos.map((photo, index) => {
            return new Promise((resolve) => {
                if (photo) {
                    const img = new Image();
                    img.src = photo.photo;
                    img.onload = () => {
                        // 그리드의 각 칸에 맞게 이미지 위치와 크기 조정
                        // console.log('가로(너비):', img.width);
                        // console.log('세로(높이):', img.height);

                        const photoWidth = 196;  // EachPhoto의 너비
                        const photoHeight = 255; // EachPhoto의 높이
                        const x = 20 + (18 + photoWidth) * (index % 2);// x 위치
                        const y = 44 + Math.floor(index / 2) * (10.5 + photoHeight); // y 위치

                        const AdjustmentRatio = photoHeight / img.height; //비율을 곱해서 들어감(347)

                        const sx = ((640 - photoWidth / AdjustmentRatio) / 2); //640 - 1280
                        const sWidth = photoWidth / AdjustmentRatio;


                        // 이미지를 그리드에 맞춰 그리기s

                        ctx.drawImage(
                            img,
                            sx, 0, sWidth, img.height,
                            x,  // x 위치 조정
                            y, // y 위치 조정
                            photoWidth,     // 이미지의 너비
                            photoHeight     // 이미지의 높이
                        );
                        resolve(); // 이미지 로드 완료
                    };
                    img.onerror = () => resolve(); // 이미지 로드 실패 시에도 해결
                } else {
                    resolve(); // 빈 슬롯은 그냥 넘어감
                }
            });
        });

        // 프레임 이미지 로드도 비동기 처리
        const frameImgPromise = new Promise((resolve) => {
            const frameImg = new Image();
            frameImg.src = frameSrc;
            frameImg.onload = () => {
                ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
                resolve(); // 프레임 로드 완료
            };
            frameImg.onerror = () => resolve(); // 프레임 로드 실패 시에도 해결
        });

        // 모든 이미지가 로드된 후에 캔버스 데이터를 저장
        Promise.all([...imagePromises, frameImgPromise]).then(() => {
            const imgDataUrl = canvas.toDataURL(); // 이미지를 저장
            setSavedImage(imgDataUrl);
        });

    }, [frameSrc, selectedPhotos]); // selectedPhotos와 frameSrc가 변경될 때마다 실행

    const handlePrintClick = async () => {// HandlePrint 함수 호출 시 navigate 전달
        console.log('QR 코드 체크 여부:', qrCodeChecked); 
        await HandlePrint(savedImage, navigate, qrCodeChecked, setImgForPrint, quantity); 

    };

    return (
        <Sel.SelectionPage>
            <Sel.Left_box>
                <Sel.Header>
                    <S.Logo src={Logo_Cheese} alt='LOGO' />
                    <QRCodeDisplay onQRCodeChange={handleQRCodeChange} />
                </Sel.Header>


                <Sel.Photo_Preview>
                    <Sel.FourFrame ref={frameRef}>
                        {/* 선택된 사진과 프레임 미리보기 */}
                        {/* <Sel.Frame src={frameSrc} /> */}
                        {qrCode && (
                            <Sel.QRimg src={qrCode} alt="QR 코드" />
                        )}

                        {Array.from({ length: 4 }).map((_, index) => {
                            const x = 18 + (18 + 192) * (index % 2); // 사진의 x 위치
                            const y = 44 + (11 + 256) * Math.floor(index / 2); // 사진의 y 위치
                            return (
                                <Sel.PhotoToggleBtn
                                    key={index}
                                    onClick={() => {
                                        const photo = selectedPhotos[index];
                                        if (photo) {
                                            toggleSelectPhoto(photo);
                                        }
                                    }}
                                    style={{
                                        position: 'absolute',
                                        top: `${y}px`,
                                        left: `${x}px`,
                                        width: '195px',  // 버튼 크기 (각 사진에 맞춤)
                                        height: '260px', // 버튼 크기 (각 사진에 맞춤)
                                        background: 'rgba(0, 0, 0, 0)', // 투명 배경
                                    }}
                                />
                            );
                        })}
                        {/* 캔버스: 프린트하기 버튼 클릭시 이미지 캡처 */}
                        <canvas ref={canvasRef} id="cnavas" style={{ position: 'absolute' }} />
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
                    <div id="photo_gallery">
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
                                        height: '100%',
                                        objectFit: 'cover',
                                    }}
                                />
                            </Sel.PhotoWrapper>
                        ))}
                    </div>
                    <S.RightRowBox>
                        <button
                            onClick={handlePrintClick}
                            // disabled={!readyToPrint}
                            style={{ margin: '0 70px', padding: '0' }}
                        >
                            <h3>프린트하기 &gt;</h3>
                        </button>
                    </S.RightRowBox>
                </S.CenterColBox>
            </Sel.Right_box>

            <S.CenterRowBox>
            </S.CenterRowBox>
        </Sel.SelectionPage>
    );
}

export default SelectionPage;
