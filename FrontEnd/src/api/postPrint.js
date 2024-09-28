import axios from 'axios';

const API_BASE_PRINT = import.meta.env.VITE_BASE_PRINT;

export const PostPrint = async (savedImage) => {
    try {
      console.log('savedImage:', savedImage); // savedImage 확인
      console.log('savedImage 타입:', typeof savedImage);
  
      const formData = new FormData();
  
      // Blob 또는 base64 확인 후 처리
      if (typeof savedImage === 'string' && savedImage.startsWith('data:image/')) {
        console.log('savedImage는 base64 이미지입니다.');
        const base64ToBlob = (base64) => {
          const byteString = atob(base64.split(',')[1]);
          const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
          const ab = new ArrayBuffer(byteString.length);
          const ia = new Uint8Array(ab);
          for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
          }
          return new Blob([ab], { type: mimeString });
        };
  
        const imageBlob = base64ToBlob(savedImage); // Blob으로 변환
        formData.append('photo', imageBlob, 'photo.png'); // Blob 추가
      } else if (savedImage instanceof Blob) {
        console.log('savedImage는 Blob입니다.');
        formData.append('photo', savedImage, 'photo.png'); // Blob인 경우
      } else {
        throw new Error('savedImage가 유효한 형식이 아닙니다.');
      }
  
      const response = await axios.post(`${API_BASE_PRINT}/api/print/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        }
      });
  
      console.log('성공!', response);
      return response.data;
    } catch (error) {
      console.error('에러 발생', error);
      throw error;
    }
  };
  