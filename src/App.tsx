import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const tg: WebApp = window.Telegram.WebApp;
  const [text, setText] = useState("");
  

  useEffect(() => {
    tg.ready()
  }, []);

  const onClose = () => {
    tg.close()
  };
  const showAlert = () => {
    tg.showAlert("Приём алерт", ()=>{})
  };
  const requestContacts = () => {
    tg.requestContact(()=>{
      setText("contact");
    })
  };
  const showConfirm = () => {
    tg.showConfirm("Готов?", () => {
      setText("ready");
    })
  };
  const openTGLink = () => {
    tg.openTelegramLink("https://t.me/hamster_kombaT_bot");
  };
  // const openInvoice = () => {
  //   tg.openInvoice("https://t.me/hamster_kombaT_bot");
  // };

  return (
    <div className='App'>
      <button className='btn' onClick={onClose}>Закрыть</button>
      <button className='btn' onClick={showAlert}>Alert</button>
      <button className='btn' onClick={showConfirm}>Open Confirm</button>
      <button className='btn' onClick={openTGLink}>Open Link</button>
      <button className='btn' onClick={requestContacts}>Request Contact</button>
      {/* <button className='btn' onClick={tg.openInvoice("https://t.me")}>Open Invoice</button> */}
      <div>{tg.platform}</div>
      <div className='red'>{text}</div>
    </div>
  )
}

export default App
