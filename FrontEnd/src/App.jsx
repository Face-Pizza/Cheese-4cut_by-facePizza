import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
import './App.css'

function App() {
  const [cutCount, setCutCount] = useState(2);    // 컷수: 2컷 or 4컷
  const [quantity, setQuantity] = useState(1);    // 매수: 1~9매
  const [capturedPhotos, setCapturedPhotos] = useState([]); // 촬영된 사진
  const [savedImage, setSavedImage] = useState(null);

  return (
    <Router>
      <AppRouter
        setCutCount={setCutCount}
        setQuantity={setQuantity}
        quantity={quantity}
        capturedPhotos={capturedPhotos}
        setCapturedPhotos={setCapturedPhotos}
        savedImage={savedImage}
        setSavedImage={setSavedImage}
      />
    </Router>
  )
}

export default App
