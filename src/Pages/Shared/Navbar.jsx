
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import ActiveLink from "../Components/ActiveLink";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navElements = <>
        <li><ActiveLink to='/'>Home</ActiveLink></li>
        <li><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
        {
            user ? <>
                <li><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                <li><ActiveLink to='/add-toys'>Add a Toy</ActiveLink></li>
            </>
            :
            <></>
        }
        <li><ActiveLink to='/blog'>Blogs</ActiveLink></li>
        {
            user ? <ActiveLink><button onClick={() => logOut()} className="btn btn-primary lg:hidden">Logout</button></ActiveLink> : <ActiveLink to="/login"><button className="btn btn-primary lg:hidden">Login</button></ActiveLink>
        }

    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">

                <Link to='/' className="btn btn-ghost normal-case text-3xl font-bold">Play KiD</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navElements}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user &&
                    <>
                        {
                            user.photoURL ?
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : ''}>
                                    <img className='w-12 h-12 rounded-full border-4 border-gray-400 mr-2' src={user.photoURL} />
                                </div> :
                                <div className="tooltip tooltip-bottom" data-tip={user.displayName ? user.displayName : ''}>
                                    <FaUserCircle className='w-12 h-12 rounded-full border-4 border-gray-600 mr-2'></FaUserCircle>
                                </div>

                        }

                    </>
                }
                {
                    user ? <ActiveLink><button onClick={() => logOut()} className="btn btn-primary hidden lg:block">Logout</button></ActiveLink> : <ActiveLink to="/login"><button className="btn btn-primary hidden lg:block">Login</button></ActiveLink>
                }
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navElements}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;