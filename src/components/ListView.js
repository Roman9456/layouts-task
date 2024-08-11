import React from 'react';
import ShopItem from './ShopItem';
import './ListView.css';


function ListView({ productsList }) {   // productsList is an array of objects


    console.log(productsList);

    let index = 0;   // needed to set the key attribute of the array element, which helps identify the changed element


    return (

        <div className='listView'>
            {
                productsList.map(item =>
                    <div key={index = index + 1}>
                        <ShopItem productInfo={item} />
                    </div>
                )
            }
        </div>
        // we output the <ShopItem /> component through the map array method, as many times as there are objects in the productsList array, and pass the array element (object) as a prop
    )


}


export default ListView;