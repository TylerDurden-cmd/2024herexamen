import { useState } from "react"
import cherry from "/cherry.png"
import lemon from "/lemon.png"
import melon from "/melon.png"
import prum from "/prum.png"
import seven from "/seven.png"

const App = () => {

  const slotsImages : string[] = [cherry,lemon,melon,prum,seven];
  const [rndNumbers,SetRndNumbers] = useState<number[]>([
    Math.floor(Math.random() * slotsImages.length),
    Math.floor(Math.random() * slotsImages.length),
    Math.floor(Math.random() * slotsImages.length),
    Math.floor(Math.random() * slotsImages.length),
    Math.floor(Math.random() * slotsImages.length)]);

    const RndGenerator = () => {
      SetRndNumbers([Math.floor(Math.random() * slotsImages.length),
        Math.floor(Math.random() * slotsImages.length),
        Math.floor(Math.random() * slotsImages.length),
        Math.floor(Math.random() * slotsImages.length),
        Math.floor(Math.random() * slotsImages.length)])
    }

    const trueFalse: boolean = rndNumbers.every((number) => number === rndNumbers[0]);

  return (
  <>
  {slotsImages.map((slots:string,index:number)=>
  <img src={slots} alt="" key={index} style={{width: 150}}/>
)}
{trueFalse == true ? <p>Je hebt gewonnen</p> : <p>Je hebt verloren</p>}
{rndNumbers.map((slot:number, index:number)=>
<img src={slotsImages[slot]} alt="" style={{width: 150}} key={index}/>
)}

<input type="button" value="spin the wheel" onClick={() => RndGenerator()}/>
  </>
  );
}

export default App;