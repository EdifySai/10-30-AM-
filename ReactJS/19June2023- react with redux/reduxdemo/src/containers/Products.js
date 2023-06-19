
import { getProducts } from '../action/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
function Products(props) {
    const fetchProducts = () => {
        props.getProductsAction();
    }
    return (
        <div>
            <button onClick={fetchProducts}>Fetch Products</button>
        </div>
    )
}
function mapDispatchToProps(dispatch) {

    return new bindActionCreators({ getProductsAction: getProducts }, dispatch)
}


export default connect(null, mapDispatchToProps)(Products)