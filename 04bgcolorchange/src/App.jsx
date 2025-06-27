import { useState } from "react"
import './App.css';
import Button from "./components/Button";

function App() {
  const [color, setColor] = useState("Olive");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <>
      <div  className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
       <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <Button buttonname="Orange" style={{backgroundColor: "Orange"}} onClick={() => handleColorChange("Orange")} /> 
        <Button buttonname="Purple" style={{backgroundColor: "Purple"}} onClick={() => handleColorChange("Purple")} />
        <Button buttonname="Yellow" style={{backgroundColor: "Yellow"}} onClick={() => handleColorChange("Yellow")} />
       </div>
      </div>
    </>
  )
}

export default App
