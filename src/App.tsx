import { useEffect } from 'react'
import './App.css'

function App() {
  const tg: WebApp = window.Telegram.WebApp;
  console.log(tg);
  

  useEffect(() => {
    tg.ready()
  }, []);

  const onClose = () => {
    tg.close()
  };

  return (
    <div className='App'>
      <button onClick={onClose}>Закрыть</button>
    </div>
  )
}

export default App
