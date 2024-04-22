import { useState } from "react"
import StartGame from "./components/StartGame"
import GamePlay from "./components/GamePlay"

function App() {
  const [isGameStarted, setIsGameStarted]=useState(false)
  const toggleGamplay=()=>{
    setIsGameStarted((prev)=> !prev);
  };

  return (

    <>
    {

      isGameStarted ? <GamePlay/> : <StartGame  
      toggle={toggleGamplay}
      /> 
    }
    
    </>
  )
}

export default App
