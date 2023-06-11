import { Link } from 'react-router-dom';
import logo from '/logo.png'

const Header = () => {
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
                        <li><Link to="/order">Shop</Link></li>
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
                        <li><Link to="/order">Shop</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="text-2xl font-thin uppercase">Account</Link>
            </div>
        </div>
    );
};

export default Header;