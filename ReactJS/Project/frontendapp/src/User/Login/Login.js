import React, { useState } from 'react';
const Login = () => {
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
    };
    return (
        <div className="container mt-3">
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
        </div>
    );
};
export default Login;

