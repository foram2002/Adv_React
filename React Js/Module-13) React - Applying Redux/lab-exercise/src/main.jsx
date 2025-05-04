import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider} from 'react-redux'
import './index.css'
import App from './App.jsx'
import CounterStore from './redux/CounterStore.js'
import UserStore from './reduxToolkit/UserStore.js'

createRoot(document.getElementById('root')).render(
  
    <Provider store={UserStore}>
      <App />
    </Provider>
  
)
