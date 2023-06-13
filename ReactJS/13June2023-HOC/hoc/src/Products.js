import { useState } from 'react';
import HOC from './HOC';
function Products(props) {

    return (
        <>
            <h1 onClick={props.updateCounter}>Products count is {props.counter}</h1>
        </>
    )

}

const ProductHOC = HOC(Products, 120);

export default ProductHOC;