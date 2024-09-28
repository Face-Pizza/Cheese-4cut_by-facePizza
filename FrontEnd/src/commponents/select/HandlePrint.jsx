import { post4Cut } from '../../api/post4Cut';
import { getLatestData } from '../../api/getQRcode';
import { PostPrint } from '../../api/postPrint';

// 사진을 POST, id, qr코드 받아옴
export const HandlePrint = async (savedImage, navigate) => {
    if (savedImage) {
        try {
            const response = await post4Cut(savedImage);
            navigate('/print'); //test를 위해 navigate일시 중지
            PostPrint(savedImage);
        } catch (error) {
            console.error('에러가 발생', error);
        }
    } else {
        console.error('업로드할 이미지가 없음');
    }

    try {
        const latestData = await getLatestData();  // 데이터 가져오기
        if (latestData) {
            console.log(latestData.id);  // Now you can access latestData.id
        }
    } catch (error) {
        console.error('Failed to fetch the latest data:', error);
    }
};