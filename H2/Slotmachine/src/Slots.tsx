import cherry from "/cherry.png"
import lemon from "/lemon.png"
import melon from "/melon.png"
import prum from "/prum.png"
import seven from "/seven.png"


export interface ISlots {
    value:number;
}

const loterry : string[] = [cherry,lemon,melon,prum,seven];
const Slots = (prop:ISlots) => {
    return(
        <>
        <img src={loterry[prop.value]}/>
        </>
    );
}

export default Slots;