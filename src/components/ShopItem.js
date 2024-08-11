import React from 'react';
import './ShopItem.css';



function ShopItem({ productInfo }) {   // productInfo is an object from the productsList array

    console.log(productInfo)


    return (

        <div className='item'>
            <img className='itemImg' src={productInfo.img}></img>
            <h2>{productInfo.name}</h2>
            <h3>{productInfo.color}</h3>
            
            <div>{'$' + productInfo.price}</div>
            <span className='itemCart'>add to cart</span>
        </div>

    )

}


export default ShopItem;