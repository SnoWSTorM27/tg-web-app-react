import { Switch, Route } from 'react-router-dom'
import './App.css'
import CharacterPage from './components/pages/CharacterPage'
import MainPage from './components/pages/MainPage'
import EarnPage from './components/pages/EarnPage'

function App() {
  // const tg: WebApp = window.Telegram.WebApp;

  return (
    <div className='App'>
      <Switch>
        <Route exact path='/fight' component={MainPage}/>
        <Route exact path='/training' component={MainPage}/>
        <Route exact path='/club' component={MainPage}/>
        <Route exact path='/earn' component={EarnPage}/>
        <Route exact path='/character' component={CharacterPage}/>
        <Route exact path='/' component={MainPage}/>
      </Switch>
    </div>
  )
}

export default App
