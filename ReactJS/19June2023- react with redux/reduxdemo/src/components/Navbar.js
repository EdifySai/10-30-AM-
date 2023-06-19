
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from '../containers/Dashboard';
import Products from '../containers/Products';
import Admin from '../containers/Admin';
import Users from '../containers/Users';
function Navbar() {
    return (
        <>
            <BrowserRouter>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">ECommerce App</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Home</a></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/dashboard" >Dashboard</Link></li>
                            <li><Link to="/admin">Admin</Link></li>
                            <li><Link to="/users">Users</Link></li>
                        </ul>
                    </div>
                </nav>
                <Routes>
                    <Route path="/products" element={<Products></Products>}></Route>
                    <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
                    <Route path="/admin" element={<Admin></Admin>}></Route>
                    <Route path="/users" element={<Users></Users>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Navbar;