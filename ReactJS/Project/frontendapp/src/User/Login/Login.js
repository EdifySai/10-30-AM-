import React, { useState, useRef } from 'react';
import { API } from '../../utils/constants';
import APIHOC from '../../HOCs/APIHOC/APIHOC';

const Login = (props) => {
    const alertRef = useRef();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        var body = {
            username: username,
            password: password
        }
        props.postRequest(API.login, body).then(
            response => {
                console.log("response", response);
                // formRef.current.reset();
                // alertRef.current.style.display = "block";
            },
            error => {
                if (error) {
                    alertRef.current.style.display = "block";
                }
            }
        )
    };
    return (
        <div className="container mt-3">

            <div ref={alertRef} style={{ display: "none" }} class="alert alert-danger alert-dismissible">
                <strong>Login Failed!</strong> Please try again
        </div>
            <br></br>
            <h4 style={{ textAlign: "left" }}>Login Here</h4> <br></br>
            <form>
                <div className="row">
                    <div className="col">
                        <input type="text" onChange={handleUsernameChange} className="form-control" placeholder="Enter username" name="username" />
                    </div>
                    <div className="col">
                        <input type="password" onChange={handlePasswordChange} className="form-control" placeholder="Enter password" name="password" />
                    </div>
                    <div className="col">
                        <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        </div >
    );
};
const LoginHOC = APIHOC(Login, null);
export default LoginHOC;


