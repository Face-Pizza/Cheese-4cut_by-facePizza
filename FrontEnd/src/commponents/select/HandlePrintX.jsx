import { post4Cut } from '../../api/post4Cut';
import { getLatestData } from '../../api/getQRcode';
import { PostPrint } from '../../api/postPrint';

export const HandlePrint0 = async (savedImage, navigate, quantity) => {
    if (!savedImage) {
        console.error('업로드할 이미지가 없음');
        return;
    }

    console.log('전송할 인쇄 장수:', quantity); // 인쇄 장수 확인
    if (quantity === undefined) {
        console.error('quantity가 undefined입니다.'); 
    }

    try {
        const response = await post4Cut(savedImage);
        if (response) {
            navigate('/print');
            await PostPrint(savedImage, quantity);
        }

        const latestData = await getLatestData();
        if (latestData) {
            console.log(latestData.id);
        }
    } catch (error) {
        console.error('에러가 발생:', error);
    }
};
