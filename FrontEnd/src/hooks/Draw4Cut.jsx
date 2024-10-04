import React, { useEffect, useRef } from 'react';

const Draw4Cut = ({ selectedPhotos, frameSrc, setSavedImage }) => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = 450;
        canvas.height = 642;

        // 캔버스 초기화
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#36323B';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const imagePromises = selectedPhotos.map((photo, index) => {
            return new Promise((resolve) => {
                if (photo) {
                    const img = new Image();
                    img.src = photo.photo;
                    img.onload = () => {
                        const photoWidth = 210;
                        const photoHeight = 260;
                        const x = 10 + (7.2 + photoWidth) * (index % 2);
                        const y = 30 + Math.floor(index / 2) * (5 + photoHeight);
                        const AdjustmentRatio = photoHeight / img.height;
                        const sx = (640 - photoWidth / AdjustmentRatio) / 2;
                        const sWidth = photoWidth / AdjustmentRatio;

                        ctx.drawImage(
                            img,
                            sx, 0, sWidth, img.height,
                            x,
                            y,
                            photoWidth,
                            photoHeight
                        );
                        resolve();
                    };
                    img.onerror = () => resolve();
                } else {
                    resolve();
                }
            });
        });

        const frameImgPromise = new Promise((resolve) => {
            const frameImg = new Image();
            frameImg.src = frameSrc;
            frameImg.onload = () => {
                ctx.drawImage(frameImg, 0, 0, canvas.width, canvas.height);
                resolve();
            };
            frameImg.onerror = () => resolve();
        });

        Promise.all([...imagePromises, frameImgPromise]).then(() => {
            const imgDataUrl = canvas.toDataURL();
            setSavedImage(imgDataUrl);
        });
    }, [frameSrc, selectedPhotos, setSavedImage]);

    return <canvas ref={canvasRef} style={{ display: 'none' }} />;
};

export default Draw4Cut;
//현시점 사용 X