import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
};

export const post4Cut = async (savedImage) => {
  try {
    const formData = new FormData();
    
    // savedImage가 Base64일 경우 Blob으로 변환
    if (typeof savedImage === 'string' && savedImage.startsWith('data:image/')) {
        const imageBlob = dataURLtoBlob(savedImage);
        formData.append('Photo', imageBlob, 'photo.png'); // Blob을 FormData에 추가
    } else {
        // Blob이나 File 객체일 경우 그대로 사용
        formData.append('Photo', savedImage, 'photo.png'); 4
    }

    const response = await axios.post(`${API_BASE_URL}/api/photos/`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

       
    console.log('성공!', response.data);
    return response.data;
  } catch (error) {
    console.log('에러 발생', error);
    throw error;
  }
};
