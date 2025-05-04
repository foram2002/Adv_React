import { useState } from 'react'
import './App.css'
import CounterComponent from './redux/CounterComponent'
import UserCrudComponent from './reduxToolkit/UserCrudComponent'

function App() {

  return (
    <>
      {/* <CounterComponent/> */}
      <UserCrudComponent/>
    </>
  )
}

export default App
