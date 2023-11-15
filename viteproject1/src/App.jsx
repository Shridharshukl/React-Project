import Addvalue from "./addvalue"
import './App.css'
import Hello from "./hello"
import { useState } from 'react';


function App() {
  let [inputValue, setInputValue] = useState('');
  let [password, setPassword] = useState(''); 
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
 
  const handleInputChanges = (e) => {
    setPassword(e.target.value);
  }

  return (
    <>
      <div className="App">
      <Hello />
        <h1>React With Vite </h1>
          <h2>User: {inputValue} </h2>
          <h2>Password: {password} </h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter text"
        />
        <input type="password" value = {password} onChange={handleInputChanges} placeholder="Enter Password"/>
      <Addvalue />
      </div>
  </>
      )
}

export default App
