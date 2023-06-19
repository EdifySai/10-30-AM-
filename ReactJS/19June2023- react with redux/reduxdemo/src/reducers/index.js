
import { combineReducers } from 'redux';
import ProductsReducer from './Products';
import usersReducer from './Users';

const rootReducer = combineReducers(
    {
        products: ProductsReducer,
        users: usersReducer
    }
)
export default rootReducer;