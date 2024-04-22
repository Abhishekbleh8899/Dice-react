import styled from "styled-components"
import NumberSelect from "./NumberSelect"
import TotatScore from "./TotatScore"
import RollDice from "./RollDice"
import { useState } from "react"
import { Button, OutlineButton } from "../styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
    const [score , setScore]=useState(0);
    const [selectedNumber, setSelecetedNumber]=useState();
    const [currentDice, setCurrentDice]=useState(1);
    const [error , setError]=useState("");
    const[showRules , setShowRules]=useState(false)

    const generateRandomNumber=(min, max)=> {
        return Math.floor(Math.random() * (max - min) + min);
      }
    const rollDice=()=>{
        if(!selectedNumber) {
            setError("You have not selected any number")
            return;
        }

            setError("")
        const randomNumber=generateRandomNumber(1,7);
        setCurrentDice((prev)=>randomNumber)
        if(selectedNumber==randomNumber){
            setScore((prev)=>prev+randomNumber);
            
        }
        else{
            setScore((prev)=>prev-2)
        }

        setSelecetedNumber(undefined)
    }
    const resetScore=()=>{
        setScore(0)
    }


  return (
    <MainContainer>
        <div className="top_section">
        <TotatScore 
        score={score}
        />
        <NumberSelect 
        error={error}
        setError= {setError}
        selectedNumber={selectedNumber}
        setSelecetedNumber={setSelecetedNumber}
        />

        </div>
        <RollDice currentDice={currentDice}
        rollDice={rollDice}/>
        <div className="btn">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button onClick={()=>setShowRules((prev)=>!prev)}>{
                showRules ? "Hide " : "Show "
            } Rules</Button>
        </div>
      { showRules &&  <Rules/>}
    </MainContainer>
  )
}

export default GamePlay
const MainContainer=styled.main`
padding-top: 70px;
    .top_section{
        display: flex;
        justify-content:space-around;
        align-items: end;
    }
    .btn{
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
        align-items: center;
    }
`