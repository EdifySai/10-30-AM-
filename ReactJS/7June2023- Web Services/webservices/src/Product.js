import { useState, useEffect } from 'react';
import axios from 'axios';
function Product() {
    const renderProductsList = () => {
        let allProducts = products.map((product) => {
            return <tr key={product.productId}><td>{product.productId}</td><td>{product.name}</td><td>{product.price}</td><td><button onClick={() => deleteProduct(product.productId)}>Delete</button></td><td><button>Edit</button></td></tr>
        })
        return allProducts;
    }
    const [product, setProduct] = useState({
        productId: "",
        name: "",
        price: "",
        description: "",
        imageURL: ""
    })

    const [products, setProducts] = useState([])
    const onFieldChange = (event) => {
        setProduct({ ...product, [event.target.name]: event.target.value })
    }
    useEffect(() => {
        getProducts();
    }, [])
    const getProducts = () => {
        axios.get("http://localhost:9012/product/all").then(
            response => {
                console.log(response);
                setProducts(response.data);
            },
            error => {
                console.log(error);
            }
        )
    }
    const deleteProduct = (productId) => {
        console.log("productId", productId);
        axios.delete("http://localhost:9012/product/delete/" + productId).then(
            response => {
                console.log(response);

                if (response.data.statusCode == 200) {
                    getProducts();
                }
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
        <div>
            <form>
                <input onChange={onFieldChange} type="text" name="productId" placeholder="ProductId Here"></input> <br></br><br></br>
                <input onChange={onFieldChange} type="text" name="name" placeholder="name Here"></input> <br></br><br></br>
                <input onChange={onFieldChange} type="text" name="price" placeholder="price Here"></input> <br></br><br></br>
                <input onChange={onFieldChange} type="text" name="description" placeholder="description Here"></input> <br></br><br></br>
                <input onChange={onFieldChange} type="text" name="imageURL" placeholder="imageURL Here"></input><br></br><br></br>
                <button onClick={addProduct}>Add Product</button>
            </form>

            <hr></hr>

            <table border="1" style={{
                width: "100%"
            }}>
                <thead>
                    <tr>
                        <th>Product Id</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th colSpan="2">Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {renderProductsList()}
                </tbody>
            </table>

        </div >
    )
}
export default Product;