// src/components/QRCodeDisplay.jsx
import { useState } from 'react';
import { getLatestData } from '../../api/getQRcode';
import * as Sel from '../../styles/selectStyle';


const QRCodeDisplay = ( {onQRCodeChange} ) => {
    const [isQRChecked, setIsQRChecked] = useState(false);
    const checked = event.target.checked;

    // 체크박스가 변경되었을 때 호출되는 함수
    const handleCheckboxChange = async (event) => {
        setIsQRChecked(checked);
        onQRCodeChange(checked); //부모컴포넌트에 전달

        if (checked) {
            try {
                const latestData = await getLatestData();  // API 호출로 데이터 가져오기
                onQRCodeChange(checked, latestData.qr_code);
            } catch (error) {
                console.error('Failed to fetch the latest data:', error);
            }
        } else {
            onQRCodeChange(checked, ''); // 체크 해제 시 QR 코드 숨기기
        }
    };

    return (
        <div>
            <label>
                <span>사진 저장 QR코드</span>
                <input 
                    type="checkbox" 
                    checked={isQRChecked} 
                    onChange={handleCheckboxChange} 
                />
            </label>
        </div>
    );
};

export default QRCodeDisplay;
