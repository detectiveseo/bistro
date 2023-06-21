import { useContext } from 'react';
import { AuthContext } from '../../Proveiders/AuthProviders';
import { Link, Navigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2'


const Dasboard = () => {
    const { singOutUser, user } = useContext(AuthContext);

    const handleSingOutUser = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You will Have to login again for order foods",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
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
            {!user? <Navigate to="/login"></Navigate> :
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content flex flex-col justify-between">
                        {/* Sidebar content here */}
                        <div>
                            <li><Link to="cart">Cart</Link></li>
                        </div>

                        <button
                            onClick={handleSingOutUser}
                            className='btn btn-primary'>Log out</button>
                    </ul>

                </div>
            </div>}

        </>
    );
};

export default Dasboard;