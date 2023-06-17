import { useContext } from 'react';
import { AuthContext } from '../../Proveiders/AuthProviders';
import { Navigate } from 'react-router-dom';

const Dasboard = () => {
    const { singOutUser, user } = useContext(AuthContext);
    console.log(user)

    return (
        <>
            {!user? <Navigate to="/login"></Navigate> :
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content flex flex-col justify-between">
                        {/* Sidebar content here */}
                        <div>
                            <li><a>Sidebar Item 1</a></li>
                            <li><a>Sidebar Item 2</a></li>
                        </div>

                        <button
                            onClick={() => singOutUser()}
                            className='btn btn-primary'>Log out</button>
                    </ul>

                </div>
            </div>}

        </>
    );
};

export default Dasboard;