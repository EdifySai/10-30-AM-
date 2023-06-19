import axios from 'axios';
export function getProducts() {
    console.log("I am in get products action");
    var promise = axios.get('https://fakestoreapi.com/products');
    return {
        payload: promise,
        type: 'GET_PRODUCTS'
    }
}
export function getUsers() {
    console.log("I am in get products action");
    var promise = axios.get('https://jsonplaceholder.typicode.com/users');
    return {
        payload: promise,
        type: 'GET_USERS'
    }
}


