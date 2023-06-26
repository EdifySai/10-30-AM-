import { useState, useRef } from "react";
import { API } from '../../utils/constants';
import APIHOC from '../../HOCs/APIHOC/APIHOC';

function Admin(props) {
    const [product, setProduct] = useState({
        productId: '',
        name: '',
        price: '',
        description: '',
        imageURL: ''
    });


    const updateState = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setProduct({ ...product, [name]: value })
    }
    const formRef = useRef();
    const alertRef = useRef();

    const addProduct = (event) => {
        event.preventDefault();
        console.log("product", product);
        props.postRequest(API.addProduct, product).then(
            response => {
                console.log("response", response);
                formRef.current.reset();
                alertRef.current.style.display = "block";
            },
            error => {
                console.log("error", error);
            }
        )
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Add Product</h1>
            <div className="container mt-3">
                <div ref={alertRef} style={{ display: "none" }} class="alert alert-success alert-dismissible">
                    <strong>Product Added Successfully!</strong>
                </div>
                <br></br>
                <h4 style={{ textAlign: "left" }}>Login Here</h4> <br></br>
                <form ref={formRef}>
                    <div className="row">
                        <div className="col">
                            <input type="text" onChange={updateState} className="form-control" placeholder="Enter productId" name="productId" />
                        </div>
                        <div className="col">
                            <input type="text" onChange={updateState} className="form-control" placeholder="Enter name" name="name" />
                        </div>
                    </div> <br></br><br></br>
                    <div className="row">
                        <div className="col">
                            <input type="number" onChange={updateState} className="form-control" placeholder="Enter price" name="price" />
                        </div>
                        <div className="col">
                            <input type="text" onChange={updateState} className="form-control" placeholder="Enter description" name="description" />
                        </div>
                    </div><br></br><br></br>
                    <div className="row">
                        <div className="col">
                            <input type="text" onChange={updateState} className="form-control" placeholder="Enter imageURL" name="imageURL" />
                        </div>
                        <div className="col">
                            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}
export default APIHOC(Admin, null);
// export default APIHOC(Admin, null);