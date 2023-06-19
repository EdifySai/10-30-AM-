import { connect } from 'react-redux';
function Dashboard(props) {
    return (
        <div>
            <h1>{props.products.length}</h1>
            {props.products.length > 0 ? props.products[0].title : ''}
        </div>
    )
}
function mapStateToProps(appState) {
    return { products: appState.products }
}

export default connect(mapStateToProps, null)(Dashboard)
