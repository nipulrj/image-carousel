import { useState } from 'react'
import './App.css'
import ImageCarousel from './components/ImageCarousel.jsx'

function App() {
  return (
    <>
      <div className='App'>
          <ImageCarousel count={10}/>
      </div>
    </>
  )
}

export default App
