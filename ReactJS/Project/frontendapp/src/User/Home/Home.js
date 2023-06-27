import { useState, useRef, useEffect } from "react";
import { API } from '../../utils/constants';
import APIHOC from '../../HOCs/APIHOC/APIHOC';
function Home(props) {

    const [products, setProducts] = useState([]);

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
        </div>
    )

}
export default APIHOC(Home, null);