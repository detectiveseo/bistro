import BottomOutletBtn from "../Buttons/BottomOutletBtn";

const OrderCard = ({item}) => {
    const {image, name, price, recipe, category} = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <BottomOutletBtn>Add To Cart</BottomOutletBtn>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;