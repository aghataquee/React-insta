import {useState} from "react";
import './Counter.css';
function Counter(){

    const [counter,setcounter]=useState(0);
    const handle_increment=()=>{
        setcounter(counter+1);
    }
    const handle_decrement=()=>{
        setcounter(counter-1);
    }
    
    
    return (
        <div className="counter">
            <h1 >Counter Web App</h1>
            <div className="buttons">
                <div>
                    <h1 className="cnter">{counter}</h1>
                </div>
                <div className="btns">
                <button onClick={handle_increment}>Increment</button>
                <button onClick={handle_decrement}>Decrement</button>
                </div>
    
            </div>
                

        </div>
        
    )
}
export default Counter;