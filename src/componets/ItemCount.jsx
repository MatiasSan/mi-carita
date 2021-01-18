import React from 'react'
import { useState } from "react";
import "./styles/itemCount.css";
export function ItemCount({stock}){

    const [quantity, setQuantity] = useState(0);

    function restar(){
       if(quantity > 0){
         setQuantity(quantity -1);
       }
    }
    function sumar () {
        if(quantity < stock){
            setQuantity(quantity +1);
        }
    }
    return (
        <div className="ItemCount_container">
            <h6>nombre del producto</h6>
            <div className="counter">
                <button onClick={() => restar()}>-</button>
                    <p>{quantity}</p>
                <button onClick={() => sumar()}>+</button>
            </div>
            <div>En stock {stock}</div>
        </div>
    )
}


export default ItemCount;