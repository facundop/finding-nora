import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import App from './components/App'
import './index.css'
import { audioMiddleware } from './redux/audio-middleware'
import rootReducer from './redux/reducers'
import registerServiceWorker from './registerServiceWorker'
import { IStoreState } from './types'
import preventDoubleTapZoom from './utils/prevent-double-tap-zoom'

preventDoubleTapZoom()

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore<IStoreState, any, any, any>(
  rootReducer,
  composeEnhancers(applyMiddleware(audioMiddleware)),
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement,
)
registerServiceWorker()
