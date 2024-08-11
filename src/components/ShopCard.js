import React from 'react';
import './ShopCard.css';



function ShopCard({ productInfo }) {   // productInfo is an object from the productsList array 

    console.log(productInfo)


    return (

        <div className='card'>
            <h2>{productInfo.name}</h2>
            <h3>{productInfo.color}</h3>
            <img className='cardImg' src={productInfo.img}></img>
            <div className='cardFooter'>
                <div>{'$' + productInfo.price}</div>
                <div className='cardCart'>add to cart</div>
            </div>
            

        </div>

    )

}


export default ShopCard;