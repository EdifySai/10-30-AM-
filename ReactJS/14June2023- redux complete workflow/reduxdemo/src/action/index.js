import axios from 'axios';
export default function getProducts() {
    console.log("I am in get products action");
    // API call
    // axios.get('https://fakestoreapi.com/products').then(
    //     (response) =>{
    //        console.log("response", response);
    //     } 
    // )

    var promise = axios.get('https://fakestoreapi.com/products');
    return {
        payload: promise,
        type: 'GET_PRODUCTS'
    }
}

