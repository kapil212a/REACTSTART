import "./Product.css";
function Product({title, price, features}){
    //const li = features.map((el) => <li>{el}</li>);
    let style = {backgroundColor : price > 25000 ? "pink" : ""}
    return(
        <div className="Product" style={style}>
            <h3>{title}</h3>
            <h5>Price : {price}</h5> 
            {price >25000 && <p>Discount of 5%</p>}
            {/* <p>{features}</p> */}
        </div>
    );
}

export default Product;