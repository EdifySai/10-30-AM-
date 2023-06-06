import { useState, useEffect } from 'react';
import axios from 'axios';
function Product() {
    const [product, setProduct] = useState({
        productId: "",
        name: "",
        price: "",
        description: "",
        imageURL: ""
    })
    const onFieldChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    useEffect(() => {
        getProducts();
    })

    const getProducts = () => {
        axios.get("http://localhost:9012/product/all").then(
            response => {
                console.log(response);
            },
            error => {
                console.log(error);
            }
        )
    }

    const addProduct = (event) => {
        event.preventDefault();
        console.log("product", product);
        axios.post("http://localhost:9012/product/add", product).then(
            response => {
                console.log(response);
                getProducts();
            }
            ,
            error => {
                console.log(error);
            }
        )
    }
    return (
        <form>
            <input onChange={onFieldChange} type="text" name="productId" placeholder="ProductId Here"></input> <br></br><br></br>
            <input onChange={onFieldChange} type="text" name="name" placeholder="name Here"></input> <br></br><br></br>
            <input onChange={onFieldChange} type="text" name="price" placeholder="price Here"></input> <br></br><br></br>
            <input onChange={onFieldChange} type="text" name="description" placeholder="description Here"></input> <br></br><br></br>
            <input onChange={onFieldChange} type="text" name="imageURL" placeholder="imageURL Here"></input><br></br><br></br>
            <button onClick={addProduct}>Add Product</button>
        </form>
    )
}
export default Product;