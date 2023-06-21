import { Link } from 'react-router-dom';
import logo from '/logo.png'
import { useContext } from 'react';
import { AuthContext } from '../../Proveiders/AuthProviders';
import { FaShoppingCart } from 'react-icons/fa'
import useAddToCart from '../../../assets/Hooks/useAddToCart';
const Header = () => {
    const { user, loading } = useContext(AuthContext);
    const { carts } = useAddToCart();
    console.log(carts);
    return (
        <div className="navbar bg-black bg-opacity-10 text-white h-24 lg:fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden z-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/order/salad">Shop</Link></li>
                    </ul>
                </div>
                <Link to="/" className='p-5'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  text-2xl font-thin uppercase">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/order/salad">Order</Link></li>
                    <li><Link to="/order/salad"></Link></li>
                    <li className='btn bg-transparent text-white text-3xl'><Link to="/dashboard/cart">
                        <FaShoppingCart />
                        <div className="badge badge-primary badge-lg absolute -right-3 -top-3">+{carts?.length || 0}</div>
                    </Link></li>

                </ul>
            </div>
            <div className="navbar-end">
                {!loading ? <Link to={user ? "dashboard" : "login"} className="text-2xl font-thin uppercase">{user ? user.displayName : "Login"}</Link> : "loading"}
            </div>
        </div>
    );
};

export default Header;