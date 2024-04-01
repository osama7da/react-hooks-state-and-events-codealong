import React, {useState} from "react"; 


function Toggle() { 
  const [isOn , setIsOn] = useState(false)  

  function handleButton (){ 
    setIsOn((isOn) => !isOn)
    
  }
  return <button style={{background : isOn ? "red" : "white"}} onClick={handleButton}>{isOn ? "On" : "OFF" }</button>;
}

export default Toggle;
