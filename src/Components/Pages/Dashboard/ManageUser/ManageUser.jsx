import React from 'react';
import { useUsers } from '../../../../assets/Hooks/useUsers';

const ManageUser = () => {
    const { useUsers } = useUsers();
    return (
        <div>
            <button className='btn btn-lg'
                onClick={() => useUsers()}
            >Hello</button>
        </div>
    );
};

export default ManageUser;