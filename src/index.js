import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react'

import Loader from './components/loader'

import { persistor, store } from './redux/store'
import App from './app'

import './assets/sass/main.scss'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loader />} persistor={persistor} onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 2000))}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('app'),
)
