import { useState } from "react"

export const useCounter =(ini=10)=>{
   const [counter, setcounter] = useState(ini)
   
   const incremento =()=>{
    setcounter(counter+1)
   }
//    resetear
const resetear = ()=>{
   setcounter(ini)
}
//    restar
const restar =()=>{
    setcounter(counter-1)
   }

    return  {
        counter, 
        incremento, restar, resetear
    }
    // lo que se pona en el return es lo que se va a destructurar al utilizar el hook
}