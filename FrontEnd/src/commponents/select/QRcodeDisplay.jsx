// src/components/QRCodeDisplay.jsx
import { useState } from 'react';
import { getLatestData } from '../../api/getQRcode';

const QRCodeDisplay = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [qrCode, setQRCode] = useState('');

    const handleCheckboxChange = async (event) => {
        setIsChecked(event.target.checked);

        if (event.target.checked) {
            try {
                const latestData = await getLatestData();  // API 호출로 데이터 가져오기
                setQRCode(latestData.qr_code);  // QR 코드 설정
            } catch (error) {
                console.error('Failed to fetch the latest data:', error);
            }
        } else {
            setQRCode('');  // 체크 해제 시 QR 코드 숨기기
        }
    };

    return (
        <div>
            <label>
                <span>사진 저장 QR코드</span>
                <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={handleCheckboxChange} 
                />
            </label>

            {/* 체크박스가 체크되면 QR 코드 렌더링 */}
            {isChecked && qrCode && (
                <div>
                    <img 
                        src={qrCode} 
                        alt="QR 코드" 
                        style={{ marginTop: '10px', width: '150px', height: '150px' }} 
                    />
                </div>
            )}
        </div>
    );
};

export default QRCodeDisplay;
