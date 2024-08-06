import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Router } from 'react-router-dom'
import history from './app/utils/history'
import { createStore } from './app/store/createStore'

const store = createStore();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <Router history={history}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Router>
  </Provider>
)
