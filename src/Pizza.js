import React, { useState } from 'react'

export default function Pizza() {
    const [state, setState] = useState([]);

    const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

    const ToggleEvent = (event) => {
        const value = event.target.value
        setState((pre) => {

            if (!pre.includes(value)) {
                return [...pre, value];
            } else {
                return pre.filter((item) => {
                    return item !== value;
                })
            }
        })
    }


    return (
        <div>
            {options.map((item) => {

                return <button onClick={ToggleEvent} value={item} >{state.includes(item) ? `remove ${item}` : `Add ${item}`}</button>

            })}

            <p>Order a {state.join(", ")} pizza</p>
        </div>
    )
}
