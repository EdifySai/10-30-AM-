// import { useNavigate } from 'react-router';
// import { useEffect } from 'react';
// function Dashboard() {
//     var navigate = useNavigate();
//     // navigate("/product-view");
//     // console.log(localStorage.getItem("clickOnBuy"));
//     useEffect(() => {
//         if (localStorage.getItem("clickOnBuy")) {
//             localStorage.removeItem("clickOnBuy");
//             navigate("/product-view");
//         }
//     })
//     return (
//         <div>

//         </div>
//     )
// }
// export default Dashboard;

import { useState, useRef, useEffect } from "react";
import { API } from '../../utils/constants';
import APIHOC from '../../HOCs/APIHOC/APIHOC';
import './Dashboard.css';
import { useNavigate } from "react-router";
function Dashboard(props) {

    const navigate = useNavigate();

    const [products, setProducts] = useState([]);

    const renderProductList = () => {
        var list = products.map((product, i) => {
            return <div key={product.productId} className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">

                        <img onClick={() => moveToProductView(product)} className="pic-1" src={product.imageURL} style={{ width: '154px', height: '201px' }} />
                        {/* <img className="pic-2" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" /> */}

                        {/* <ul className="social">
                           <li><a href="" data-tip="Quick View"><i className="fa fa-search"></i></a></li>
                           <li><a href="" data-tip="Add to Wishlist"><i className="fa fa-shopping-bag"></i></a></li>
                           <li><a href="" data-tip="Add to Cart"><i className="fa fa-shopping-cart"></i></a></li>
                       </ul> */}
                        {/* <span className="product-new-label">Sale</span>
                       <span className="product-discount-label">20%</span> */}
                    </div>
                    <ul className="rating">
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star"></li>
                        <li className="fa fa-star disable"></li>
                    </ul>
                    <div className="product-content">
                        <h3 className="title"><a href="#">{product.name}</a></h3>
                        <div className="price">Rs.{product.price}
                            {/* <span>$20.00</span> */}
                        </div>
                        {/* <a className="add-to-cart" href="">+ Add To Cart</a> */}
                    </div>
                </div>
            </div>
        })
        return list;
    }
    const moveToProductView = (product) => {
        console.log(product);
        localStorage.setItem('product', JSON.stringify(product));
        navigate("/product-view");
    }
    useEffect(() => {
        if (localStorage.getItem("clickOnBuy")) {
            localStorage.removeItem("clickOnBuy");
            navigate("/product-view");
        }
        getProductsList();

    }, [])

    const getProductsList = () => {
        props.getRequest(API.listProducts).then(
            response => {
                console.log("response", response.data);
                setProducts(response.data);
            },
            error => {
                console.log("error", error);
            }
        )
    }
    return (
        <div>
            <div className="container">
                <h3 className="h3">Top Products </h3>
                <div className="row">
                    {renderProductList()}
                </div>
            </div>
        </div>
    )

}
export default APIHOC(Dashboard, null);



/*

Enhancements to the project:

1. dynamic navbar - for user and admin

2. logout -> remove the isUserLoggedIn entry from local storage

3. Implement search feature in the home page.

4. Self learn on
useCallback Hook
useMemo Hook
useReducer Hook
*/