import React, { useState, useRef } from 'react';
import APIHOC from '../../HOCs/APIHOC/APIHOC';
import { API } from '../../utils/constants';
import { Link } from 'react-router-dom';
const Register = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const formRef = useRef();
    const alertRef = useRef();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic here
        console.log('Username:', username);
        console.log('Password:', password);
        console.log("email", email);
        console.log("props", props);
        var body = {
            username: username,
            password: password,
            email: email,
            userId: new Date().valueOf()
        }

        props.postRequest(API.register, body).then(
            response => {
                console.log("response", response);
                formRef.current.reset();
                alertRef.current.style.display = "block";
            },
            error => {
                console.log("error", error);
            }
        )
    };
    return (
        <div className="container mt-3">

            <div ref={alertRef} style={{ display: "none" }} class="alert alert-success alert-dismissible">
                <strong>Registration Success!</strong> Click here to <Link to="/login">Login</Link>
            </div>
            <br></br>
            <h4 style={{ textAlign: "left" }}>Register Here</h4> <br></br>
            <form ref={formRef}>
                <div className="row">
                    <div className="col">
                        <input type="text" onChange={handleUsernameChange} className="form-control" placeholder="Enter username" name="username" />
                    </div>
                    <div className="col">
                        <input type="password" onChange={handlePasswordChange} className="form-control" placeholder="Enter password" name="password" />
                    </div>

                    <div className="col">
                        <input type="text" onChange={handleEmailChange} className="form-control" placeholder="Enter email" name="email" />
                    </div>
                    <div className="col">
                        <button onClick={handleSubmit} className="btn btn-primary">Register</button>
                    </div>
                </div>
            </form>
        </div>
    );
};
export default APIHOC(Register, null);