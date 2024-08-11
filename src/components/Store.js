import React, { useState } from "react";   // import { useState } when using state
import IconSwitch from "./IconSwitch";
import CardsView from './CardsView';
import ListView from './ListView';




function Store({ productsList }) {   // productsList is an array of objects from App.js

    // we use state to change the display of products
    const [view, setView] = useState("cards");   // second state is items

    // Function for event handlers (when clicking the button)
    function viewSwitch() {


        if (view === "cards") {   // if the view state is "cards"
            setView("items")   // then set the new state to "items"
        } else {   // otherwise
            setView("cards")   // set the new state to "cards"
        }

        console.log(view);
    }

    console.log(productsList);

    
    return (

        <div>
            {/* viewSwitch is the function that will be passed to the onClick handler of the IconSwitch component */}
            <IconSwitch onSwitch={viewSwitch} />   
            
            {/* We use a ternary operator. If the view state is "cards", we render the <CardsView /> component, otherwise we render the <ListView /> component */}
            {view === "cards" ? <CardsView productsList={productsList} /> : <ListView productsList={productsList} />}

        </div>

    )


}


export default Store;