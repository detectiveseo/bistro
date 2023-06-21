import useAddToCart from '../../../../assets/Hooks/useAddToCart';
import { ImCross } from 'react-icons/im';

const Cart = () => {
    const { carts } = useAddToCart();
    const totlaPrice = Math.round(carts.reduce((totalSub, item) => totalSub + item.price, 0))
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
                        {/* row 1 */}
                        {
                            carts.map(singleProduct => {
                                const { category, image, price, title, _id, email } = singleProduct;
                                return (
                                    <tr key={singleProduct._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={image} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{title}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">{category}</span>
                                        </td>
                                        <td>{price}</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs"><ImCross /></button>
                                        </th>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;