import { useDispatch } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";

export default function CartTile({ cartItem }) {

const dispatch = useDispatch()

    function handleRemoveFromCart(){
       dispatch(removeFromCart(cartItem.id))
    }

  return (
    <>
      <div className=" flex justify-between items-center bg-red-500 mt-2 mb-2 rounded-xl">
        <div className=" max-h-[180px] flex p-3 ">
          <img
            src={cartItem.image}
            alt={cartItem.title}
          className=" object-cover h-28 w-20"
          />
        </div>
        <div className="  mt-3 ml-10 self-start space-y-5">
          <p className="text-lg font-bold text-white w-60 truncate">
            {cartItem.title}{" "}
          </p>
          <p className="tect-white font-extrabold">{cartItem.price} </p>
        </div>
        <div>
          <button onClick={handleRemoveFromCart }className=" bg-red-950 text-white font-bold rounded-xl p-3 mr-3">
            Remove from cart
          </button>
        </div>
      </div>
    </>
  );
}
