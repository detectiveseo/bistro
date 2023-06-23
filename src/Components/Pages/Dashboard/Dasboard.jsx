import { useContext, useState } from 'react';
import { AuthContext } from '../../Proveiders/AuthProviders';
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import { HiHome } from 'react-icons/hi';
import { SiFoodpanda } from 'react-icons/si';
import { RiBookletFill, RiContactsFill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa';
import { MdOutlineRestaurantMenu, MdPayments } from 'react-icons/md';
import { BsCalendar2DateFill, BsFillStarFill } from 'react-icons/bs';
import Swal from 'sweetalert2'


const Dasboard = () => {
    const { singOutUser, user } = useContext(AuthContext);
    const [isAdmin, setAdmin] = useState(false);

    const handleSingOutUser = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will Have to login again for order foods",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '/3085d6',
            cancelButtonColor: '/d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Yes, Sign Out!',
                    'Log OUT done',
                    'success'
                )
                singOutUser();
            }
        })
    }

    return (
        <>
            {!user ? <Navigate to="/login"></Navigate> :
                <div className="drawer lg:drawer-open">
                    <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content flex flex-col px-5 py-10">
                        <Outlet />
                        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 h-full bg-[#D1A054] text-white flex flex-col justify-between">
                            {/* Sidebar content here */}
                            <div className='flex flex-col gap-3'>
                                {isAdmin ? <>
                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><HiHome />Admin Home
                                        </NavLink>
                                    </li>


                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><SiFoodpanda />Add Items
                                        </NavLink>
                                    </li>


                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><RiBookletFill /> Bookings
                                        </NavLink>
                                    </li>


                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><FaUsers /> All Users
                                        </NavLink>
                                    </li></> : <>
                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><BsCartFill />User Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><BsCalendar2DateFill /> Reservation
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><MdPayments /> Payment
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="cart"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><BsCartFill /> Cart
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/"
                                            className={({ isActive }) => isActive ? "active" : "notActive"} ><BsFillStarFill /> Add Review
                                        </NavLink>
                                    </li>
                                </>}

                                <hr />



                                <li>
                                    <NavLink to="/"
                                        className={({ isActive }) => isActive ? "active" : "notActive"} ><BsCartFill /> Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"
                                        className={({ isActive }) => isActive ? "active" : "notActive "} ><MdOutlineRestaurantMenu /> Menu
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="http://localhost:5173/order/salad"
                                        className={({ isActive }) => isActive ? "active" : "notActive"} ><BsCartFill /> Shop
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/"
                                        className={({ isActive }) => isActive ? "active" : "notActive"} ><RiContactsFill /> Contact
                                    </NavLink>
                                </li>
                            </div>

                            <button
                                onClick={handleSingOutUser}
                                className='btn btn-primary bg-black border-0'>Log out</button>
                        </ul>

                    </div>
                </div>}

        </>
    );
};

export default Dasboard;