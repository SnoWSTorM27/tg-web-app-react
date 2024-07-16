import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const tg: WebApp = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready()
  }, []);

  const onClose = () => {
    tg.close()
  };

  return (
    <>
      <button onClick={onClose}>Закрыть</button>
    </>
  )
}

export default App
