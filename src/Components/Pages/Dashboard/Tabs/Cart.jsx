import useAddToCart from '../../../../assets/Hooks/useAddToCart';

const Cart = () => {
    const { carts } = useAddToCart();
    return (
        <div>
            <div className="overflow-x-auto">
                <div className='flex justify-between text-4xl font-bold'>
                <h1>Total Added Food to cart: {carts.length}</h1>
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
                                return (
                                    <tr key={singleProduct._id}>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">Hart Hagerty</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            Zemlak, Daniel and Leannon
                                            <br />
                                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                        </td>
                                        <td>Purple</td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">details</button>
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