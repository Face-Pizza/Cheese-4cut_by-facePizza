import React from 'react';
import { Routes, Route } from 'react-router-dom';
//여기부터 페이지 로드
import Home from './pages/Home';
import ShootPage_1 from './pages/ShootPage_1';
import ShootPage_2 from './pages/ShootPage_2';
import SelectionPage from './pages/SelectionPage';
import PrintPage from './pages/PrintPage';
import LoadingPage from './pages/LoadingPage';
import PaymentPage from './pages/PaymentPage';

const AppRouter = ({ nextURL, setNextURL, quantity, setQuantity, setCapturedPhotos, capturedPhotos, savedImage, setSavedImage}) => {
    return (
        <Routes>
            <Route path='/' element={<Home setNextURL={setNextURL} nextURL={nextURL}/>} />
            <Route path='/pay' element={<PaymentPage setQuantity={setQuantity} quantity={quantity} nextURL={nextURL} />} />
            <Route path='/shoot_1' element={ <ShootPage_1 setCapturedPhotos={setCapturedPhotos} capturedPhotos={capturedPhotos}/>} />
            <Route path='/shoot_2' element={ <ShootPage_2 setCapturedPhotos={setCapturedPhotos} capturedPhotos={capturedPhotos}/>} />
            <Route path='/loading' element={ <LoadingPage/> } />
            <Route path='/select' element= { <SelectionPage capturedPhotos={capturedPhotos} setSavedImage={setSavedImage} savedImage={savedImage} /> } />
            <Route path='/print' element= { <PrintPage setCapturedPhotos={setCapturedPhotos} savedImage={savedImage}/> } />
        </Routes>
    )
};

export default AppRouter;