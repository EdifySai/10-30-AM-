
import { getUsers } from '../action/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
function Users(props) {
    const fetchUsers = () => {
        props.getUsersAction();
    }
    return (
        <div>
            <button onClick={fetchUsers}>Fetch Users</button>
        </div>
    )
}
function mapDispatchToProps(dispatch) {

    return new bindActionCreators({ getUsersAction: getUsers }, dispatch)
}


export default connect(null, mapDispatchToProps)(Users)