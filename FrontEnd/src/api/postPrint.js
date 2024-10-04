import axios from 'axios';
const API_BASE_PRINT = import.meta.env.VITE_BASE_PRINT;

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

export const PostPrint = async (imgForPrint, quantity) => {
  try {  
    const formData = new FormData();
    
    const appendFile = (blob) => formData.append('file', blob, 'photo.png');
    
    if (typeof imgForPrint === 'string' && imgForPrint.startsWith('data:image/')) {
      appendFile(base64ToBlob(imgForPrint));
    } else if (imgForPrint instanceof Blob) {
      appendFile(imgForPrint);
    } else {
      throw new Error('imgForPrint가 유효한 형식이 아닙니다.');
    }

    formData.append('num', quantity);

    const response = await axios.post(`${API_BASE_PRINT}/api/print/`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });

    console.log('인쇄 장수', quantity)
    console.log('PostPrint 성공!', response);
    return response.data;
  } catch (error) {
    console.error('에러 발생', error);
    throw error;
  }
};
