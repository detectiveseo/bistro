import React from 'react';
import OrderCard from '../../Shared/OrderCard/OrderCard';
import useMenu from '../../../assets/Hooks/useMenu';

const ItemsFilter = ({categoryName}) => {
    const menuItems = useMenu();
    const categoryFilter = menuItems.filter(items => items.category === `${categoryName}`)
    return (
        <div className='grid grid-cols-4 gap-3'>
            {categoryFilter.map(item =>
                <OrderCard
                    key={item._id}
                    item={item}
                ></OrderCard>)}
        </div>
    );
};

export default ItemsFilter;