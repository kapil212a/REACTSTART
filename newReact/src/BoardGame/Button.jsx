import { useState } from "react"

export default function Button(title){
    
    let [moves , setmoves] = useState({blue: 0, red : 0, yellow: 0, green:0});
    function updateBlue(){
        moves.blue += 1;
        setmoves({ ...moves});
    }
    function updateYellow(){
        moves.yellow += 1;
        setmoves({ ...moves});
    }
    function updateGreen(){
        moves.green += 1;
        setmoves({ ...moves});
    }
    function updateRed(){
        moves.red += 1;
        setmoves({ ...moves});
    }

    return(
        <div>
            <p>Game Start</p>
            <div className="board">
                <h3>Blue moves : {moves.blue}</h3>
                <button  style = {{backgroundColor : "blue"}}onClick={updateBlue}>+1</button>

                <h3>Yellow moves : {moves.yellow}</h3>
                <button style = {{backgroundColor : "yellow", color : "black"}}onClick={updateYellow}>+1</button>

                <h3>Green moves : {moves.green}</h3>
                <button style = {{backgroundColor : "green"}}onClick={updateGreen}>+1</button>

                <h3>Red moves : {moves.red}</h3>
                <button style = {{backgroundColor : "red"}}onClick={updateRed}>+1</button>
            </div>
        </div>
    )
}