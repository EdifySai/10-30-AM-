import { useState } from 'react';
import HOC from './HOC';
function Sellers(props) {
    return (
        <>
            <h1 onClick={props.updateCounter}>Sellers count is {props.counter}</h1>
        </>
    )
}
const SellersHOC = HOC(Sellers, 200);
export default SellersHOC;