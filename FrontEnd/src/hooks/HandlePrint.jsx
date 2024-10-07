import { post4Cut } from '../api/post4Cut';
import { getLatestData } from '../api/getQRcode';
import { PostPrint } from '../api/postPrint';

// 새로운 이미지 생성 함수
const addQRCodeToImage = (savedImage, qrCode) => {
    console.log("QR 코드 값:", qrCode);
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "Anonymous"; // CORS 속성 추가
        img.src = savedImage;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            // 캔버스 크기는 원본 이미지와 동일하게 설정
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            if (qrCode) {
                const qrImg = new Image();
                qrImg.crossOrigin = "Anonymous"; // CORS 속성 추가
                qrImg.src = qrCode;

                qrImg.onload = () => {
                    const qrSize = 45;  // QR 코드 크기
                    const x = 20;  // 왼쪽 하단 위치
                    const y = canvas.height - qrSize - 26;

                    ctx.drawImage(qrImg, x, y, qrSize, qrSize);
                    const finalImage = canvas.toDataURL();
                    resolve(finalImage);
                };

                qrImg.onerror = (error) => {
                    reject(new Error("QR 이미지 로드 실패: " + error.message));
                };
            } else {
                resolve(savedImage); // QR 코드가 없으면 기존 이미지 반환
            }
        };

        img.onerror = (error) => {
            reject(new Error("이미지 로드 실패: " + error.message));
        };
    });
};


export const HandlePrint = async (savedImage, navigate, qrCodeChecked, setImgForPrint, quantity) => {
    if (!savedImage) {
        console.error('업로드할 이미지가 없음');
        return;
    }

    try {
        // 빠르게 QR코드를 생성하기 위한 post4Cut
        await post4Cut(savedImage);

        // QR 코드 가져오기 (최신 데이터 가져오기)
        const latestData = await getLatestData(); // 최신 QR 코드 데이터 가져옴
        let imgForPrint;

        console.log('QR출력여부', qrCodeChecked)
        if (latestData && qrCodeChecked) {
            // QR 코드가 체크되었을 때만 이미지에 QR 추가
            console.log('최신 QR 코드:', latestData.qr_code); 
            imgForPrint = await addQRCodeToImage(savedImage, latestData.qr_code);
        } else {
            imgForPrint = savedImage; // QR 코드가 없을 경우 원본 이미지 사용
        }

        setImgForPrint(imgForPrint);

        // 사용자 화면을 전환
        navigate('/print');

        // 화면 전환 후 이미지 전송 작업을 비동기로 처리
        PostPrint(imgForPrint, quantity);
    } catch (error) {
        console.error('에러가 발생:', error);
    }
};
