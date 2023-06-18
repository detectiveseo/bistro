import React from 'react';
import OrderCard from '../../Shared/OrderCard/OrderCard';
import useMenu from '../../../assets/Hooks/useMenu';
import { Helmet } from 'react-helmet';

const ItemsFilter = ({ categoryName, handleAddToCart }) => {
    const menuItems = useMenu();
    const categoryFilter = menuItems.filter(items => items.category === `${categoryName}`)
    return (
        <div className='grid grid-cols-4 gap-3'>
            <Helmet>
                <title>Food Order | {categoryName}</title>
            </Helmet>
            {categoryFilter.map(item =>
                <OrderCard
                    key={item._id}
                    item={item}
                    handleAddToCart={handleAddToCart}
                ></OrderCard>)}
        </div>
    );
};

export default ItemsFilter;