import { useState } from "react";

export default function LikeButton(){
    let [isLike , setIsLiked] = useState(false);
    let [click, setClick] = useState(0);

    let clicked = () =>{
        setIsLiked(!isLike);
        setClick(click + 1);
    }

    let st = {color : "red"};
    return(
        <div>
            <p>count = {click}</p> 
            <p onClick={clicked}>{isLike ? <i className ="fa-solid fa-heart" style={st} ></i> : <i className ="fa-regular fa-heart"></i>}</p>
        </div>
    )
}