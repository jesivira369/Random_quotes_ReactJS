import React, { useState, useEffect } from 'react'
import './App.css';
import PageContainer from './Component/PagesContainer'
import { randInt } from './Funciones/Numeros'
import QuoteList from './Component/QuoteList/QuoteList.jsx'





const backgroudColors = ["#272f2c", "#217f13", "#1c9c4a", "#c5a0d7", "#99e4f8"]

function App() {



  const [currentColor, setCurrentColor] = useState('#000')

  const selectColor = () => {
    setCurrentColor(backgroudColors[randInt(0, backgroudColors.length)])
  }

  useEffect(() => {
    selectColor()

  }, [])

  return (
    <div className="App">
      <PageContainer color={currentColor}>
        <QuoteList color={currentColor} selectColor={selectColor} />
      </PageContainer>
    </div>
  );
}

export default App;
