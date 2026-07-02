import Product from "./Product.jsx";
import "./MsgBox.jsx";
import MsgBox from "./MsgBox.jsx";
function ProductTab(){
    let option = ["hi-tech" , "durable", "fast"];
    // let option2 = {a : "hi-tech" , b : "durable" , c : "fast"};
    return(
        <div>
            <Product title = "laptop" price = {30000} features = {option}/>
            <Product title = "phone" price = {20000}/>
            <Product title = "pen" price = {10}/>
        </div>
    );
}

export default ProductTab;