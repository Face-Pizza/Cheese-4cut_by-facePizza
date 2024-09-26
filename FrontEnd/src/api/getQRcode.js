import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export const getLatestData = async () => {
    try {
        // 서버에서 모든 사진 데이터를 불러옴
        const response = await axios.get(`${API_BASE_URL}/api/photos/`);
        const dataSet = response.data;

        // 가장 최근에 저장된 항목을 찾아 반환
        if (dataSet.length > 0) {
            // 데이터가 존재한다면, 가장 마지막 항목 (최신 데이터) 반환
            const latestData = dataSet[dataSet.length - 1];
            return latestData;
        } else {
            console.warn('데이터가 존재하지 않습니다.');
            return null;
        }
    } catch (error) {
        console.error('Data 로드 실패했어요:', error);
        throw error;
    }
};
