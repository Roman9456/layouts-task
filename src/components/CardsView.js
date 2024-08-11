import React from 'react';
import ShopCard from './ShopCard';
import './CardsView.css';


function CardsView({ productsList }) {   // productsList is an array of objects


    console.log(productsList);

    let index = 0;   // needed to set the key attribute of the array element, which helps identify the changed element


    return (
        
        <div className='cardsView'>
            {
                productsList.map(item =>
                    <div key={index = index + 1}>   
                        <ShopCard productInfo={item} />
                    </div>    
                )
            }    
        </div>
        //  output the <ShopCard /> component through the map array method, as many times as there are objects in the productsList array, and pass the array element (object) as a prop
    )


}


export default CardsView;