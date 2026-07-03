function doSomething(){
        console.log("Hello")
}
function bye(){
    console.log("Bye!")
}

export default function Button(){
    return(
        <div>
            <button onClick={doSomething}>click me!</button>
            <p onClick={bye}>Hi Click Me!</p>
        </div>
    );
}