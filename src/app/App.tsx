import { Switch, Route } from 'react-router-dom'
import './App.css'
import CharacterPage from './components/pages/CharacterPage'
import MainPage from './components/pages/MainPage'

function App() {
  // const tg: WebApp = window.Telegram.WebApp;

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/character' component={CharacterPage}/>
        <Route exact path='/' component={MainPage}/>
      </Switch>
    </div>
  )
}

export default App
