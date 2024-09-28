export const savePhoto = (frameRef, setPhotoURL) => {
    const frame = frameRef.current;
    if (frame) {
      domtoimage
        .toJpeg(frame, { quality: 0.95 })  // 이미지 퀄리티 설정
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.href = dataUrl;
          link.download = 'Cheese_naecut.jpg';  // 이미지 파일 다운로드
          link.click();
          setPhotoURL(dataUrl);  // QR 코드 생성을 위한 URL 저장
        })
        .catch((error) => {
          console.error('Oops, something went wrong!', error);  // 에러 처리
        });
    }
  };