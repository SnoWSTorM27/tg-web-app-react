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
  const showAlert = () => {
    tg.showAlert("Приём алерт", ()=>{})
  };
  const changeExpand = () => {
    tg.expand()
  };
  const openTGLink = () => {
    tg.openTelegramLink("https://t.me/SnoWSTorM27")
  };

  return (
    <div className='App'>
      <button className='btn' onClick={onClose}>Закрыть</button>
      <button className='btn' onClick={showAlert}>Alert</button>
      <button className='btn' onClick={changeExpand}>expand</button>
      <button className='btn' onClick={openTGLink}>Open Link</button>
      <div>{tg.platform}</div>
      <div>{tg.isExpanded}</div>
    </div>
  )
}

export default App
