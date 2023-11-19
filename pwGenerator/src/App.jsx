import { useState,useCallback,useEffect,useRef } from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numallow, setnumallow] = useState(false)
  const [charallow, setcharallow] = useState(false)
  const [pword,setpword] = useState("")
  
  const passwordRef = useRef(null)

  const copyclickB = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(pword);
  }, [pword]);

  const Pwgenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numallow) str+= "0123456789" 
    if (charallow) str += "!@#$%^&*(){}[]+-|~`"
    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      pass += str.charAt(char)
    }
    
    setpword(pass)
    
  } ,[length , numallow, charallow, setpword])

  useEffect(() => {
    Pwgenerator();
  },[length,numallow,charallow,setpword])

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 my-8 text-orange-500 bg-gray-800'> 
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
           type = "text"
          value={pword}
          className=' outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
           ref={passwordRef}
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.5 
        shrink-0' onClick={copyclickB}> Copy
        </button>
      </div>
      <div className='flex text-sm grap-x-2'>
        <div className='flex item-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
           <input
            type="checkbox"
            defaultChecked={numallow}
            id="numberInput" 
            onChange={() => { setnumallow((prev) =>! prev); }}
          />
        <label htmlFor='numberInput'>Numbers</label>
      </div>
        <div className='flex item-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charallow}
            id="numberInput" 
            onChange={() => { setcharallow((prev) =>! prev); }}
          />
        <label htmlFor='numberInput'>charectors</label>
       </div>
      </div>
    </div>
  )
}

export default App
