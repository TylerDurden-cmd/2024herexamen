import { useState } from "react"
import cherry from "/cherry.png"
import lemon from "/lemon.png"
import melon from "/melon.png"
import prum from "/prum.png"
import seven from "/seven.png"


const App = () => {

  const loterry : string[] = [cherry,lemon,melon,prum,seven];
  const [slot1,setSlot1] = useState<number>(Math.floor(Math.random() * loterry.length));
  const [slot2,setSlot2] = useState<number>(Math.floor(Math.random() * loterry.length));
  const [slot3,setSlot3] = useState<number>(Math.floor(Math.random() * loterry.length));
  
  



  const lotteryTicket = () =>{
    setSlot1(Math.floor(Math.random() * loterry.length))
    setSlot2(Math.floor(Math.random() * loterry.length))
    setSlot3(Math.floor(Math.random() * loterry.length))


  }

  return (
    <>
    <img src={cherry} alt="" style={{width: 150}}/>
    <img src={lemon} alt="" style={{width: 150}}/>
    <img src={melon} alt="" style={{width: 150}}/>
    <img src={prum} alt="" style={{width: 150}}/>
    <img src={seven} alt="" style={{width: 150}}/>
    

    <h3>{slot1 == slot2 && slot2 == slot3 ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}</h3>

    <img src={loterry[slot1]} alt="" style={{width: 150}}/>
    <img src={loterry[slot2]} alt="" style={{width: 150}}/>
    <img src={loterry[slot3]} alt="" style={{width: 150}}/>

    <input type="button" value='spin the wheel' onClick={() => {lotteryTicket()}}/>
    </>
  );
}

export default App;