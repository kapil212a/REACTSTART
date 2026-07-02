import SalePrice from "./SalePrice";

import "./SaleCard.css";
function SaleCard({name, discription, about, idx}){
    let oldPrices = ["12495", "11900", "1599", "599"];
    let newPrices = ["8999", "9199", "899", "278"];
    return(
        <div className="Card">
            <h2>{name}</h2>
            <p>{discription}</p>
            <p>{about}</p>
            <SalePrice oldPrice = {oldPrices[idx]} newPrice = {newPrices[idx]}/>
        </div>
    );
}

export default SaleCard;