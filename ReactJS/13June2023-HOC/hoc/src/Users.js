import { useState } from 'react';
import HOC from './HOC';
function Users(props) {
    return (
        <>
            <h1 onClick={props.updateCounter}>Users count is {props.counter}</h1>
        </>
    )
}
const UsersHOC = HOC(Users, 300);
export default UsersHOC;
