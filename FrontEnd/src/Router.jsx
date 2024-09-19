import React from 'react';
import { Routes, Route } from 'react-router-dom';
//여기부터 페이지 로드
import Home from './pages/Home';
import ShootPage from './pages/ShootPage';
import SelectionPage from './pages/SelectionPage';
// import FrameSelectionPage from './pages/FrameSelectionPage';  //삭제 예정
import PrintPage from './pages/PrintPage';
import LoadingPage from './pages/LoadingPage';
import PaymentPage from './pages/PaymentPage';

const AppRouter = ({setCutCount, quantity, setQuantity, setCapturedPhotos, capturedPhotos}) => {
    return (
        <Routes>
            <Route path='/' element={<Home setCutCount={setCutCount} setQuantity={setQuantity} quantity={quantity} />} />
            <Route path='/pay' element={<PaymentPage setCutCount={setCutCount} setQuantity={setQuantity} quantity={quantity} />} />
            <Route path='/shoot' element={ <ShootPage setCapturedPhotos={setCapturedPhotos} capturedPhotos={capturedPhotos}/>} />
            <Route path='/loading' element={ <LoadingPage/> } />
            <Route path='/select' element= { <SelectionPage capturedPhotos={capturedPhotos} /> } />
            <Route path='/print' element= { <PrintPage setCapturedPhotos={setCapturedPhotos} /> } />
        </Routes>
    )
};

export default AppRouter;