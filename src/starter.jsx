import './App.css';
import CountdownTimer from './CountdownTimer';
import { useState } from 'react';
import Clock, { ClockClassComponent } from './Clock/Clock';
export function Start(){
    var [put,setPut] = useState(<CountdownTimer/>)
    var [click,SetClick] = useState(false);
    return(
        <div>
        <button onClick={lancer}>Clock</button>
        </div>
    )
    function  lancer(){
        if(SetClick === true){
            console.log("ok")
            return(
                <div>
                    <ClockClassComponent/>
                </div>
            )
        }
       else{
        return(
           <>
             <CountdownTimer/>
           </>
          )
       }
     
   }
}