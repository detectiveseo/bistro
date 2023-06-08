
const MenuCard = ({menu}) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10'>
            {
                menu.map(item => {
                    return (
                        <div key={item._id} className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                            <div className='overflow-hidden w-full lg:w-5/12'>
                                <img className='border rounded-full rounded-ss-none object-cover w-96 h-40' width="300px" height="300px" src={item.image} alt="" />
                            </div>
                            <div className='lg:w-6/12'>
                                <h3 className='text-3xl font-bold'>{item.name} ---------</h3>
                                <p>{item.recipe}</p>
                            </div>
                            <div className='lg:w-2/12'>
                                <p className='font-bold text-2xl'>$ {item.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MenuCard;