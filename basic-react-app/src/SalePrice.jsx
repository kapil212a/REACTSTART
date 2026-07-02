function SalePrice({oldPrice , newPrice}){
    let old = {
        textDecoration : "line-through",
    };
    

    return(
        <div style = {{ backgroundColor : "yellow" }}>
            <span style = {old}>{oldPrice}</span>
            &nbsp; &nbsp;
            <span style = {{ fontWeight : "bold" }}>{newPrice}</span>
        </div>
    );
}

export default SalePrice;