import React from "react";


function IconSwitch({ onSwitch }) {   //  onSwitch is a function for the onClick handler

    return (

        <div>
            <button onClick={onSwitch}>IconSwitch </button>
        </div>
        // onSwitch is the function passed to the onClick event handler
    )

}

export default IconSwitch;