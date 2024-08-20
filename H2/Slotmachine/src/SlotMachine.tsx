import { useState } from "react";

interface ISlotmachine {
    slots:number;
}   
const SlotMachine = (prop:ISlotmachine) => {
    const [slots,SetSlots] = useState<string>()
    const SlotsArray:string = [] 
    for(let i = 0; i < prop.slots;i++){
        SetSlots()
    }
    return (
        <>

        </>
    );
}

export default SlotMachine;