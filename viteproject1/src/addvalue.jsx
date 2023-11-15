import { useState } from 'react'
function Addvalue()
{ 
    let [Counter,setCounter] = useState(0)
    //let Counter = 15
    const Addvalues = () => {
        Counter += 1 
        setCounter(Counter)
    }
    const RemoveValue = () => {
        Counter -= 1 
        Counter = (Counter <= 0) ? 0 : Counter
        setCounter(Counter)
    }

    return (
    <>
        <h1>shridhar shukla</h1>
        <h2>Count the likes :{Counter} </h2>
        <button style={{ marginRight:'10px', backgroundColor: '#FE0101' }} onClick={Addvalues}>Add Value </button>
            <button  style={{marginRight:'10px', backgroundColor: '#FE0101'}} onClick={RemoveValue}>Remove Value</button>
            
    </>)
}
export default Addvalue