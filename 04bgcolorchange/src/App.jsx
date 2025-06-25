import { useState } from "react"
import Button from "./components/color"
import './App.css';

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div  className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <Button buttonname="Orange" style={{backgroundColor: "Orange"}}/> 
        <Button buttonname="Purple" style={{backgroundColor: "Purple"}}/>
        <Button buttonname="Yellow" style={{backgroundColor: "Yellow"}}/>

       </div>

      </div>
    </>
  )
}

export default App
