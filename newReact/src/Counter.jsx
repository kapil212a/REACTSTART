export default function Counter(){
    let count = 0;

    function increaseCount(){
        count += 1;
        console.log(count);
    }
    return(
        <div>
            <h1>Count = {count}</h1>
            <button onClick={increaseCount}>Increase Count</button>
        </div>
    )
}