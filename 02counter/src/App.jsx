import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  // propagates in ui
  let [counter, setCounter] = useState(15)

  // let counter = 5

  // Ui updations is controlled by react

  const addValue = () => {
    console.log("Clicked", counter);
    if(counter < 20) {  
      counter = counter + 1    
    } 
    setCounter(counter)
  }

  const removeValue = () => {
    if(counter > 0) {
    counter = counter - 1;
    }    
    setCounter(counter)
  }
 
  return (
    <>
      <h1>Hawk</h1>
      <h2>Coutner Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove Value</button>

    </>
  )
}

export default App 