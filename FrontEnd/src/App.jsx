import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import './App.css'

function App() {
  const [nextURL, setNextURL] = useState(null);   // 스냅유형
  const [quantity, setQuantity] = useState(2);    // 매수: 1~9매
  const [capturedPhotos, setCapturedPhotos] = useState([]); // 촬영된 사진
  const [savedImage, setSavedImage] = useState(null);
  const [imgForPrint, setImgForPrint] = useState(null);

  return (
    <Router>
      <AppRouter
        nextURL={nextURL}
        setNextURL={setNextURL}
        setQuantity={setQuantity}
        quantity={quantity}
        capturedPhotos={capturedPhotos}
        setCapturedPhotos={setCapturedPhotos}
        savedImage={savedImage}
        setSavedImage={setSavedImage}
        imgForPrint={imgForPrint}
        setImgForPrint={setImgForPrint}
      />
    </Router>
  )
}

export default App
