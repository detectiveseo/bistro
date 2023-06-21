import Swal from 'sweetalert2';
import useAddToCart from '../../../../assets/Hooks/useAddToCart';
import CartDeteail from './CartDeteail';
import { useContext } from 'react';
import { AuthContext } from '../../../Proveiders/AuthProviders';

const Cart = () => {
    const { carts, refetch, setLimit, setPage, limit, page } = useAddToCart();
    const totlaPrice = Math.round(carts.reduce((totalSub, item) => totalSub + item.price, 0));


    const {user} = useContext(AuthContext);
    const totalpage = () => {
        let pages = 0
        fetch(`http://localhost:5000/total-added-food/?email=${user?.email}`)
        .then((res) => {res.json()})
        .then((data) => pages = (data.length))

        return pages;
    }

    const pages = totalpage();
    const pagesNumbar = [...Array(pages / limit).keys()]
    return (
        <div>
            <div className="overflow-x-auto">
                <div className='flex justify-between text-4xl font-bold'>
                    <h1>Total Added Food to cart: {carts.length}</h1>
                    <h1>Total Price: {totlaPrice}</h1>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Product name</th>
                            <th>Category</th>
                            <th>price</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            carts.map(singleProduct => <CartDeteail key={singleProduct._id} singleProduct={singleProduct} />)

                        }

                    </tbody>
                </table>
                <div className='text-center'>
                    <div className="join">
                        {pagesNumbar.map((x, i) =>
                            <button key={i} className="join-item btn">{i+1}</button>)
                            }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;