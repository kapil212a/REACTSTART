function formHandler(event){
    event.preventDefault();
    console.log("Form is submit")
}
export default function(){
    return(
        <form>
            <input placeholder="Write-Somthhing"/>
            <button onClick={formHandler}>Submit</button>
        </form>
    )
}