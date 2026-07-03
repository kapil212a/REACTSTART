import SaleCard from "./SaleCard.jsx";
import SalePrice from "./SalePrice.jsx";
function CardTab(){
    let styles = {
        display : "flex",
        flexWrap : "wrap"
    }
    return(
        <div style = {styles}>
            <SaleCard name = "Logitech MX Master" discription = "8000 DPI"  about = "5 Programmable Buttons" idx = {0}/>

            <SaleCard name = "Apple Pencil (2nd Gen" discription = "Intutive Touch Surface" about = "Designed for iPad Pro" idx = {1}/>

            <SaleCard name = "Zebronics" discription = "Designed for iPad Pro" about = "Intutive Touch Surface" idx = {2}/>
            
            <SaleCard name = "Petronics Toad" discription = "Wireless Mouse 2.4GHz" about = "Optical Orientation" idx = {3}/>
            

        </div>
    );
}

export default CardTab;