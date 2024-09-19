import React from 'react';
import { useNavigate } from 'react-router-dom';

// 서버로 선택된 사진을 전송하는 컴포넌트
const SubmitPhotos = ({ selectedPhotos }) => {
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (selectedPhotos.filter(photo => photo !== null).length !== 4) {
            alert("사진을 4개 선택해 주세요.");
            return;
        }

        // 선택된 사진을 Base64로 백엔드에 전송
        try {
            const response = await fetch('http://127.0.0.1:8000/api/photos/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    photos: selectedPhotos.map(photo => photo.photo),  // base64로 된 사진 데이터 전송
                }),
            });

            if (!response.ok) {
                throw new Error('사진 업로드에 실패했습니다.');
            }

            const data = await response.json();
            console.log('업로드 성공:', data);

            // 프린트 페이지로 이동
            navigate('/print');
        } catch (error) {
            console.error(error);
            alert('사진 업로드에 실패했습니다. 다시 시도해 주세요.');
        }
    };

    return (
        <button
            onClick={handleSubmit}
            disabled={selectedPhotos.filter(photo => photo !== null).length !== 4}
        >
            프린트하기
        </button>
    );
};

export default SubmitPhotos;
