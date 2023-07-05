import { useNavigate } from "react-router";
import axios from 'axios';
function ProductView() {
    var navigate = useNavigate();
    var product = JSON.parse(localStorage.getItem('product'));
    const buy = () => {
        var isUserLoggedIn = localStorage.getItem("isUserLoggedIn");
        if (isUserLoggedIn) {
            displayRazorpay();
        }
        else {
            localStorage.setItem("clickOnBuy", true);
            navigate("/login");
        }
    }
    console.log("product", product);

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        var obj = { amount: 10000, currency: "INR", receipt: "64738" }
        // creating a new order
        const result = await axios.post("http://localhost:9012/createOrder", obj);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }

        console.log("result", result);
        // Getting the order details back

        const options = {
            key: "rzp_test_hVXZWHikHZjVZC", // Enter the Key ID generated from the Dashboard
            amount: obj.amount.toString(),
            currency: obj.currency,
            name: "Soumya Corp.",
            description: "Test Transaction",
            order_id: result.data.id,
            handler: async function (response) {
                // const data = {
                //     orderCreationId: order_id,
                //     razorpayPaymentId: response.razorpay_payment_id,
                //     razorpayOrderId: response.razorpay_order_id,
                //     razorpaySignature: response.razorpay_signature,
                // };
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <div>

            <div style={{ marginLeft: "200px", marginTop: "200px" }} className="col-md-2 column productbox">
                <img src={product.imageURL} className="img-responsive" />
                <div className="producttitle">{product.name}</div> <br></br>
                <div className="pricetext">${product.price}</div> <br></br>
                <div className="productprice"><div className="pull-left"><button onClick={() => {
                    navigate("/");
                }} className="btn btn-warning btn-sm" role="button">Back</button></div><div className="pull-right"><button onClick={buy} className="btn btn-success btn-sm" role="button">BUY</button></div></div>
            </div>

        </div>
    )
}
export default ProductView;