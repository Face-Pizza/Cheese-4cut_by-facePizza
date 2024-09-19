import qrcode, base64
from PIL import Image
from io import BytesIO

QRCODE_SERVER_URL = '배포된 qr 사이트 주소' + '/receive?code='

# qrcode 생성
def genQR(id: int) -> Image.Image:
    qr = qrcode.QRCode(
        version=1,      # qr의 저장 size
        error_correction=qrcode.ERROR_CORRECT_M,    # 오류 복원 레벨
        box_size=3,     # qr 이미지 크기
        border=1        # 테두리 여백
    )
    qr.add_data(QRCODE_SERVER_URL + str(id))
    qr.make(fit=True)
    img = qr.make_image(fill_color="black", back_color="white")     # qrcode 이미지 생성
    
    # QR 코드를 base64로 인코딩
    #buffered = BytesIO()
    #img.save(buffered, format="PNG")
    #img_str = base64.b64encode(buffered.getvalue()).decode('utf-8')

    # return img.get_image()  # qrcode 이미지 반환
    return img
    #return img_str