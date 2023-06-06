import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp';
import YoutubeHome from '../YoutubeHome';
function Navbar() {

    return (
        <div>
            <BrowserRouter>

                <Link to="/home">Home</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/register">Sign Up</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/login">Login</Link> &nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/youtube">Youtube</Link>

                <Routes>

                    <Route path="/home" element={<Home></Home>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<SignUp></SignUp>}></Route>
                    <Route path="/youtube" element={<YoutubeHome></YoutubeHome>}></Route>


                </Routes>

            </BrowserRouter>

        </div>
    )

}
export default Navbar;