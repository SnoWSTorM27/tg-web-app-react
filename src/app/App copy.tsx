import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const tg: WebApp = window.Telegram.WebApp;
  const telegram: Telegram = window.Telegram;
  const [text, setText] = useState("");
  console.log(telegram);
  
  

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
    tg.showConfirm("Готов?", (ok) => {
      setText( ok ? "ready": "not ready");
    })
  };
  const showPopup = () => {
    tg.showPopup({
      title: "Название окна",
      message: "Это сообщение окна",
      buttons: [
        { type: "ok", text: "текст на ок" },
        // { id: "2", type: "cancel", text: "текст на cancel" },
        { type: "close", text: "текст на close" }
        // { id: "4", type: "default", text: "текст на default" },
        // { id: "5", type: "destructive", text: "текст на destructive" }
      ]
    }, () => {
      setText("Popup");
    })
  };
  const showQRPopup = () => {
    tg.showScanQrPopup({
      text: "сканируй код"
    }, (data) => {
      setText(`QR popup ${data}}`);
    })
  };
  const openTGLink = () => {
    tg.openTelegramLink("https://t.me/hamster_kombaT_bot");
  };
  const openInvoice = () => {
    tg.openInvoice("https://t.me/hamster_kombaT_bot", () => {
      setText("invoice");
    });
  };

  return (
    <div className='App'>
      <button className='btn' onClick={onClose}>Закрыть</button>
      <button className='btn' onClick={showAlert}>Alert</button>
      <button className='btn' onClick={showConfirm}>Open Confirm</button>
      <button className='btn' onClick={openTGLink}>Open Link</button>
      <button className='btn' onClick={requestContacts}>Request Contact</button>
      <button className='btn' onClick={showPopup}>show Popup</button>
      <button className='btn' onClick={showQRPopup}>show QR popup</button>
      <button className='btn' onClick={openInvoice}>Open Invoice</button>
      <div>{tg.platform}</div>
      <h3>{tg.platform}</h3>
      <div className='red'>{text}</div>
    </div>
  )
}

export default App
