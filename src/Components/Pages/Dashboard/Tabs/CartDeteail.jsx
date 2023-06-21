import React from 'react';
import Swal from 'sweetalert2';
import { ImCross } from 'react-icons/im';
import useAddToCart from '../../../../assets/Hooks/useAddToCart';

const CartDeteail = ({ singleProduct }) => {
    const { category, image, price, title, _id, email } = singleProduct;
    const { refetch } = useAddToCart();
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                        else {
                            Swal.fire({
                                title: 'Sorry Something Went wroing!',
                                icon: 'warning'
                            }
                            )
                        }

                    })
            }
        })
    }
    return (
        <tr>
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
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white"><ImCross /></button>
            </th>
        </tr>
    )
}

export default CartDeteail;