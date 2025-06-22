import { useEffect, useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberallowed] = useState(false) // default -> false
  const [charAllowed, setCharallowed] = useState(false)
  const [password, setPassword] = useState(() => {

  })
 
  const passwordGenerator = useCallback( () => {
    let pass = ""
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if(numberAllowed) str += "0123456789"
      if(charAllowed) str+= "!@#$%^&*()_+-=[]{}|;:',.<>?/~`"

      for (let  i = 0;  i < length;  i++) {
        let char = Math.floor(Math.random() * str.length - 1)
        pass += str.charAt(char)
      }

      setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])
  
  useEffect(() => {
      passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
        
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-900'>
        
        <h1 className='text-4xl text-center text-white my-3'>PassWord Generator</h1>
        <div className='flex shadow roudned-lg overflow-hidden mb-4'>
          <input 
            type='text'
            value={password} 
            className='outline-none w-full py-1 px-3'
            placeholder='Passowrd'
            readOnly
         />
         <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink=-0'>
          copy
         </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'></div>
            <input
            type="range" 
            min={6}
            max={100}
            value={length}
            className ='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value)
            }}
            />
            <label

            >Length: {length}</label>
        </div>
        
        {/* Numbers */}
        <div className='flex item-center gap-x-1 '>
          <input 
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={ () => { 
              setNumberAllowed((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'> Numbers</label>
        </div>
        
        {/* Characters */}
        <div className='flex item-center gap-x-1'>
          <input 
            type='checkbox'
            defaultChecked={charAllowed}
            id='numberInput'
            onChange={ () => { 
              setCharallowed((prev) => !prev)
            }}
          />
          <label htmlFor='numberInput'>Characters</label>

          </div>
      </div>
    </>
  )
}

export default App
