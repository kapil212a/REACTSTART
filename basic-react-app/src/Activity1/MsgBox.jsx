function MsgBox({name , textcolor}){
    let styles = {color : textcolor}
    return(
            <h2 style = {styles}> Hello , {name}</h2>
    )
}
export default MsgBox;