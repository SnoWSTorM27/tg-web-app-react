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

  return (
    <div className='App'>
      <button onClick={onClose}>Закрыть</button>
      <button onClick={showAlert}>Alert</button>
      <button onClick={changeExpand}>expand</button>
      <div>{tg.platform}</div>
      <div>{tg.isExpanded}</div>
    </div>
  )
}

export default App
