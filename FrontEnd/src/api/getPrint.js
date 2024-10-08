import axios from 'axios';

export const getPrintStatus = async () => {
  try {
    // 백엔드의 프린트 상태 확인을 위한 GET 요청
    const response = await axios.get('http://localhost:8000/print-status'); // 백엔드 URL에 맞게 수정
    if (response.data.status === 'success') {
      console.log('프린트 완료:', response.data.message);
    } else if (response.data.status === 'error') {
      console.log('프린트 오류:', response.data.message);
    } else {
      console.log('프린트 상태 확인 중:', response.data.message);
    }
  } catch (error) {
    console.error('프린트 상태를 확인하는 중 오류 발생:', error);
  }
};
