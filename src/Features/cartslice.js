import React from 'react'
import {useCart}  from "react-use-cart"

const Cartslice = () =>{
    const{
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();


    if(isEmpty) return <div>Cart Empty</div>


  return (

    <div>
        <h5>Cart({totalUniqueItems})totalItems:({totalItems})</h5>
        <div>Hlo</div>
    </div>
  )
}

export default Cartslice