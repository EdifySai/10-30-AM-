import { useState, useRef, useEffect } from "react";
import { API } from '../../utils/constants';
import APIHOC from '../../HOCs/APIHOC/APIHOC';
import './Home.css';
function Home(props) {

    const [products, setProducts] = useState([]);

    const renderProductList = () => {

        var list = products.map((product, i) => {
            return <div key={product.productId} className="col-md-3 col-sm-6">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="#">
                            <img className="pic-1" src={product.imageURL} style={{ width: '154px', height: '201px' }} />
                            {/* <img className="pic-2" src="https://www.w3schools.com/bootstrap4/img_avatar3.png" /> */}
                        </a>
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

    useEffect(() => {
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
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://img.global.news.samsung.com/in/wp-content/uploads/2018/04/Key-Visual.jpg" alt="Los Angeles" className="d-block" width="100%" height="450px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.news18.com/ibnlive/uploads/2022/04/flipkart-164923687316x9.jpg" alt="Chicago" className="d-block" width="100%" height="450px" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://assets.thehansindia.com/hansindia-bucket/9894_FLIPKART.jpg" alt="New York" className="d-block" width="100%" height="450px" />
                    </div>
                </div>


                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>
            <br></br>
            <hr></hr>

            <div className="container">
                <h3 className="h3">Top Products </h3>
                <div className="row">
                    {renderProductList()}
                </div>
            </div>
        </div>
    )

}
export default APIHOC(Home, null);