import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store, { persistor } from './App/Store'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css'
import ScrollToTop from './ScrollToTop.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <ScrollToTop/>
          < App />
      </Router>
    </PersistGate>
  </Provider>
)
