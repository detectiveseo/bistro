import BottomOutletBtn from "../Buttons/BottomOutletBtn";

const OrderCard = ({ item, handleAddToCart }) => {
    const { image, name, price, recipe, category } = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 bg-slate-100 border-b-4 border-green-400" onClick={() => { handleAddToCart(item) }} >Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;