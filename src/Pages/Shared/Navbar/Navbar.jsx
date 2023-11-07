import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";
import logo from '../../../assets/login/logo1.jpg'


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="jobs">Add Job</NavLink></li>
        <li><NavLink to="/posted">My Posted Jobs</NavLink></li>
        <li><NavLink to="/bids">My Bids</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 my-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className=" flex items-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className=" w-[200px] h-[100px]  -mt-6" src={logo} alt="" />
                    </Link>
                    <h1 className=" text-3xl font-bold">Get<span className=" text-orange-600">Job</span></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <img className=" rounded-full mr-4" src={user?.photoURL} alt="" />
                <p className="mr-4">{user?.email}</p>
                {
                    user ?
                        <button onClick={handleSignOut} className="btn">LogOut</button>
                        :
                        <Link to="/login">
                            <button className="btn">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;